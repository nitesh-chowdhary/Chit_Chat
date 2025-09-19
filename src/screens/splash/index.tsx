import { Screen, Text } from '@/components/core';
import { Device } from '@/utils';
import React from 'react';

const Splash = () => {
  return (
    <Screen>
      <Text style={{ width: Device.width }}>index</Text>
    </Screen>
  );
};

export default Splash;
