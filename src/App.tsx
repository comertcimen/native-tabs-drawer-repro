import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/Home";
import { SettingsScreen } from "./screens/Settings";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    >
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
