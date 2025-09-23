export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  BottomTab: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
