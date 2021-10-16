import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForumMain from "../screens/ForumMain";
import DrawerButton from "../components/DrawerButton";

//currently only contains a single screen as unfinished

const ForumStack = createStackNavigator();
const ForumStackScreen = (props) => (
  <ForumStack.Navigator>
    <ForumStack.Screen
      options={{
        headerRight: () => (
          <DrawerButton
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        ),
      }}
      name="ForumMain"
      component={ForumMain}
    />
  </ForumStack.Navigator>
);

export default ForumStackScreen;
