import * as React from "react";
import MediaLibrary from "expo-media-library";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { saveImage } from "./AquariumDetail";
import { updateAquarium, uploadImage } from "../api/FirebaseApi";

//displays image taken by the camera

const ImageScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: props.route.params.image }}
        style={{ width: 380, height: 550 }}
      />
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: "10%",
        opacity: 0.6,
        alignItems: 'center',
        paddingHorizontal: 10
      }}
    >
        <Button
          title="Save"
          onPress={() => {
            uploadImage(props.route.params.image, "imagename.jpg")

            props.route.params.aquarium.imageUrl =
            props.route.params.image;
            updateAquarium(props.route.params.aquarium);
            props.navigation.pop(2);
          }}
        />
        <Button
          title="Back"
          onPress={() => {
            props.navigation.pop();
          }}
        />
      </View>
    </View>
  );
};

export default ImageScreen;
