import React, { useRef } from "react";
import { View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { useNavigation } from "@react-navigation/native";
import { StackActions, NavigationActions } from "react-navigation";
import { AuthContext } from "../../functions/Context";
import { colors } from "../../utility/Colors";

import Page from "./Page";
import Footer from "./Footer";
import SignIn from "../signin/SignInScreen";

const Onboarding = (props) => {
  const pagerRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  const { signUp, signIn } = React.useContext(AuthContext);

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Home" })],
  });

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor={colors.primary}
            iconName="fishbowl-outline"
            title="Welcome to Aquaheads"
            message="To track and manage your aquariums!"
          />
          <Footer
            backgroundColor={colors.primary}
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor={colors.seconday}
            iconName="forum-outline"
            title="Join the forum to ask questions, and share your passion with other fish-keeping enthusiasts."
          />
          <Footer
            backgroundColor={colors.seconday}
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              signUp();
              signIn();
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
