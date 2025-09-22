import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppNavigation, useTheme } from '@/hooks';
import { layout, space } from '@/styles';
import { Screen, Text, TextInput } from '@/components/core';

const Login = () => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login with:', phone, password);
  };

  return (
    <Screen containerStyle={layout.justifyCenter}>
      <View style={space.px4}>
        {/* App Name */}
        <Text
          variant="heading"
          style={{ color: theme.primary, marginBottom: 32 }}
        >
          ChatWave
        </Text>

        {/* Phone Input */}
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Phone Number"
          placeholderTextColor={theme.gray500}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Password Input */}
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Password"
          placeholderTextColor={theme.gray500}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={handleLogin}
        >
          <Text variant="body" weight="700" style={{ color: theme.white }}>
            Login
          </Text>
        </TouchableOpacity>

        {/* Navigate to Register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            variant="caption"
            style={{ color: theme.primary, marginTop: 16 }}
          >
            Don’t have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
});

export default Login;
