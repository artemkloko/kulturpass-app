import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import { z } from 'zod'

import { Button } from '../../components/button/button'
import { FormFieldWithControl } from '../../components/form-fields/form-field-with-control'
import { TextFormField } from '../../components/form-fields/text-form-field'
import { ModalScreen } from '../../components/modal-screen/modal-screen'
import { ScreenContent } from '../../components/screen/screen-content'
import { ModalScreenHeader } from '../../components/modal-screen/modal-screen-header'
import { TranslatedText } from '../../components/translated-text/translated-text'
import { ErrorAlert } from '../../features/form-validation/components/error-alert'
import { useValidationErrors } from '../../features/form-validation/hooks/use-validation-errors'
import { EMAIL_SCHEMA } from '../../features/form-validation/utils/form-validation'
import { CdcStatusValidationError } from '../../services/errors/cdc-errors'
import { ErrorWithCode, UnknownError } from '../../services/errors/errors'
import { useTestIdBuilder } from '../../services/test-id/test-id'
import { useTranslation } from '../../services/translation/translation'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

export type ForgotPasswordFormData = {
  email: string
}

export type ForgotPasswordScreenProps = {
  onHeaderPressClose: () => void
  onFormSubmit: (email: string) => Promise<void>
}
export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ onHeaderPressClose, onFormSubmit }) => {
  const { buildTestId } = useTestIdBuilder()
  const { t } = useTranslation()
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(
      z.object({
        email: EMAIL_SCHEMA(t),
      }),
    ),
  })

  const { setErrors } = useValidationErrors(form)
  const [visibleError, setVisibleError] = useState<ErrorWithCode | null>(null)

  const onSubmit = form.handleSubmit(async data => {
    try {
      await onFormSubmit(data.email)
    } catch (error: unknown) {
      if (error instanceof CdcStatusValidationError) {
        setErrors(error)
      } else if (error instanceof ErrorWithCode) {
        setVisibleError(error)
      } else {
        setVisibleError(new UnknownError())
      }
    }
  })

  return (
    <ModalScreen testID={buildTestId('forgotPassword')}>
      <ErrorAlert error={visibleError} onDismiss={setVisibleError} />
      <ModalScreenHeader
        titleI18nKey="forgotPassword_headline"
        testID={buildTestId('forgotPassword_headline')}
        onPressClose={onHeaderPressClose}
      />
      <ScreenContent style={styles.screenContent}>
        <TranslatedText
          textStyle="BodyRegular"
          textStyleOverrides={styles.description}
          i18nKey="forgotPassword_copytext"
          testID={buildTestId('forgotPassword_copytext')}
        />
        <FormFieldWithControl
          name={'email'}
          component={TextFormField}
          testID={buildTestId('forgotPassword_form_email')}
          labelI18nKey="forgotPassword_form_email"
          control={form.control}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <View style={styles.submitButton}>
          <Button
            disabled={!form.formState.isValid}
            testID={buildTestId('forgotPassword_form_submitButton')}
            i18nKey="forgotPassword_form_submitButton"
            variant="secondary"
            onPress={onSubmit}
          />
        </View>
      </ScreenContent>
    </ModalScreen>
  )
}

const styles = StyleSheet.create({
  screenContent: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[7],
  },
  submitButton: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: spacing[7],
  },
  description: {
    marginBottom: spacing[6],
    color: colors.moonDarkest,
  },
})
