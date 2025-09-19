import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { loginRequest, logoutRequest } from '../../../store/slices/authSlice';
import { useAppNavigation, useKeyboard, useTheme } from '../../../hooks';

const Login = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.auth,
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginRequest({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Login;
