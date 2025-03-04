import React, { useCallback, useState } from 'react'
import { Linking, Pressable, StyleSheet, Text, View, ViewProps } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import Clipboard from '@react-native-clipboard/clipboard'

import { Button } from '../../../components/button/button'
import { Icon } from '../../../components/icon/icon'
import { TranslatedText } from '../../../components/translated-text/translated-text'
import { OrderEntry } from '../../../services/api/types/commerce/api-types'
import { useTestIdBuilder } from '../../../services/test-id/test-id'
import { spacing } from '../../../theme/spacing'
import { textStyles } from '../../../theme/typography'
import { colors } from '../../../theme/colors'
import { useTranslation } from '../../../services/translation/translation'

export type ReservationDetailPickupInfoProps = {
  orderEntry: OrderEntry
}

export const ReservationDetailPickupInfo: React.FC<ReservationDetailPickupInfoProps> = ({ orderEntry }) => {
  const { t } = useTranslation()
  const { buildTestId } = useTestIdBuilder()
  const [state, setState] = useState<{ containerWidth?: number }>({})

  const onContainerLayout: NonNullable<ViewProps['onLayout']> = useCallback(event => {
    const { width } = event.nativeEvent.layout
    setState(currentState => ({ ...currentState, containerWidth: width }))
  }, [])

  const onPressVoucherCodeCopy = useCallback(() => {
    if (!orderEntry.voucherCode) {
      return
    }

    Clipboard.setString(orderEntry.voucherCode)
  }, [orderEntry.voucherCode])

  const onPressVoucherRedemptionUrl = useCallback(async () => {
    if (!orderEntry.voucherRedemptionUrl) {
      return
    }

    if (await Linking.canOpenURL(orderEntry.voucherRedemptionUrl)) {
      await Linking.openURL(orderEntry.voucherRedemptionUrl)
    }
  }, [orderEntry.voucherRedemptionUrl])

  return (
    <View style={styles.container} onLayout={onContainerLayout}>
      {orderEntry.voucherCode && orderEntry.voucherIsValid ? (
        <>
          <TranslatedText
            i18nKey="reservationDetail_header_voucherScenario_pickup_voucherSection_headline"
            textStyle="CaptionSemibold"
            textStyleOverrides={styles.voucherCodeHeadline}
          />
          <Pressable
            style={styles.voucherCodeContainer}
            onPress={onPressVoucherCodeCopy}
            testID={buildTestId('reservationDetail_header_voucherScenario_pickup_voucherSection_voucherCode')}
            accessibilityLabel={orderEntry.voucherCode}>
            <Text style={styles.voucherCodeText}>{orderEntry.voucherCode}</Text>
            <Icon
              source="Clipboard"
              style={styles.voucherCodeCopyIcon}
              accessibilityLabel={t('productDetail_offer_copyToClipboard')}
            />
          </Pressable>
        </>
      ) : null}
      {orderEntry.voucherRedemptionUrl && orderEntry.voucherIsValid ? (
        <Button
          variant="tertiary"
          i18nKey="reservationDetail_header_voucherScenario_pickup_voucherSection_redeemButton"
          iconSource="LinkArrow"
          iconPosition="left"
          widthOption="grow"
          bodyStyleOverrides={styles.voucherRedemptionUrlButton}
          onPress={onPressVoucherRedemptionUrl}
        />
      ) : null}
      {orderEntry.barcodeDisplayType === 'QR_CODE' && orderEntry.barcodeData ? (
        <QRCode value={orderEntry.barcodeData} size={state.containerWidth} />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  voucherCodeHeadline: {
    ...textStyles.CaptionSemibold,
    marginBottom: spacing[2],
    color: colors.moonDarkest,
  },
  voucherCodeContainer: {
    flexDirection: 'row',
    marginBottom: spacing[6],
  },
  voucherCodeText: {
    ...textStyles.HeadlineH4Extrabold,
    color: colors.moonDarkest,
  },
  voucherCodeCopyIcon: {
    marginLeft: spacing[5],
  },
  voucherRedemptionUrlButton: {
    marginBottom: spacing[7],
    flex: 1,
  },
})
