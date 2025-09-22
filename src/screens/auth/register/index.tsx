import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { useAppNavigation, useTheme } from '@/hooks';
import { Screen, Text, TextInput } from '@/components/core';
import { layout, space } from '@/styles';

const Register = () => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // TODO: Add registration logic
    console.log('Register with:', name, phone, password);
  };

  return (
    <Screen containerStyle={layout.justifyCenter}>
      <View style={space.px4}>
        {/* App Name */}
        <Text
          variant="heading"
          style={{ color: theme.primary, marginBottom: 32 }}
        >
          Chit Chat
        </Text>

        {/* Name Input */}
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Full Name"
          placeholderTextColor={theme.gray500}
          value={name}
          onChangeText={setName}
        />

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

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={handleRegister}
        >
          <Text variant="body" weight="700" style={{ color: theme.white }}>
            Register
          </Text>
        </TouchableOpacity>

        {/* Navigate to Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            variant="caption"
            style={{ color: theme.primary, marginTop: 16 }}
          >
            Already have an account? Login
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

export default Register;
