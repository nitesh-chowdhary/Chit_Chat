import Login from '../screens/auth/login';
import Splash from '../screens/splash';
import { Screen, ScreenName, Screens } from './type';

export const splashScreen: Screen = {
  name: ScreenName.Splash,
  component: Splash,
};

export const authScreens: Screens = [
  {
    name: ScreenName.Login,
    component: Login,
  },
];

export const appScreens: Screens = [];
