import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { layout, space } from '@/styles';
import { useAppNavigation, useTheme } from '@/hooks';
import { Button, Screen, Text, TextInput } from '@/components/core';

const Register = () => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    password: '',
  });

  const handleRegister = () => {
    console.log('Register with:', userInfo);
  };

  return (
    <Screen containerStyle={layout.justifyCenter}>
      <View style={space.px4}>
        <Text
          variant="heading"
          color={theme.primary}
          style={StyleSheet.compose(space.mb4, layout.selfCenter)}
        >
          Register To Chit Chat
        </Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor={theme.gray500}
          value={userInfo?.name}
          // onChangeText={setName}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={theme.gray500}
          keyboardType="phone-pad"
          value={userInfo?.phone}
          // onChangeText={setPhone}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.gray500}
          secureTextEntry
          value={userInfo?.password}
          // onChangeText={setPassword}
        />

        <Button onPress={handleRegister}>Register</Button>
        <Button
          size="sm"
          variant="ghost"
          onPress={() => navigation.replace('Login')}
        >
          Already have an account? Login
        </Button>
      </View>
    </Screen>
  );
};

export default Register;
