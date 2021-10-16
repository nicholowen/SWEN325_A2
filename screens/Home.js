import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AquariumItem from "../components/AquariumItem";
import { getAquarium } from "../api/FirebaseApi";
import { AuthContext } from "../functions/Context";
import RoundAddButton from "../components/RoundAddButton";

const Home = (props) => {
  const { setUserData, getUserData } = React.useContext(AuthContext);

  // gets data from firebase using 'getAquarium' through firebase API
  const getData = () => {
    function handleLoadedData(data) {
      setUserData(data);
    }
    getAquarium().then((data) => {
      handleLoadedData(data);
    });
  };

  //refreshes screen by retrieving data when navigating. This allows new aquariums to be displayed.
  useEffect(() => {
    const willFocusSubscription = props.navigation.addListener("focus", () => {
      getData();
    });

    return willFocusSubscription;
  }, []);

  //creates an aquarium item for each object retrieved from database
  const renderAquariumItem = (itemData) => {
    return (
      <AquariumItem
        key={itemData}
        id={itemData.item.id}
        name={itemData.item.name}
        imageUrl={itemData.item.imageUrl}
        volume={itemData.item.volume}
        type={itemData.item.type}
        onSelectAquarium={() => {
          props.navigation.navigate("AquariumDetail", itemData.item);
        }}
      />
    );
  };

  const data = getUserData();

  return (
    //renders data from aquarium object as list. Displays a message if there are no aquariums stored
    //in the database

    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderAquariumItem}
        style={{ width: "95%", padding: 5 }}
      />
      <View
        style={styles.underList}
      >
        {data == null ? (
          <Text style={styles.messageText}>
            You don't have any aquariums set up! Add one to get going!
          </Text>
        ) : (
          <View>{/*empty view*/}</View>
        )}
        <RoundAddButton
          size={50}
          onPress={() => {
            props.navigation.navigate("AddNewAquarium");
          }}
        />
      </View>
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: "#ffc93c",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  underList: {
    height: "8%",
    alignItems: "baseline",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  messageText: {
    fontSize: 23,
    textAlign: "center",
    paddingBottom: 50,
  },
});

export default Home;
