import Home from '@/screens/app/home';
import Login from '@/screens/auth/login';
import Register from '@/screens/auth/register';
import Splash from '@/screens/splash';
import type { ScreenTypes } from '@/types';

export enum ScreenName {
  Splash = 'Splash',

  // auth screens
  Login = 'Login',
  Register = 'Register',

  // app screens
  Home = 'Home',
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
    name: ScreenName.Home,
    component: Home,
  },
];
