import Login from '../screens/auth/login';
import Splash from '../screens/splash';
import { ScreenName } from '../types/navigation';
import { Screen, Screens } from './type';

export const splashScreen: Screen = {
  name: ScreenName.Splash,
  component: Splash,
};

export const authScreens: Screens = [
  splashScreen,
  {
    name: ScreenName.Login,
    component: Login,
  },
];

export const appScreens: Screens = [splashScreen];
