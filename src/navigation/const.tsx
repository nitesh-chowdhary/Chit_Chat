import Login from '../screens/auth/login';
import Splash from '../screens/splash';

import { ScreenName, type Screen, type Screens } from '../types/navigation';

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
