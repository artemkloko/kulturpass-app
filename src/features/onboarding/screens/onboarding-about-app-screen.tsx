import React from 'react'

import { OnboardingScreen } from '../components/onboarding-screen'

export type OnboardingAboutAppScreenProps = {
  onNext: () => void
}

export const OnboardingAboutAppScreen: React.FC<OnboardingAboutAppScreenProps> = ({ onNext }) => {
  return (
    <OnboardingScreen
      testID="onboarding_aboutApp"
      titleI18nKey="onboarding_aboutApp_headline_title"
      contentTitleI18nKey="onboarding_aboutApp_content_title"
      contentTextI18nKey="onboarding_aboutApp_content_text"
      acceptButtonI18nKey="onboarding_aboutApp_nextButton"
      illustrationI18nKey="onboarding_aboutApp_image_alt"
      illustrationType="onboarding"
      dataprivacyI18nKey="onboarding_aboutApp_dpsLink"
      onAccept={onNext}
    />
  )
}
