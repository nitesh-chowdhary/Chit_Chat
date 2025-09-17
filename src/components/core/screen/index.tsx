import { FC } from 'react';
import { KeyboardAvoidingView, StatusBar, Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { ScreenProps } from './type';
import ScrollView from '../scrollview';
import { layout } from '../../../styles';

const Screen: FC<ScreenProps> = ({
  scrollable = false,
  children,
  safeAreaStyle,
  KeyboardAvoidingViewProps,
  StatusBarProps,
  ViewProps,
  ScrollViewProps,
  keyboardBehavior,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={layout.flex}
      behavior={
        keyboardBehavior ?? (Platform.OS === 'ios' ? 'padding' : undefined)
      }
      {...KeyboardAvoidingViewProps}
    >
      <View
        style={[
          layout.flex,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
          safeAreaStyle,
        ]}
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
          <>{children}</>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Screen;
