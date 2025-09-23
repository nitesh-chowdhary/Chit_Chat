import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bottomTabScreens } from './const';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      {bottomTabScreens.map(item => (
        <Tab.Screen
          name={item?.name}
          component={item?.component}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  );
}
