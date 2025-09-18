import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { appScreens, authScreens, splashScreen } from './const';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const isAuthUser = false;
  const screens = isAuthUser ? appScreens : authScreens;

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default StackNavigator;
