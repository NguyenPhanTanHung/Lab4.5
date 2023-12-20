import 'react-native-gesture-handler';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useAuth from './src/hooks/useAuth';
import Tabs from './src/navigation/Lab4BookStoreNaviga/tabs';
import { BookDetail } from './src/screens/Lab4BookStoreScr/index';
import LoginScreen from './src/screens/scrLab1/LoginScreen';
import SignUpScreen from './src/screens/scrLab1/SignUpScreen';
import WelcomeScreen from './src/screens/scrLab1/WelcomeScreen';
const NativeStack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const App = () => {
  const userLoginEmail = useAuth();
  console.log(' file: App.js:35 ~ App ~ userLoginEmail:', userLoginEmail.user);
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer theme={theme}>
          {userLoginEmail.user ? (
            <NativeStack.Navigator initialRouteName="HomeScreen">
              <NativeStack.Screen
                name="HomeScreen"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
              />
              <NativeStack.Screen
                name="BookDetail"
                component={BookDetail}
                options={{ headerShown: false }}
              />
            </NativeStack.Navigator>
          ) : (
            <NativeStack.Navigator initialRouteName="WelcomeScreen">
              <NativeStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <NativeStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
              />
              <NativeStack.Screen
                name="LoginScreen"
                component={LoginScreen}
               
              />
            </NativeStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;


