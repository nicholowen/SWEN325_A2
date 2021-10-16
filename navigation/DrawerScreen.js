import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { colors } from "../utility/Colors";

import TabsScreen from "./TabsScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import { AuthContext } from "../functions/Context";

//navigation container to hold a tabs screen (that holds the home and forum stacks)
//as well as the profile stack. Extra drawer item to allow logging out
const Drawer = createDrawerNavigator();

const DrawerScreen = (props) => {
  const { signOut, clearUserData } = React.useContext(AuthContext);
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: "right", headerShown: false, drawerActiveTintColor: colors.secondary, }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
            
              label="Logout"
              onPress={() => {
                clearUserData();
                signOut();
              }}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen 
      name="Home"
      component={TabsScreen}
      options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{ headerTitleAlign: "center" }}
      />
      
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
