import { StyleSheet, View } from 'react-native';

import { layout, space } from '@/styles';
import { useAppDispatch, useAppNavigation, useTheme } from '@/hooks';
import { Button, Screen, Text, TextInput } from '@/components/core';
import { useForm } from '@/hooks/form';
import { loginRequest } from '@/store/slices/authSlice';

const initailValues = {
  phone: '',
  password: '',
};

const Login = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { values, handleSubmit, handleChange } = useForm({
    initialValues: initailValues,
  });

  const handleLogin = () => {
    console.log('Login with:', values);
    dispatch(loginRequest(initailValues));
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
          value={values.phone}
          onChangeText={e => handleChange('phone', e)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.gray500}
          secureTextEntry
          value={values.password}
          onChangeText={e => handleChange('password', e)}
        />

        <Button onPress={handleLogin}>Login</Button>
        <Button size="sm" variant="ghost" onPress={handleSubmit}>
          Don’t have an account? Register
        </Button>
      </View>
    </Screen>
  );
};

export default Login;
