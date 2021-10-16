import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackScreen";
import ForumStackScreen from "./ForumStackScreen";

//nested navigation containers - allows each tab to navigate to different stacks
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="HomeMain"
      component={HomeStackScreen}
      options={{
        headerShown: false,
        title: "My Aquariums",
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
        tabBarIconStyle: { display: "none" },
      }}
    />
    <Tabs.Screen
      name="ForumScreen"
      component={ForumStackScreen}
      options={{
        headerShown: false,
        title: "Forum",
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
        tabBarIconStyle: { display: "none" },
      }}
    />
  </Tabs.Navigator>
);

export default TabsScreen;
