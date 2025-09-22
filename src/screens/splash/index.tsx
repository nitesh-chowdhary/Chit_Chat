import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import {
  useAppDispatch,
  useAppNavigation,
  useAppSelector,
  useTheme,
} from '@/hooks';
import { layout } from '@/styles';
import { Device } from '@/utils';
import { Text } from '@/components/core';
import { loginRequest } from '@/store/slices/authSlice';

const SplashScreen = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const user = useAppSelector(store => store.auth.user);

  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    dispatch(loginRequest({ phone: '8653255256', password: 'nitesh' }));
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('Home');
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme?.background }]}>
      <Animated.View style={[{ opacity: fadeAnim }, layout.itemsCenter]}>
        <Text color={theme.success} variant="appName">
          Chit Chat
        </Text>

        {/* Tagline */}
        <Text color={theme.gray500} variant="body">
          Connect. Chat. Enjoy.
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Device.width * 0.3,
    height: Device.width * 0.3,
    marginBottom: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '400',
  },
});
