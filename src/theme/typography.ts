import { StyleSheet } from 'react-native'

export const typography = {
  primary: 'Nunito',
}

export const textStyles = StyleSheet.create({
  /**
   * new design
   */
  HeadlineH1Black: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 40,
    lineHeight: 48,
  },
  HeadlineH2Black: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 36,
  },
  HeadlineH3Extrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 25,
    lineHeight: 29,
  },
  HeadlineH4Extrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 21,
    lineHeight: 28,
  },
  HeadlineH4Bold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 21,
    lineHeight: 28,
  },
  HeadlineH4Regular: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 21,
    lineHeight: 28,
  },

  SubtitleBlack: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 19,
    lineHeight: 23,
  },
  SubtitleExtrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 19,
    lineHeight: 23,
  },
  SubtitleSemibold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 19,
    lineHeight: 23,
  },
  SubtitleRegular: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 23,
  },

  BodyBlack: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 17,
    lineHeight: 23,
  },
  BodyExtrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 17,
    lineHeight: 23,
  },
  BodyBold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 23,
  },
  BodyMedium: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 23,
  },
  BodyRegular: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 23,
  },

  BodySmallExtrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 14.8,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  BodySmallBold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14.8,
    lineHeight: 18,
    letterSpacing: 0.25,
  },
  BodySmallMedium: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14.8,
    lineHeight: 18,
    letterSpacing: 0.25,
  },
  BodySmallRegular: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14.8,
    lineHeight: 20,
    letterSpacing: 0.25,
  },

  CaptionExtrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.4,
  },
  CaptionSemibold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.4,
  },

  MicroExtraboldCaps: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  MicroExtrabold: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.3,
  },
  MicroMedium: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  MicroMediumCaps: {
    fontFamily: typography.primary,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
})
