import { View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { loginRequest, logoutRequest } from '@/store/slices/authSlice';
import { Screen, Text } from '@/components/core';
import { layout } from '@/styles';

const Login = () => {
  return (
    <Screen>
      <Text>Login</Text>
    </Screen>
  );
};

export default Login;
