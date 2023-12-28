import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#6E77F6', // Purple
  primaryLight: '#E4E6FF', // Purple
  mainBlack: "#161616",
  // primary: '#4f83ff', // Blue
  secondary: '#5D2DFD', // Dark purple

  white: '#fff',
  black: '#000000',
  green: '#75DA64',
  red: '#FF5A5A',
  gray: '#878787',
  darkGray: '#585858',
  lightGray: '#C6C3C3',
  lightGray1: '#f5f6fa',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h1, lineHeight: 34 },
  h2: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  h1m: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h1, lineHeight: 34 },
  h2m: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h2, lineHeight: 30 },
  h3m: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h3, lineHeight: 22 },
  h4m: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body3, lineHeight: 22 },
  bodySemi4: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.body4, lineHeight: 22 },
  body4: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
