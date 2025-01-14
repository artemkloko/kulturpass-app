import { z } from 'zod'

import { AvailableTranslations } from '../../../components/translated-text/types'
import {
  CdcAccountDisabledError,
  CdcInvalidLoginIdError,
  CdcResponseValidationError,
} from '../../../services/errors/cdc-errors'
import { ErrorWithCode } from '../../../services/errors/errors'
import { TranslationFunction } from '../../../services/translation/translation'

export const EMAIL_PATTERN = /^[^@]+@[^@]+\..+$/

export const EMAIL_SCHEMA = (t: TranslationFunction, isRequired?: boolean) => {
  let schema = z.string().trim()

  if (isRequired) {
    schema = schema.nonempty()
  }

  return schema.regex(EMAIL_PATTERN, { message: t('form_error_not_valid_email') })
}

export const DATE_PATTERN = /\d\d\d\d-\d\d-\d\d/

export const DATE_SCHEMA = (t: TranslationFunction) => {
  return z.literal('').or(z.string().regex(DATE_PATTERN, { message: t('form_error_date') }))
}

export const POSTAL_CODE_PATTERN = /^[0-9]{5}$/

export const POSTAL_CODE_SCHEMA = (t: TranslationFunction, isRequired?: boolean) => {
  let schema = z.string().trim()

  if (isRequired) {
    schema = schema.nonempty()
  }

  return schema.regex(POSTAL_CODE_PATTERN, { message: t('form_error_not_valid_postal_code') })
}

export type TranslationArgs = { key: AvailableTranslations; values?: Record<string, string> }

export const getErrorTranslationKeyFromValidationError = (
  validationError: CdcResponseValidationError,
): TranslationArgs => {
  switch (validationError.errorCode) {
    case 400003: {
      return { key: 'form_error_email_exists' }
    }
    case 400006: {
      const matches = validationError.message.match(/'(\d)'/)
      if (matches !== null) {
        if (validationError.message.includes('minimum length')) {
          const minLength = parseInt(matches[1], 10)
          return { key: 'form_error_password_min_length', values: { minLength: `${minLength}` } }
        }
        if (validationError.message.includes('character groups')) {
          const count = parseInt(matches[1], 10)
          return { key: 'form_error_password_character_groups', values: { count: `${count}` } }
        }
      }
    }
  }

  return { key: 'form_error_fallback' }
}

export const getErrorDescriptionTranslationFromErrorWithCode = (
  error: ErrorWithCode | null,
): {
  title: TranslationArgs
  message: TranslationArgs
} => {
  if (error) {
    switch (error.constructor) {
      case CdcAccountDisabledError: {
        return {
          title: { key: 'cdc_account_disabled_title' },
          message: { key: 'cdc_account_disabled_message' },
        }
      }
      case CdcInvalidLoginIdError: {
        return {
          title: { key: 'cdc_invalid_loginid_title' },
          message: { key: 'cdc_invalid_loginid_message' },
        }
      }
    }
  }

  return {
    title: { key: 'error_alert_title_fallback' },
    message: { key: 'error_alert_message_fallback' },
  }
}
