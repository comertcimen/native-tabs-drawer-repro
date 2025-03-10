import React from "react";
import { Text, View } from "react-native";
import { createNativeBottomTabNavigator } from "@bottom-tabs/react-navigation";

const Tab = createNativeBottomTabNavigator();

export const SettingsScreen = () => {
  return (
    <Tab.Navigator initialRouteName="first">
      <Tab.Screen
        name="first"
        component={FirstScreen}
        options={{
          title: "First",
          tabBarIcon: () => ({ sfSymbol: "book" }),
        }}
      />
      <Tab.Screen
        name="second"
        component={SecondScreen}
        options={{
          title: "Second",
          tabBarIcon: () => ({ sfSymbol: "gear" }),
        }}
      />
    </Tab.Navigator>
  );
};

function FirstScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>First</Text>
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Second</Text>
    </View>
  );
}
