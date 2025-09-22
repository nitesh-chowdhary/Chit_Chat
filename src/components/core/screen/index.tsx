import { FC } from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { ScreenProps } from './type';
import ScrollView from '../scrollview';
import { layout } from '../../../styles';
import { useTheme } from '@/hooks';

const Screen: FC<ScreenProps> = ({
  children,
  scrollable = false,
  safeArea,
  safeAreaStyle,
  containerStyle,
  keyboardBehavior,
  KeyboardAvoidingViewProps,
  StatusBarProps,
  ViewProps,
  ScrollViewProps,
}) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const resolvedKeyboardBehavior =
    keyboardBehavior ?? (Platform.OS === 'ios' ? 'padding' : undefined);

  let appliedEdges: Array<'top' | 'bottom' | 'left' | 'right'> = [];

  if (safeArea?.length === 0) {
    appliedEdges = [];
  } else if (safeArea) {
    appliedEdges = safeArea as Array<'top' | 'bottom' | 'left' | 'right'>;
  } else {
    appliedEdges = ['top', 'bottom', 'left', 'right'];
  }

  const safeAreaPadding = {
    paddingTop: appliedEdges.includes('top') ? insets.top : 0,
    paddingBottom: appliedEdges.includes('bottom') ? insets.bottom : 0,
    paddingLeft: appliedEdges.includes('left') ? insets.left : 0,
    paddingRight: appliedEdges.includes('right') ? insets.right : 0,
  };

  const containerStyles = [
    layout.flex1,
    safeAreaPadding,
    safeAreaStyle,
    containerStyle,
  ];

  return (
    <KeyboardAvoidingView
      style={layout.flex1}
      behavior={resolvedKeyboardBehavior}
      {...KeyboardAvoidingViewProps}
    >
      <View
        style={StyleSheet.compose(
          {
            backgroundColor: theme.background,
          },
          containerStyles,
        )}
        {...ViewProps}
      >
        <StatusBar
          animated
          barStyle={StatusBarProps?.barStyle ?? 'dark-content'}
          backgroundColor={
            Platform.OS === 'android'
              ? StatusBarProps?.backgroundColor ?? '#FFF'
              : undefined
          }
          {...StatusBarProps}
        />

        {scrollable ? (
          <ScrollView {...ScrollViewProps}>{children}</ScrollView>
        ) : (
          children
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Screen;
