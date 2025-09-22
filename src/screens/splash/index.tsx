import { Screen, Text } from '@/components/core';
import { useAppNavigation } from '@/hooks';
import { layout } from '@/styles';
import React, { useEffect } from 'react';

const Splash = () => {
  const navigaiton = useAppNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigaiton.navigate('Login');
    }, 1000);
  }, []);

  return (
    <Screen containerStyle={layout.center}>
      <Text variant="title">Splash Screen</Text>
    </Screen>
  );
};

export default Splash;
