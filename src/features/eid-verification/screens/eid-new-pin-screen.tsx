import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { z } from 'zod'

import { ModalScreen } from '../../../components/modal-screen/modal-screen'
import { ModalScreenHeader } from '../../../components/modal-screen/modal-screen-header'
import { TranslatedText } from '../../../components/translated-text/translated-text'
import { useTestIdBuilder } from '../../../services/test-id/test-id'
import { colors } from '../../../theme/colors'
import { spacing } from '../../../theme/spacing'
import { PinInput } from '../components/pin-input'
import { FormFieldWithControl } from '../../../components/form-fields/form-field-with-control'
import { AboutPinLinkSection } from '../components/about-pin-link-section'
import { EidButtonFooter } from '../components/eid-button-footer'
import { useTranslation } from '../../../services/translation/translation'

export type EidNewPinScreenProps = {
  onNext: (newPin: string) => void
  onClose: () => void
}

export const EidNewPinScreen: React.FC<EidNewPinScreenProps> = ({ onNext, onClose }) => {
  const { buildTestId } = useTestIdBuilder()
  const { t } = useTranslation()

  const form = useForm<{ newPin: string; confirmNewPin: string }>({
    resolver: zodResolver(
      z
        .object({
          newPin: z.string().min(6).max(6),
          confirmNewPin: z.string().min(6).max(6),
        })
        .refine(data => data.newPin === data.confirmNewPin, {
          path: ['confirmNewPin'],
          message: t('eid_newPinView_confirmNewPin_pinNotMatchingError'),
        }),
    ),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  useEffect(() => {
    const sub = form.watch(({ newPin, confirmNewPin }) => {
      if (newPin?.length === 6 && confirmNewPin?.length === 6) {
        form.trigger()
      }
    })
    return () => sub.unsubscribe()
  }, [form])

  const onPressSubmit = form.handleSubmit(async values => {
    onNext(values.newPin)
  })

  return (
    <ModalScreen whiteBottom testID={buildTestId('eid_newPinView')}>
      <ModalScreenHeader
        testID={buildTestId('eid_newPinView_title')}
        titleI18nKey="eid_newPinView_title"
        onPressClose={onClose}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.contentContainer}>
          <TranslatedText
            textStyleOverrides={styles.contentText}
            testID={buildTestId('eid_newPinView_content_text')}
            i18nKey="eid_newPinView_content_text"
            textStyle="BodyRegular"
          />
          <TranslatedText
            testID={buildTestId('eid_newPinView_newPin_title')}
            i18nKey="eid_newPinView_newPin_title"
            textStyle="HeadlineH4Extrabold"
            textStyleOverrides={{ color: colors.moonDarkest }}
          />
          <View style={styles.newPinView}>
            <FormFieldWithControl
              testID={buildTestId('eid_newPinView_newPin_input')}
              name="newPin"
              control={form.control}
              component={PinInput}
              pinLength={6}
            />
          </View>
          <TranslatedText
            testID={buildTestId('eid_newPinView_confirmNewPin_title')}
            i18nKey="eid_newPinView_confirmNewPin_title"
            textStyle="HeadlineH4Extrabold"
            textStyleOverrides={{ color: colors.moonDarkest }}
          />
          <View style={styles.confirmPinView}>
            <FormFieldWithControl
              testID={buildTestId('eid_newPinView_confirmNewPin_input')}
              name="confirmNewPin"
              control={form.control}
              component={PinInput}
              pinLength={6}
            />
          </View>
          <AboutPinLinkSection showResetPin type="pin" />
        </View>
      </ScrollView>
      <EidButtonFooter onNext={onPressSubmit} onCancel={onClose} nextDisabled={!form.formState.isValid} />
    </ModalScreen>
  )
}

export const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flexDirection: 'column',
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[6],
    flexGrow: 1,
  },
  contentText: {
    paddingVertical: spacing[6],
    flexWrap: 'wrap',
    color: colors.moonDarkest,
  },
  newPinView: {
    paddingTop: spacing[9],
    paddingBottom: spacing[8],
  },
  confirmPinView: {
    paddingTop: spacing[9],
    paddingBottom: spacing[13],
  },
})
