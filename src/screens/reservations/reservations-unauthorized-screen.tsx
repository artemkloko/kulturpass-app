import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../../components/button/button'
import { Illustration } from '../../components/illustration/illustration'

import { Screen } from '../../components/screen/screen'
import { ScreenContent } from '../../components/screen/screen-content'
import { ScreenHeader } from '../../components/screen/screen-header'
import { TranslatedText } from '../../components/translated-text/translated-text'
import { useTestIdBuilder } from '../../services/test-id/test-id'
import { useTranslation } from '../../services/translation/translation'
import { colors } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

export type ReservationsUnauthorizedScreenProps = {
  onSignInRequested: () => void
}

export const ReservationsUnauthorizedScreen: React.FC<ReservationsUnauthorizedScreenProps> = ({
  onSignInRequested,
}) => {
  const { t } = useTranslation()
  const { buildTestId } = useTestIdBuilder()

  return (
    <Screen
      testID={buildTestId('reservations_unauthorized')}
      header={
        <ScreenHeader
          testID={buildTestId('reservations_unauthorized_headline')}
          title={t('reservations_headline')}
          borderBottom
        />
      }>
      <ScreenContent style={styles.content}>
        <Illustration
          testID={buildTestId('reservations_unauthorized_image')}
          i18nKey="reservations_list_noPendingItems_image_alt"
          type="empty-state-reservations"
        />
        <TranslatedText
          textStyle="HeadlineH4Extrabold"
          textStyleOverrides={styles.title}
          i18nKey="reservations_unauthorized_no_reservations_title"
          testID={buildTestId('reservations_unauthorized_no_reservations_title')}
        />
        <TranslatedText
          textStyle="BodyRegular"
          textStyleOverrides={styles.hint}
          i18nKey="reservations_unauthorized_no_reservations_hint"
          testID={buildTestId('reservations_unauthorized_no_reservations_hint')}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={onSignInRequested}
            testID={buildTestId('reservations_unauthorized_sign_in')}
            i18nKey="login_button"
            widthOption="content"
          />
        </View>
      </ScreenContent>
    </Screen>
  )
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    marginTop: spacing[2],
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.basicBlack,
  },
  hint: {
    marginTop: spacing[2],
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primaryDark,
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})
