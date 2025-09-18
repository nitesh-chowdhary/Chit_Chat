import Login from '../screens/auth/login';
import Splash from '../screens/splash';
import type { ScreenTypes } from '../types';

export enum ScreenName {
  Splash = 'Splash',
  Login = 'Login',
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
];

export const appScreens: ScreenTypes.Screens = [splashScreen];
