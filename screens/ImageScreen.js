import React, { useContext } from "react";
import { View, Image, Button } from "react-native";
import { uploadImage } from "../api/FirebaseApi";
import { AuthContext } from "../functions/Context";

//displays image taken by the camera

const ImageScreen = (props) => {
  const { getEmail } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: props.route.params.image }}
        style={{ width: 380, height: 550 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "10%",
          opacity: 0.6,
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Button
          title="Save"
          onPress={() => {
            uploadImage(
              props.route.params.image,
              props.route.params.aquarium.id
            );
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
