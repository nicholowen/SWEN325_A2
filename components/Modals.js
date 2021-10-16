import React from "react";
import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native";
import { capitalize } from "../utility/UtilityFunctions";

//all modal components used in app

//add new aquarium screen
export const AddInhabitantModal = ({
  visibile,
  onRequestClose,
  onChangeName,
  onChangeQuantity,
  onCancel,
  onAdd,
}) => (
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={visibile}
    onRequestClose={onRequestClose}
  >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.modal}>
        <Text style={{ fontSize: 20 }}> Add Inhabitant</Text>
        <TextInput
          placeholder="Inhabitant Name"
          textAlign="center"
          onChangeText={onChangeName}
        />
        <TextInput
          placeholder="Quantity"
          textAlign="center"
          onChangeText={onChangeQuantity}
          keyboardType="numeric"
        />
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Button title="Cancel" color="#07689f" onPress={onCancel} />
          <Button title="Add" color="#07689f" onPress={onAdd} />
        </View>
      </View>
    </View>
  </Modal>
);

//add new aquarium screen
export const EditInhabitantAddModal = ({
  visible,
  onRequestClose,
  nameValue,
  quantityValue,
  onChangeName,
  onChangeQuantity,
  onCancel,
  onUpdate,
}) => (
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.modal}>
        <Text style={{ fontSize: 20 }}> Edit Inhabitant</Text>
        <TextInput
          value={nameValue}
          textAlign="center"
          onChangeText={onChangeName}
        />
        <TextInput
          value={quantityValue}
          textAlign="center"
          onChangeText={onChangeQuantity}
          keyboardType="numeric"
        />
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Button title="Cancel" color="#07689f" onPress={onCancel} />
          <Button title="Update" color="#07689f" onPress={onUpdate} />
        </View>
      </View>
    </View>
  </Modal>
);

//aquarium details screen
export const EditParameterModal = ({
  visible,
  onRequestClose,
  onChangeValue,
  onCancel,
  onUpdate,
  field,
  input,
}) => (
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.modal}>
        <Text style={{ fontSize: 20 }}> Edit {capitalize(field)} </Text>

        <TextInput
          value={input}
          textAlign="center"
          onChangeText={onChangeValue}
          keyboardType="numeric"
        />
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Button title="Cancel" onPress={onCancel} />
          <Button title="Update" onPress={onUpdate} />
        </View>
      </View>
    </View>
  </Modal>
);

//aquarium detail screen
export const OpenCameraModal = ({ visible, onRequestClose, onGallery, onCamera, onCancel }) => (
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.modal}>
        <Text style={{ fontSize: 20 }}> Set New Image </Text>
        <View
          style={{
            paddingTop: 20,
            width: "70%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            title="Gallery"
            onPress={onGallery}
          />
          <Button
            title="Camera"
            onPress={onCamera}
          />
        </View>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Button
            title="Cancel"
            onPress={onCancel}
          />
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    width: 300,
    height: 200,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
