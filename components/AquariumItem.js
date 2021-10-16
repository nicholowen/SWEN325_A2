import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { colors } from "../utility/Colors";

//main display of the aquarium, shows the image and a couple details about it.
//gets rendered in a flatlist on the home screen
const AquariumItem = (props) => {
  return (
    <View style={styles.aquariumItem}>
      <TouchableOpacity onPress={props.onSelectAquarium} delayPressIn={1000}>
        <View>
          <View style={[styles.aquariumRow, styles.aquariumHeader]}>
            {props.imageUrl ? (
              <ImageBackground
                style={styles.bgImage}
                source={{ uri: props.imageUrl }}
              >
                <Text style={styles.title}>{props.name}</Text>
              </ImageBackground>
            ) : (
              <ImageBackground
                style={styles.bgImage}
                source={{
                  uri: "https://cdn.pixabay.com/photo/2021/01/14/20/32/fish-5917864_960_720.jpg",
                }}
              >
                <Text style={styles.title}>{props.name}</Text>
              </ImageBackground>
            )}

          </View>
          <View style={[styles.aquariumRow, styles.aquariumDetails]}>
            <Text>{props.volume} LITRES</Text>
            <Text>{props.type.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  aquariumItem: {
    height: 200,
    width: "100%",
    backgroundColor: colors.aquariumDisplayFooter,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 5,
    marginBottom: 5,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  aquariumRow: {
    flexDirection: "row",
  },
  aquariumHeader: {
    height: "85%",
  },
  aquariumDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default AquariumItem;
