import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { layout, space } from '@/styles';
import { useAppNavigation, useTheme } from '@/hooks';
import { Button, Screen, Text, TextInput } from '@/components/core';

const Login = () => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const [userInfo, setUserInfo] = useState({
    phone: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('Login with:', userInfo);
  };

  return (
    <Screen containerStyle={layout.justifyCenter}>
      <View style={space.px4}>
        <Text
          variant="heading"
          color={theme.primary}
          style={StyleSheet.compose(space.mb4, layout.selfCenter)}
        >
          Login To Chit Chat
        </Text>

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={theme.gray500}
          keyboardType="phone-pad"
          value={userInfo.phone}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.gray500}
          secureTextEntry
          value={userInfo.password}
        />

        <Button onPress={handleLogin}>Login</Button>
        <Button
          size="sm"
          variant="ghost"
          onPress={() => navigation.replace('Register')}
        >
          Don’t have an account? Register
        </Button>
      </View>
    </Screen>
  );
};

export default Login;
