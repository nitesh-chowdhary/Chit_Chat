import { Dimensions, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export namespace Device {
  export const width = screenWidth;
  export const height = screenHeight;
  export const isIOS = Platform.OS === 'ios';
  export const isAndroid = Platform.OS === 'android';
}
