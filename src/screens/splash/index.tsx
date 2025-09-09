import { View, Text } from 'react-native';
import React from 'react';
import { Screen } from '../../components/core';
import { Device } from '../../utils';

const Splash = () => {
  return (
    <Screen>
      <Text style={{ width: Device.width }}>index</Text>
    </Screen>
  );
};

export default Splash;
