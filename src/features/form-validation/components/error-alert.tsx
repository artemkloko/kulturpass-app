import React from 'react'
import { useCallback } from 'react'
import { Alert } from '../../../components/alert/alert'
import { AlertButtonDismiss } from '../../../components/alert/alert-button-dismiss'
import { AlertContent } from '../../../components/alert/alert-content'
import { AlertMessage } from '../../../components/alert/alert-message'
import { AlertTitle } from '../../../components/alert/alert-title'
import { ErrorWithCode } from '../../../services/errors/errors'
import { useTestIdBuilder } from '../../../services/test-id/test-id'
import { getErrorDescriptionTranslationFromErrorWithCode } from '../utils/form-validation'

export type ErrorAlertProps = {
  error: ErrorWithCode | null
  onDismiss: (error: null) => void
}

export const ErrorAlert = ({ error, onDismiss }: ErrorAlertProps) => {
  const { buildTestId } = useTestIdBuilder()

  const onErrorAlertChange = useCallback(
    (visible: boolean) => {
      if (!visible) {
        onDismiss(null)
      }
    },
    [onDismiss],
  )

  const errorDescription = getErrorDescriptionTranslationFromErrorWithCode(error)

  return (
    <Alert visible={error !== null} onChange={onErrorAlertChange} dismissable={true}>
      <AlertContent>
        <AlertTitle i18nKey={errorDescription.title.key} testID={buildTestId('error_alert_title')} />
        <AlertMessage
          i18nKey={errorDescription.message.key}
          i18nParams={errorDescription.message.values}
          testID={buildTestId('error_alert_message')}
        />
        <AlertMessage
          i18nKey="error_alert_message_details"
          i18nParams={{ errorCode: error?.errorCode, detailCode: error?.detailCode }}
          testID={buildTestId('error_alert_message')}
        />
        <AlertButtonDismiss i18nKey="error_alert_cta" testID={buildTestId('error_alert_cta')} />
      </AlertContent>
    </Alert>
  )
}
