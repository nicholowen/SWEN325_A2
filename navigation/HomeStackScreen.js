import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddNewAquarium from "../screens/AddNewAquarium";
import AquariumDetail from "../screens/AquariumDetail";
import Home from "../screens/Home";
import CameraScreen from "../screens/CameraScreen";
import ImageScreen from "../screens/ImageScreen";
import DrawerButton from "../components/DrawerButton";
import Onboarding from "../screens/Onboarding";

//navigator for all screens in the home stack.
//uses props hook to open the drawer using a custom button component
const HomeStack = createStackNavigator();

const HomeStackScreen = (props) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{
        headerShown: true,
        headerTitle: "My Aquariums",
        headerRight: () => (
          <DrawerButton
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        ),
      }}
      name="Home"
      component={Home}
    />
    <HomeStack.Screen name="Onboarding" component={Onboarding} />
    <HomeStack.Screen name="AddNewAquarium" component={AddNewAquarium} />
    <HomeStack.Screen name="AquariumDetail" component={AquariumDetail} />
    <HomeStack.Screen name="CameraScreen" component={CameraScreen} />
    <HomeStack.Screen name="ImageScreen" component={ImageScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
