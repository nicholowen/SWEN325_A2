import React from "react";
import { View } from 'react-native';
import Icon from "react-native-vector-icons/Foundation";
import { TouchableOpacity } from "react-native-gesture-handler";

//simple button that is to open drawer. Sits in the header of certain screens
const DrawerButton = ({onPress}) => (
  <View style={{marginRight: 25}}>
    <TouchableOpacity onPress={
      onPress
      }>
      <Icon name="list" size={40}/>
    </TouchableOpacity>
  </View>
)

export default DrawerButton;