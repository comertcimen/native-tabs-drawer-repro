import React from "react";
import { Pressable, Text, View } from "react-native";
import { Drawer } from "react-native-drawer-layout";

export const HomeScreen = ({ navigation }: any) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Pressable onPress={() => navigation.navigate("settings")}>
          <Text>Go to Settings</Text>
        </Pressable>
      </View>
    </Drawer>
  );
};
