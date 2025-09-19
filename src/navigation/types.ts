export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: {
    email?: string;
  };
  ForgotPassword: undefined;
  Home: undefined;
  Profile: {
    userId: string;
  };
  Settings: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: {
    email?: string;
  };
  ForgotPassword: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  Profile: {
    userId: string;
  };
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}