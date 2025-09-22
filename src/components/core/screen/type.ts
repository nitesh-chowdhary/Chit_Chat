import { ReactNode } from 'react';
import {
  ScrollViewProps as RNScrollViewProps,
  ViewProps as RNViewProps,
  StatusBarProps as RNStatusBarProps,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ScreenProps {
  /** Screen children content */
  children: ReactNode;

  /** Whether the screen should be scrollable (default: false) */
  scrollable?: boolean;

  /** Which safe area edges to respect (default: all, can include 'all') */
  safeArea?: Array<'top' | 'bottom' | 'left' | 'right' | 'none'>;

  /** Additional style for the main container View (when not scrollable) */
  containerStyle?: StyleProp<ViewStyle>;

  /** Additional style for the SafeAreaView wrapper */
  safeAreaStyle?: StyleProp<ViewStyle>;

  /** Override behavior of KeyboardAvoidingView (default: ios='padding') */
  keyboardBehavior?: RNKeyboardAvoidingViewProps['behavior'];

  /** Props passed directly to the underlying View (non-scrollable mode) */
  ViewProps?: RNViewProps;

  /** Props passed directly to the underlying ScrollView (scrollable mode) */
  ScrollViewProps?: RNScrollViewProps;

  /** Props passed directly to the StatusBar */
  StatusBarProps?: RNStatusBarProps;

  /** Props passed directly to the KeyboardAvoidingView */
  KeyboardAvoidingViewProps?: RNKeyboardAvoidingViewProps;
}
