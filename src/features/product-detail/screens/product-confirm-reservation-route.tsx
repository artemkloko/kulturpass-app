import React, { useCallback } from 'react'

import { useModalNavigation } from '../../../navigation/modal/hooks'
import { ModalScreenProps } from '../../../navigation/modal/types'
import { createRouteConfig } from '../../../navigation/utils/createRouteConfig'
import { Offer, Product } from '../../../services/api/types/commerce/api-types'
import { modalCardStyle } from '../../../theme/utils'
import { ReservationDetailRouteParams } from '../../reservations/screens/reservation-detail-route'
import { ProductDetailErrorAlert } from '../components/product-detail-error-alert'
import { useQueryProductDetail } from '../hooks/use-query-product-detail'
import { useSelectedOrClosestOffer } from '../hooks/use-selected-or-closest-offer'
import { ProductConfirmReservationScreen } from './product-confirm-reservation-screen'

export const ProductConfirmReservationRouteName = 'ProductConfirmReservation'

export type ProductConfirmReservationRouteParams = {
  productCode: NonNullable<Product['code']>
  offerId: Offer['id']
}

type ProfileScreenProps = ModalScreenProps<'ProductConfirmReservation'>

export const ProductConfirmReservationRoute: React.FC<ProfileScreenProps> = ({ route }) => {
  const modalNavigation = useModalNavigation()
  const { productCode, offerId } = route.params

  const onClose = useCallback(() => {
    modalNavigation.closeModal()
  }, [modalNavigation])

  const onBack = useCallback(() => {
    modalNavigation.goBack()
  }, [modalNavigation])

  const afterReserveProduct = useCallback(
    (params: ReservationDetailRouteParams) => {
      modalNavigation.navigate({ screen: 'ReservationDetail', params })
    },
    [modalNavigation],
  )

  const { data: productDetail, error, isLoading } = useQueryProductDetail(productCode)
  const selectedOffer = useSelectedOrClosestOffer(productDetail, offerId)

  if (!productDetail || !selectedOffer) {
    return (
      <ProductDetailErrorAlert
        error="productDetail_getProductDetailError_message"
        visible={!isLoading && !!error}
        onClose={onClose}
      />
    )
  }

  return (
    <ProductConfirmReservationScreen
      onBack={onBack}
      onClose={onClose}
      afterReserveProduct={afterReserveProduct}
      productDetail={productDetail}
      selectedOffer={selectedOffer}
    />
  )
}

export const ProductConfirmReservationRouteConfig = createRouteConfig({
  name: ProductConfirmReservationRouteName,
  component: ProductConfirmReservationRoute,
  options: { cardStyle: modalCardStyle },
})
