export type RootStackParamList = {
    homeScreen: { menuList: any[] }; // Pass menu list as a parameter to HomeScreen
    enterScreen: { menuList: any[] } | undefined; // Optional param for EnterScreen
  };