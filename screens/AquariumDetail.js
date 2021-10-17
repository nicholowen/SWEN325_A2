//react components
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";

//utilites
import { colors } from "../utility/Colors";
import { generateUUID } from "../utility/UtilityFunctions";
import Icon from "react-native-vector-icons/Ionicons";
// import * as ImagePicker from "expo-image-picker";
import { pickImage } from "../utility/ImagePicker";

//api calls
import { updateAquarium, deleteAquarium } from "../api/FirebaseApi";

//custom components
import { EditParameterModal, OpenCameraModal } from "../components/Modals";

const AquariumDetail = (props) => {
  const thisAquarium = props.route.params;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false);
  const [field, setField] = useState("");
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [inhabitantList, setInhabitantList] = useState([]);

  

  const showModal = (param) => {
    setField(param);
    getInput(param);
    setIsModalVisible(true);
  };

  const getInput = (param) => {
    switch (param) {
      case "name":
        setInput(thisAquarium.name);
        break;
      case "width":
        setInput(thisAquarium.width);
        break;
      case "height":
        setInput(thisAquarium.height);
        break;
      case "depth":
        setInput(thisAquarium.depth);
        break;
      case "volume":
        setInput(thisAquarium.volume);
        break;
      case "ph":
        setInput(thisAquarium.ph);
        break;
      case "ammonia":
        setInput(thisAquarium.ammonia);
        break;
      case "nitrites":
        setInput(thisAquarium.nitrites);
        break;
      case "nitrates":
        setInput(thisAquarium.nitrates);
        break;
      case "salinity":
        setInput(thisAquarium.salinity);
        break;
      case "co2":
        setInput(thisAquarium.co2);
        break;
    }
  };

  const storeInput = (param) => {
    switch (param) {
      case "name":
        thisAquarium.name = input;
        break;
      case "width":
        thisAquarium.width = input;
        break;
      case "height":
        thisAquarium.height = input;
        break;
      case "depth":
        thisAquarium.depth = input;
        break;
      case "volume":
        thisAquarium.volume = input;
        break;
      case "ph":
        thisAquarium.ph = input;
        break;
      case "ammonia":
        thisAquarium.ammonia = input;
        break;
      case "nitrites":
        thisAquarium.nitrites = input;
        break;
      case "nitrates":
        thisAquarium.nitrates = input;
        break;
      case "salinity":
        thisAquarium.salinity = input;
        break;
      case "co2":
        thisAquarium.co2 = input;
        break;
    }
  };

  const saveImage = (image) => {
    setImage(image);
  };

  //allows the page to refresh and restablish the list of inhabitants when navigating
  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener("focus", () => {
      for (let i = 0; i < thisAquarium.inhabitants.length; i++) {
        let inhabitant = thisAquarium.inhabitants[i];
        setInhabitantList((inhabitantList) => [
          ...inhabitantList,
          <Text key={generateUUID(3)} style={styles.listText}>
            {inhabitant.inhabitant}:{inhabitant.quantity}{" "}
          </Text>,
        ]);
      }
    });

    return willFocusSubscription;
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.scroll}>
          {thisAquarium.imageUrl ? (
            <View>
              {/**sets a default image if there is no image in the database*/}
              <ImageBackground
                style={{ width: "100%", height: 150 }}
                source={{ uri: thisAquarium.imageUrl }}
              >
                <View style={{ position: "absolute", top: 0, right: 0 }}>
                  <Icon.Button
                    style={{ alignSelf: "center" }}
                    name="md-camera"
                    size={15}
                    onPress={() => {
                      setIsCameraModalVisible(true);
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          ) : (
            <ImageBackground
            style={{ width: "100%", height: 150 }}
            source={{
              uri: "https://cdn.pixabay.com/photo/2021/01/14/20/32/fish-5917864_960_720.jpg",
            }}
            >
              <View style={{ position: "absolute", top: 0, right: 0 }}>
                  <Icon.Button
                    style={{ alignSelf: "center" }}
                    name="md-camera"
                    size={15}
                    onPress={() => {
                      setIsCameraModalVisible(true);
                    }}
                  />
                  </View>
            </ImageBackground>
          )}

          <View style={styles.list}>
            <Text style={{ fontSize: 18 }}> Details </Text>
            <View style={styles.listItem}>
              <Text style={styles.listText}>Width: {thisAquarium.width} </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("width");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>
                Height: {thisAquarium.height}{" "}
              </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("height");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>Depth: {thisAquarium.depth} </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("depth");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>
                Volume: {thisAquarium.volume} litres
              </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("volume");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>PH: {thisAquarium.ph} </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("ph");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>
                Ammonia: {thisAquarium.ammonia}{" "}
              </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("ammonia");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>
                Nitrates: {thisAquarium.nitrates}{" "}
              </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("nitrates");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>
                Nitrites: {thisAquarium.nitrites}{" "}
              </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("nitrites");
                }}
              />
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listText}>
                Salinity: {thisAquarium.salinity}{" "}
              </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("salinity");
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.listText}>Co2: {thisAquarium.co2} </Text>
              <Button
                style={styles.editButton}
                title="Edit"
                onPress={() => {
                  showModal("co2");
                }}
              />
            </View>
            <Text style={styles.listText}>Type: {thisAquarium.type}-water</Text>
            <Text style={{ fontSize: 18 }}> Inhabitants </Text>
            {inhabitantList}
            <View style={{ alignItems: "center", paddingTop: 50 }}>
              <Button
                color={colors.delete}
                title="delete"
                onPress={() => {
                  deleteAquarium(thisAquarium);
                  props.navigation.pop();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/**shows modal for editing the parameter */}
      <EditParameterModal
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        onChangeValue={(text) => {
          setInput(text);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onUpdate={() => {
          setField("");
          setInput("");
          storeInput(field);
          updateAquarium(props.route.params);
          setIsModalVisible(false);
        }}
        field={field}
        input={input}
      />

      {/**opens the image selection modal to pick an image from gallery or take image with camera */}
      <OpenCameraModal
        visible={isCameraModalVisible}
        onRequestClose={() => {
          setIsCameraModalVisible(false);
        }}
        onGallery={() => {
          setIsCameraModalVisible(false);
          pickImage(props);
        }}
        onCamera={() => {
          props.navigation.navigate("CameraScreen", thisAquarium);
        }}
        onCancel={() => {
          setIsCameraModalVisible(false);
        }}
      />
    </View>
  );
};

//Gets name of the Aquarium and sets as screen title
AquariumDetail.navigationOptions = (navigationData) => {
  return {
    headerTitle: thisAquarium.name,
  };
};

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 30,
    backgroundColor: colors.primary,
  },
  list: {
    flex: 1,
    margin: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 18,
    padding: 10,
  },
  editButton: {
    height: 30,
    backgroundColor: colors.secondary,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AquariumDetail;
