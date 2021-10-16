import React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../utility/Colors";

//uses RadioButtonRN library to create radio buttons to select aquarium water type
const data = [
  {
    label: "Freshwater",
    accessibilityLabel: "fresh",
  },
  {
    label: "Saltwater",
    accessibilityLabel: "salt",
  },
];

export const TypeRadioButtons = ({ selectedBtn }) => (
  <RadioButtonRN
    selectedBtn={selectedBtn}
    data={data}
    textStyle={{ fontSize: 20 }}
    activeColor={colors.radioActive}
    boxDeactiveBgColor={colors.radioInactive}
    initial={0}
    circleSize={18}
    icon={<Icon name="check-circle-outline" size={26} color="#07689f" />}
  />
);
