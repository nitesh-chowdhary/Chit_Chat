import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { appScreens, authScreens, splashScreen } from './const';
import { Screens } from './type';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const isAuthUser = false;
  const screens: Screens = isAuthUser ? appScreens : authScreens;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={splashScreen.name}>
        {[splashScreen, ...screens].map(item => (
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

export default Navigation;
