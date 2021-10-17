import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

import { AuthContext } from "./functions/Context";
import { initialize, disconnect } from "./api/FirebaseApi";

import { NavigationContainer } from "@react-navigation/native";
import DrawerScreen from "./navigation/DrawerScreen";
import AuthStackScreen from "./navigation/AuthStackScreen";
import Onboarding from "./screens/Onboarding";

enableScreens();
initialize();

export default function App() {
  const [firstTime, setFirstTime] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [email, setEmail] = useState();

  const [userAquariums, setUserAquariums] = useState([]);

  //handles authentication states
  const authContext = useMemo(() => {
    return {
      signUp: (email) => {
        setEmail(email);
        setFirstTime(!firstTime);
      },
      signIn: () => {
        setEmail(email);
        setUserToken("token");
      },
      signOut: () => {
        setUserToken(null);
        disconnect();
      },
      setUserData: (data) => {
        setUserAquariums(data);
      },
      getUserData: () => {
        return userAquariums;
      },
      clearUserData: () => {
        setUserAquariums(null);
      },
    };
  });

  //new signups will get an onboarding screen, logins will be brought straight to the home page
  const renderComponent = () => {
    if (firstTime && !userToken) {
      return <Onboarding />;
    } else {
      return userToken ? <DrawerScreen /> : <AuthStackScreen />;
    }
  };

  // nested navigation component
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>{renderComponent()}</NavigationContainer>
    </AuthContext.Provider>
  );
}
