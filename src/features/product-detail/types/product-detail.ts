import { Category, Image, Offer, Price } from '../../../services/api/types/commerce/api-types'

export enum ProductTypes {
  Audio = 'audioProductWsDTO',
  Book = 'bookProductWsDTO',
  Cinema = 'cinemaProductWsDTO',
  Exhibit = 'exhibitProductWsDTO',
  MusicInstrument = 'musicInstrumentProductWsDTO',
  SheetMusic = 'sheetMusicProductWsDTO',
  StagedEvent = 'stagedEventProductWsDTO',
  Video = 'videoProductWsDTO',
  Voucher = 'voucherProductWsDTO',
}

export type ProductDetailBase<ProductType extends ProductTypes> = {
  /**
   * The type of product
   */
  productType: ProductType
  /**
   * product categories
   */
  categories: Array<Category>
  /**
   * Product sku code
   */
  code: string
  /**
   * Descriptive text - localised describing the product.
   */
  description: string
  /**
   * title of the product
   */
  name: string
  /**
   * flag indicating if the product is available for reservation - check approval status
   */
  purchasable: boolean
  /**
   * url of this product detail page
   */
  url: string
  /**
   * images for this product
   */
  images: Array<Image>
  /**
   * The active offers for this product
   */
  offers?: Array<Offer>
}

export type AudioProductDetail = ProductDetailBase<ProductTypes.Audio> & {
  /**
   * The ean of the audio product
   */
  ean: string
  /**
   * The artist of the audio product
   */
  artist: string
  /**
   * One of: Dvd, Vinyl, Other  - optional
   */
  audioFormat?: 'DVD' | 'VINYL' | 'OTHER'
}

export type BookProductDetail = ProductDetailBase<ProductTypes.Book> & {
  /**
   * Isbn13 identifier
   */
  isbn: string
  /**
   * Isbn10 identifier - optional
   */
  isbn10?: string
  /**
   * The author of the book
   */
  author: string
  /**
   * The publisher of the book
   */
  publisher: string
  /**
   * The language used in the book - optional
   */
  language?: string
  /**
   * One of: PAPERBACK, HARDBACK - optional
   */
  bookFormat?: 'PAPERBACK' | 'HARDBACK'
}

export type CinemaProductDetail = ProductDetailBase<ProductTypes.Cinema> & {
  /**
   * One of: NoRestriction, Over6, Over12, Over16, Over18
   */
  ageRating: 'NO_RESTRICTION' | 'OVER_6' | 'OVER_12' | 'OVER_16' | "OVER_18'"
  /**
   * the length of the event in minutes
   */
  durationInMins: number
}

export type ExhibitProductDetail = ProductDetailBase<ProductTypes.Exhibit> & {
  /**
   * The starting date of the event in format: : YYYY-MM-DDThh:mm:ss.sssZ
   */
  exhibitStartDate?: string
  /**
   * The ending date of the event in format: : YYYY-MM-DDThh:mm:ss.sssZ
   */
  exhibitEndDate?: string
  /**
   * The location/ address of the event
   */
  venue?: {
    name?: string
    street: string
    city: string
    postalCode: string
  }
}

export type MusicInstrumentProductDetail = ProductDetailBase<ProductTypes.MusicInstrument> & {
  /**
   * The ean of the music instrument product
   */
  ean: string
  /**
   * The manufacturer of the instrument - optional
   */
  manufacturer?: string
}

export type SheetMusicProductDetail = ProductDetailBase<ProductTypes.SheetMusic> & {
  /**
   * Isbn13 identifier
   */
  isbn: string
  /**
   * Isbn10 identifier - optional
   */
  isbn10?: string
  /**
   * The instruments or arrangement this music is for. - optional
   */
  arrangement?: string
  /**
   * The composer of the music
   */
  composer: string
  /**
   * The publisher of the music - optional
   */
  publisher?: string
}

export type StagedEventProductDetail = ProductDetailBase<ProductTypes.StagedEvent> & {
  /**
   * The starting date/time of the event in the format: YYYY-MM-DDThh:mm:ss.sssZ
   */
  eventDateTime?: string
  /**
   * the length of the event in minutes
   */
  durationInMins?: number
  /**
   * The location / address of the event
   */
  venue?: {
    name?: string
    street: string
    city: string
    postalCode: string
  }
}

export type VideoProductDetail = ProductDetailBase<ProductTypes.Video> & {
  /**
   * The ean of the video product
   */
  ean: string
  /**
   * One of: Dvd, Vinyl, Other  - optional
   */
  videoFormat?: 'DVD' | 'BLURAY' | 'ULTRA_HD_4K'
  /**
   * One of: NoRestriction, Over6, Over12, Over16, Over18
   */
  ageRating: 'NO_RESTRICTION' | 'OVER_6' | 'OVER_12' | 'OVER_16' | 'OVER_18'
  /**
   * The length of the video - optional
   */
  durationInMins?: number
}

export type VoucherProductDetail = ProductDetailBase<ProductTypes.Voucher> & {
  voucherPickupPoint?: {
    name?: string
    street: string
    city: string
    postalCode: string
  }
}

export type PriceWithValue = Required<Pick<Price, 'value' | 'currencyIso'>>

export type OfferWithId = Offer & Required<Pick<Offer, 'id'>>

export type ProductDetail =
  | AudioProductDetail
  | BookProductDetail
  | CinemaProductDetail
  | ExhibitProductDetail
  | MusicInstrumentProductDetail
  | SheetMusicProductDetail
  | StagedEventProductDetail
  | VideoProductDetail
  | VoucherProductDetail
