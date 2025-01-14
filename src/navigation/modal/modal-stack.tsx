import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { LogInRouteConfig } from '../../screens/log-in/log-in-route'
import { LogOutRouteConfig } from '../../screens/log-out/log-out-route'
import { DeveloperMenuRouteConfig } from '../../screens/developer-settings/developer-menu-route'
import { EnvironmentConfigRouteConfig } from '../../screens/developer-settings/environment-config-route'
import { ModalStackWrapper } from './modal-stack-wrapper'
import { ModalParamList } from './types'
import { StorybookRouteConfig } from '../../screens/developer-settings/storybook-route'
import { OnboardingAboutAppRouteConfig } from '../../features/onboarding/screens/onboarding-about-app-route'
import { OnboardingLocationPermissionRouteConfig } from '../../features/onboarding/screens/onboarding-location-permission-route'
import { OnboardingNotificationPermissionRouteConfig } from '../../features/onboarding/screens/onboarding-notification-permission-route'
import { RegistrationFormRouteConfig } from '../../screens/registration/registration-form-route'
import { ProductDetailRouteConfig } from '../../features/product-detail/screens/product-detail-route'
import { RegistrationPreferencesRouteConfig } from '../../screens/registration-preferences/registration-preferences-route'
import { ForgotPasswordRouteConfig } from '../../screens/forgot-password/forgot-password-route'
import { OfferSelectionRouteConfig } from '../../features/product-detail/screens/offer-selection-route'
import { RegistrationSuccessRouteConfig } from '../../screens/registration-success/registration-success-route'
import { RegistrationConsentRouteConfig } from '../../screens/registration/registration-consent-route'
import { RegistrationDataPrivacyRouteConfig } from '../../screens/registration/registration-data-privacy-route'
import { EidAboutVerificationAppRouteConfig } from '../../features/eid-verification/screens/eid-about-verification-route'
import { EidAboutServiceProviderAppRouteConfig } from '../../features/eid-verification/screens/eid-about-service-provider-route'
import { EidInsertCardAppRouteConfig } from '../../features/eid-verification/screens/eid-insert-card-route'
import { EidPinAppRouteConfig } from '../../features/eid-verification/screens/eid-pin-route'
import { EidVerificationCompletionAppRouteConfig } from '../../features/eid-verification/screens/eid-verification-completion-route'
import { EidCanAppRouteConfig } from '../../features/eid-verification/screens/eid-can-route'
import { ReservationDetailRouteConfig } from '../../features/reservations/screens/reservation-detail-route'
import { ProductConfirmReservationRouteConfig } from '../../features/product-detail/screens/product-confirm-reservation-route'
import { SimulationCardConfigRouteConfig } from '../../screens/developer-settings/simulation-card-config-route'
import { EidTransportPinAppRouteConfig } from '../../features/eid-verification/screens/eid-transport-pin-route'
import { EidNewPinAppRouteConfig } from '../../features/eid-verification/screens/eid-new-pin-route'
import { EidChangePinCompletionAppRouteConfig } from '../../features/eid-verification/screens/eid-change-pin-completion-route'
import { EidServiceProviderDetailsAppRouteConfig } from '../../features/eid-verification/screens/eid-service-provider-details-route'
import { EidNFCNotSupportedAppRouteConfig } from '../../features/eid-verification/screens/eid-nfc-not-supported-route'

const Stack = createStackNavigator<ModalParamList>()

export const ModalStack: React.FC = () => {
  return (
    <ModalStackWrapper>
      <StatusBar backgroundColor="#ffffff61" barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="OnboardingAboutApp"
        detachInactiveScreens
        screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
        {/* Auth Routes */}
        <Stack.Screen {...LogOutRouteConfig} />
        <Stack.Screen {...LogInRouteConfig} />
        <Stack.Screen {...ForgotPasswordRouteConfig} />

        {/* Onboarding Routes */}
        <Stack.Group screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen {...OnboardingAboutAppRouteConfig} />
          <Stack.Screen {...OnboardingLocationPermissionRouteConfig} />
          <Stack.Screen {...OnboardingNotificationPermissionRouteConfig} />
        </Stack.Group>

        {/* Registration Routes */}
        <Stack.Screen {...RegistrationConsentRouteConfig} />
        <Stack.Screen {...RegistrationDataPrivacyRouteConfig} />
        <Stack.Screen {...RegistrationFormRouteConfig} />
        <Stack.Screen {...RegistrationSuccessRouteConfig} />
        <Stack.Screen {...RegistrationPreferencesRouteConfig} />

        {/* Product Detail Routes */}
        <Stack.Screen {...ProductDetailRouteConfig} />
        <Stack.Screen {...OfferSelectionRouteConfig} />
        <Stack.Screen {...ProductConfirmReservationRouteConfig} />

        {/* eID Verification */}
        <Stack.Screen {...EidAboutVerificationAppRouteConfig} />
        <Stack.Screen {...EidAboutServiceProviderAppRouteConfig} />
        <Stack.Screen {...EidServiceProviderDetailsAppRouteConfig} />
        <Stack.Screen {...EidInsertCardAppRouteConfig} />
        <Stack.Screen {...EidPinAppRouteConfig} />
        <Stack.Screen {...EidCanAppRouteConfig} />
        <Stack.Screen {...EidTransportPinAppRouteConfig} />
        <Stack.Screen {...EidNewPinAppRouteConfig} />
        <Stack.Screen {...EidVerificationCompletionAppRouteConfig} />
        <Stack.Screen {...EidChangePinCompletionAppRouteConfig} />
        <Stack.Screen {...EidNFCNotSupportedAppRouteConfig} />

        {/* Reservation Detail Routes */}
        <Stack.Screen {...ReservationDetailRouteConfig} />

        {/* Developer Settings Routes */}
        <Stack.Screen {...DeveloperMenuRouteConfig} />
        <Stack.Screen {...EnvironmentConfigRouteConfig} />
        <Stack.Screen {...SimulationCardConfigRouteConfig} />
        <Stack.Screen {...StorybookRouteConfig} />
      </Stack.Navigator>
    </ModalStackWrapper>
  )
}
