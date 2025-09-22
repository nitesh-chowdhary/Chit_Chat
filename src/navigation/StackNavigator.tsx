import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { appScreens, authScreens, splashScreen } from './const';
import type { RootState } from '@/store';
import { useAppNavigation } from '@/hooks';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const isAuthUser = !!user;
  const screens = isAuthUser ? appScreens : authScreens;

  return (
    <Stack.Navigator initialRouteName={splashScreen.name}>
      {screens.map(item => (
        <Stack.Screen
          key={item?.name}
          name={item?.name}
          component={item?.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
