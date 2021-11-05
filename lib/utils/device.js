import { Dimensions, Platform } from 'react-native'

const IPHONE_X_WIDTH = 375
const IPHONE_X_HEIGHT = 812
const IPHONE_XR_XSMAX_WIDTH = 414
const IPHONE_XR_XSMAX_HEIGHT = 896
const IPHONE_X_BOTTOM_PORTRAIT = 34
const IPHONE_X_BOTTOM_LANDSCAPE = 24

const IPHONE_11_WIDTH = 414
const IPHONE_11_HEIGHT = 896
const IPHONE_11_PRO_WIDTH = 375
const IPHONE_11_PRO_HEIGHT = 812
const IPHONE_11_PRO_MAX_WIDTH = 414
const IPHONE_11_PRO_MAX_HEIGHT = 896
const IPHONE_11_BOTTOM_PORTRAIT = 34
const IPHONE_11_BOTTOM_LANDSCAPE = 24

const IPHONE_12_WIDTH = 390
const IPHONE_12_HEIGHT = 844
const IPHONE_12_PRO_WIDTH = 390
const IPHONE_12_PRO_HEIGHT = 844
const IPHONE_12_PRO_MAX_WIDTH = 428
const IPHONE_12_PRO_MAX_HEIGHT = 926
const IPHONE_12_MINI_WIDTH = 375
const IPHONE_12_MINI_HEIGHT = 812
const IPHONE_12_BOTTOM_PORTRAIT = 34
const IPHONE_12_BOTTOM_LANDSCAPE = 24

export const ANDROID_SOFTKEY_HEIGHT = 48
export const LANDSCAPE = 'LANDSCAPE'
export const PORTRAIT = 'PORTRAIT'

export const isIPhoneX = () => {
  if (Platform.OS === 'web' || Platform.OS === 'android') return false
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height === IPHONE_X_HEIGHT && width === IPHONE_X_WIDTH) ||
      (height === IPHONE_X_WIDTH && width === IPHONE_X_HEIGHT) ||
      (height === IPHONE_XR_XSMAX_HEIGHT && width === IPHONE_XR_XSMAX_WIDTH) ||
      (height === IPHONE_XR_XSMAX_WIDTH && width === IPHONE_XR_XSMAX_HEIGHT))
  )
}

export const isIPhone11 = () => {
  if (Platform.OS === 'web' || Platform.OS === 'android') return false
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height === IPHONE_11_HEIGHT && width === IPHONE_11_WIDTH) ||
      (height === IPHONE_11_WIDTH && width === IPHONE_11_HEIGHT) ||
      (height === IPHONE_11_PRO_HEIGHT && width === IPHONE_11_PRO_WIDTH) ||
      (height === IPHONE_11_PRO_WIDTH && width === IPHONE_11_PRO_HEIGHT) ||
      (height === IPHONE_11_PRO_MAX_HEIGHT && width === IPHONE_11_PRO_MAX_WIDTH) ||
      (height === IPHONE_11_PRO_MAX_WIDTH && width === IPHONE_11_PRO_MAX_HEIGHT))
  )
}

export const isIPhone12 = () => {
  if (Platform.OS === 'web' || Platform.OS === 'android') return false
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (
      (height === IPHONE_12_WIDTH && width === IPHONE_12_HEIGHT) ||
      (height === IPHONE_12_HEIGHT && width === IPHONE_12_WIDTH) ||
      (height === IPHONE_12_PRO_WIDTH && width === IPHONE_12_PRO_HEIGHT) ||
      (height === IPHONE_12_PRO_HEIGHT && width === IPHONE_12_PRO_WIDTH) ||
      (height === IPHONE_12_PRO_MAX_WIDTH && width === IPHONE_12_PRO_MAX_HEIGHT) ||
      (height === IPHONE_12_PRO_MAX_HEIGHT && width === IPHONE_12_PRO_MAX_WIDTH) ||
      (height === IPHONE_12_MINI_WIDTH && width === IPHONE_12_MINI_HEIGHT) ||
      (height === IPHONE_12_MINI_HEIGHT && width === IPHONE_12_MINI_WIDTH)
    )
  )
}

export const getOrientation = () => {
  const { width, height } = Dimensions.get('screen')
  return width > height ? LANDSCAPE : PORTRAIT
}

export const isLandscape = () => {
  return getOrientation() === LANDSCAPE
}

export const isPortrait = () => {
  return getOrientation() === PORTRAIT
}

export const hasSoftKeysAndroid = viewportHeight => {
  if (Platform.OS === 'android' && isPortrait()) {
    const { height: screenHeight } = Dimensions.get('screen')
    return screenHeight === viewportHeight
  }

  return false
}

export default {
  select({ iPhoneX, iPhone11, iPhone12, androidSoftKeys }) {
    return {
      ...(isIPhone12() ? iPhone12 : isIPhone11() ? iPhone11 : isIPhoneX() ? iPhoneX : {})
    }
  },
  isIPhoneX,
  isIPhone11,
  isIPhone12,
  hasSoftKeysAndroid,
  getOrientation,
  isLandscape,
  isPortrait,
  ANDROID_SOFTKEY_HEIGHT,
  IPHONE_X_BOTTOM_LANDSCAPE,
  IPHONE_X_BOTTOM_PORTRAIT,
  IPHONE_11_BOTTOM_PORTRAIT,
  IPHONE_11_BOTTOM_LANDSCAPE,
  IPHONE_12_BOTTOM_PORTRAIT,
  IPHONE_12_BOTTOM_LANDSCAPE
}
