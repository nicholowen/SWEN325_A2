import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import DrawerButton from "../components/DrawerButton";

//currently only contains a single screen as unfinished
const ProfileStack = createStackNavigator();
const ProfileStackScreen = (props) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{
        headerTitle: "My Profile",
        headerRight: () => (
          <DrawerButton
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        ),
      }}
      name="ProfileScreen"
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
