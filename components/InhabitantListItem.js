import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Foundation";

//component used in aquarium detail, lists the inhabitant and provides an edit button
const InhabitantListItem = ({onPress, name, quantity}, key ) => (
  <View key={key} style={styles.listItem}>
    <Text style={styles.textStyle}>
      {name} : {quantity}
    </Text>
    <View>
      <Icon.Button
        name="pencil"
        size={15}
        onPress={onPress}
        Edit
      ></Icon.Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
})


export default InhabitantListItem;
