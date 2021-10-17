//react components
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

//utilities
import {
  generateUUID,
  createAquariumObject,
} from "../utility/UtilityFunctions";
import { colors } from "../utility/Colors";

//custom components
import { TypeRadioButtons } from "../components/TypeRadioButtons";
import {
  AddInhabitantModal,
  EditInhabitantAddModal,
} from "../components/Modals";
import RoundAddButton from "../components/RoundAddButton";
import AddParameterTextInput from "../components/AddParameterTextInput";
import InhabitantListItem from "../components/InhabitantListItem";

var inhabitantName = [];

const AddNewAquarium = (props) => {
  
  
  
  //state hooks
  const [nameInput, setNameInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [depthInput, setDepthInput] = useState("");
  const [volumeInput, setVolumeInput] = useState("");
  
  const [ammoniaInput, setAmmoniaInput] = useState("");
  const [PHInput, setPHInput] = useState("");
  const [nitratesInput, setNitratesInput] = useState("");
  const [nitritesInput, setNitritesInput] = useState("");
  const [salinityInput, setSalinityInput] = useState("");
  const [co2Input, setCo2Input] = useState("");
  const [typeInput, setTypeInput] = useState("");
  
  const [inhabitantInput, setInhabitantInput] = useState([]);
  const [quantityInput, setQuantityInput] = useState("");
  const [inhabitantNameEdit, setInhabitantNameEdit] = useState("");
  const [inhabitantQuanEdit, setInhabitantQuanEdit] = useState(0);
  const [inhabitantEditIndex, setInhabitantEditIndex] = useState("");
  
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [image, setImage] = useState(null);

  var inhabitantInputs = [];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (result.cancelled) {
      setImage(result.uri);
    }
  };

  //create list for the addded inhabitants on screen
  for (let i = 0; i < inhabitantName.length; i++) {
    inhabitantInputs.push(
      <InhabitantListItem
        key={inhabitantName[i].id}
        name={inhabitantName[i].inhabitant}
        quantity={inhabitantName[i].quantity}
        onPress={() => {
          setInhabitantNameEdit(inhabitantName[i].inhabitant);
          setInhabitantQuanEdit(inhabitantName[i].quantity);
          setInhabitantEditIndex(i);
          setIsEditModalVisible(true);
        }}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.listItem}>
          <Text style={styles.subTitle}>Aquarium:</Text>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Name: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setNameInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Width: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setWidthInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Height: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setHeightInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Depth: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setDepthInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Volume: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setVolumeInput(text)}
            />
          </View>
          <Text style={styles.subTitle}>Parameters:</Text>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>PH: </Text>
            <AddParameterTextInput onChangeText={(text) => setPHInput(text)} />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Ammonia: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setAmmoniaInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Nitrites: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setNitritesInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Nitrates: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setNitratesInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Salinity: </Text>
            <AddParameterTextInput
              onChangeText={(text) => setSalinityInput(text)}
            />
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.textStyle}>Co2: </Text>
            <AddParameterTextInput onChangeText={(text) => setCo2Input(text)} />
          </View>
          <Text style={styles.subTitle}>Type:</Text>
          <View style={styles.radioContainer}>
            <TypeRadioButtons
              selectedBtn={(value) => 
                setTypeInput(value.label)
              }
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subTitle}>Inhabitants:</Text>
            <View style={{ marginLeft: 20 }}>
              <RoundAddButton
                size={30}
                onPress={() => {
                  setInhabitantInput("");
                  setQuantityInput("");
                  setIsModalVisible(true);
                }}
              />
            </View>
          </View>
          {inhabitantInputs}
          <View style={styles.submitButton}>
            <Button
              title="Add Aquarium"
              color={colors.secondary}
              onPress={() => {
                let id = generateUUID(5);
                let aq = createAquariumObject(
                  id,
                  nameInput,
                  widthInput,
                  heightInput,
                  depthInput,
                  volumeInput,
                  PHInput,
                  ammoniaInput,
                  nitritesInput,
                  nitratesInput,
                  salinityInput,
                  co2Input,
                  typeInput,
                  "",
                  inhabitantName
                );
                addAquarium(aq);
                props.navigation.navigate("Home");
              }}
            />
          </View>
        </View>
      </ScrollView>

      {/**modal for adding an inhabitant to the list */}
      <AddInhabitantModal
        visibile={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        onChangeName={(text) => setInhabitantInput(text)}
        onChangeQuantity={(text) => setQuantityInput(text)}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onAdd={() => {
          {
            if (inhabitantInput == "" || quantityInput == "") {
              alert("Name and Quantity cannot be left blank.");
            } else {
              inhabitantName.push({
                key: generateUUID(3),
                id: inhabitantName.length,
                inhabitant: inhabitantInput,
                quantity: parseInt(quantityInput),
              });
              setIsModalVisible(false);
            }
          }
        }}
      />

      {/**modal for editing the added inhabitant */}
      <EditInhabitantAddModal
        visible={isEditModalVisible}
        onRequestClose={() => {
          setIsEditModalVisible(false);
        }}
        nameValue={inhabitantNameEdit}
        quantityValue={inhabitantQuanEdit.toString()}
        onChangeName={(text) => setInhabitantNameEdit(text)}
        onChangeQuantity={(text) => {
          setInhabitantQuanEdit(text);
        }}
        onCancel={() => {
          setIsEditModalVisible(false);
        }}
        onUpdate={() => {
          inhabitantName[inhabitantEditIndex].inhabitant = inhabitantNameEdit;
          inhabitantName[inhabitantEditIndex].quantity =
            parseInt(inhabitantQuanEdit);
          setIsEditModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    paddingLeft: 50,
    backgroundColor: colors.primary,
  },
  listItem: {
    paddingTop: 20,
    width: 300,
    height: "100%",
    alignItems: "center",
  },
  rowItem: {
    padding: 10,
    flexDirection: "row",
  },
  submitButton: {
    padding: 20,
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  textInput: {
    fontSize: 18,
    borderColor: "black",
    backgroundColor: colors.textInput,
    borderWidth: 1,
    width: "60%",
    height: 35,
    borderRadius: 4,
  },
  radioContainer: {
    width: "100%",
    justifyContent: "center",
    paddingBottom: 40,
  },
});

export default AddNewAquarium;
