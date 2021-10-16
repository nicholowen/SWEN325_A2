import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignInScreen";
import { AuthContext } from "../functions/Context";

//container for the authentication/signin screen
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  const auth = React.useContext(AuthContext);
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="AuthStack" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
