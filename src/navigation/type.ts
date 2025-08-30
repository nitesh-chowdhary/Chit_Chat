export enum ScreenName {
  Splash = 'Splash',
  Login = 'Login',
}

export interface Screen {
  name: string;
  component: any;
}

export type Screens = Screen[];
