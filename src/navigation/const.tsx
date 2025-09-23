import Splash from '@/screens/splash';

// auth
import Login from '@/screens/auth/login';
import Register from '@/screens/auth/register';

// bottom tab
import Home from '@/screens/app/home';
import Status from '@/screens/app/status';
import { MyTabs } from './BottomTabNavigator';

import type { ScreenTypes } from '@/types';

export enum ScreenName {
  Splash = 'Splash',

  // auth screens
  Login = 'Login',
  Register = 'Register',

  // app screens
  Home = 'Home',
  Status = 'Status',
  BottomTab = 'BottomTab',
}

export const splashScreen: ScreenTypes.Screen = {
  name: ScreenName.Splash,
  component: Splash,
};

export const authScreens: ScreenTypes.Screens = [
  splashScreen,
  {
    name: ScreenName.Login,
    component: Login,
  },
  {
    name: ScreenName.Register,
    component: Register,
  },
];

export const appScreens: ScreenTypes.Screens = [
  splashScreen,
  {
    name: ScreenName.BottomTab,
    component: MyTabs,
  },
];

export const bottomTabScreens = [
  {
    name: ScreenName.Home,
    component: Home,
  },
  {
    name: ScreenName.Status,
    component: Status,
  },
];
