import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../utility/Colors";

//text input component as this is reused often.
const AddParameterTextInput = ({onChangeText}) => {
  return (
    <TextInput
      style={styles.textInput}
      keyboardType="number-pad"
      onChangeText={onChangeText}
    />
  );
};

export default AddParameterTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderColor: "black",
    backgroundColor: colors.textInput,
    borderWidth: 1,
    width: "60%",
    height: 35,
    borderRadius: 4,
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
});
