import React, { useCallback } from 'react'
import { useTabsNavigation } from '../../navigation/tabs/hooks'

import { createRouteConfig } from '../../navigation/utils/createRouteConfig'
import { HomeRouteConfig } from '../home/home-route'
import { RegistrationSuccessScreen, RegistrationSuccessScreenProps } from './registration-success-screen'

export const RegistrationSuccessRouteName = 'RegistrationSuccess'

export type RegistrationSuccessRouteParams = undefined

export const RegistrationSuccessRoute: React.FC = () => {
  const tabsNavigation = useTabsNavigation()
  const onConfirmation: RegistrationSuccessScreenProps['onConfirmation'] = useCallback(() => {
    tabsNavigation.navigate(HomeRouteConfig.name)
  }, [tabsNavigation])

  return <RegistrationSuccessScreen onConfirmation={onConfirmation} />
}

export const RegistrationSuccessRouteConfig = createRouteConfig({
  name: RegistrationSuccessRouteName,
  component: RegistrationSuccessRoute,
})
