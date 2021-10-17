//react components
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { AuthContext } from "../functions/Context";

//api
import { loginUser, signUpUser } from "../api/FirebaseApi";

//utilities
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { colors } from "../utility/Colors";

//sign in screen

const SignIn = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn, signUp } = React.useContext(AuthContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 40 }}> Aquaheads </Text>
        <Icon name="fishbowl-outline" size={170} color="black" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            textAlign="center"
            placeholderTextColor={colors.placeholder}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            textAlign="center"
            placeholderTextColor={colors.placeholder}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            loginUser(email, password);
            signIn(email);
          }}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            if (password.length < 6) {
              Alert.alert("Alert", "Password must be 6 or more characters!", [
                { text: "OK" },
              ]);
            } else {
              try {
                signUpUser(email, password);
              } catch (error) {
                if (error.code === "auth/invalid-email") {
                  Alert.alert(
                    "Alert",
                    "Invalid email, please check and try again.",
                    [{ text: "OK" }]
                  );
                }
              }
              signUp(email);
            }
          }}
        >
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.secondary,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default SignIn;
