import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export namespace Device {
  export const screen = { width, height };
  export const isIOS = Platform.OS === 'ios';
  export const isAndroid = Platform.OS === 'android';
}
