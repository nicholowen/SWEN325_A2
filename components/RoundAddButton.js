import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons as Icon } from '@expo/vector-icons';

// uses vector icon to produce an 'add' button for both the home screen and new aquarium screens
const RoundAddButton = ({onPress, size}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="add-circle-outline" size={size}/>
    </TouchableOpacity>
  );
};

export default RoundAddButton;
