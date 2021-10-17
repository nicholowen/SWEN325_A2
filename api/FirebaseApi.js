import { setStatusBarBackgroundColor } from "expo-status-bar";
import * as firebase from "firebase";
import "firebase/storage";
import { useState } from "react";
import Aquarium from "../models/Aquarium";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { storage } from "@react-native-firebase/storage";
import { generateUUID } from "../utility/UtilityFunctions";

const aquariumList = [];
const temp = [];

var username = "";

//initialises connection with firebase
export function initialize() {
  const firebaseConfig = {
    apiKey: "AIzaSyB-UJIjl7sZx6apBYVbzKm2ruHiOD35rc0",
    authDomain: "my-aquarium-2.firebaseapp.com",
    projectId: "my-aquarium-2",
    storageBucket: "my-aquarium-2.appspot.com",
    messagingSenderId: "367519102708",
    appId: "1:367519102708:web:d9024a2c9a5d79b84110a1",
    measurementId: "G-ME3SNM8T4C",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}

//signs user out of firebase
export function disconnect() {
  try {
    firebase.auth().signOut();
  } catch (error) {
    console.log(error.toString());
  }
}

//authenticates user with email and password
export function loginUser(email, password) {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
    username = email;
  } catch (error) {
    console.log(error.toString());
  }
}

//creates a new user using email and password
export function signUpUser(email, password) {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password);
    setUserProfile(email, "", 0);
    username = email;
  } catch (error) {
    console.log(error.toString());
  }
}

//**Incomplete*// creates a simple profile which was inteded to be displayed on the forum
export function setUserProfile(username, displayName, noAquariums) {
  firebase
    .firestore()
    .collection("users")
    .doc(username)
    .set({
      displayName: displayName,
      noAquariums: noAquariums,
    })
    .then(() => {
      console.log("profile created");
    });
}

//adds a document to the database. Contains all information entered when creating a new aquarium
export function addAquarium(aquarium) {
  firebase
    .firestore()
    .collection("users")
    .doc(username)
    .collection("Aquariums")
    .doc(aquarium.id.id)
    .set({
      id: aquarium.id.id,
      name: aquarium.id.name,
      width: aquarium.id.width,
      height: aquarium.id.height,
      depth: aquarium.id.depth,
      volume: aquarium.id.volume,
      ph: aquarium.id.ph,
      ammonia: aquarium.id.ammonia,
      nitrates: aquarium.id.nitrates,
      nitrites: aquarium.id.nitrites,
      salinity: aquarium.id.salinity,
      co2: aquarium.id.co2,
      inhabitants: aquarium.id.inhabitants,
      imageUrl: aquarium.id.imageUrl,
      type: aquarium.id.type,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("aquarium added");
    });
}

//general function to update all fields in the aquarium document
export function updateAquarium(aquarium) {
  firebase
    .firestore()
    .collection("users")
    .doc(username)
    .collection("Aquariums")
    .doc(aquarium.id)
    .set({
      ammonia: aquarium.ammonia,
      co2: aquarium.co2,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      depth: aquarium.depth,
      inhabitants: aquarium.inhabitants,
      height: aquarium.height,
      id: aquarium.id,
      imageUrl: aquarium.imageUrl,
      name: aquarium.name,
      width: aquarium.width,
      volume: aquarium.volume,
      ph: aquarium.ph,
      nitrates: aquarium.nitrates,
      nitrites: aquarium.nitrites,
      salinity: aquarium.salinity,
      type: aquarium.type,
    })
    .then(() => {
      console.log("aquarium updated");
    });
}

//retrieves all aquarium data
export async function getAquarium() {
  const db = firebase.firestore();
  let tempArray = [];

  const users = await db
    .collection("users")
    .doc(username)
    .collection("Aquariums")
    .get();

  users.forEach(async (doc) => {
    tempArray.push(doc.data());
  });

  return tempArray;
}

//deletes aquarium
export function deleteAquarium(aquarium) {
  firebase
    .firestore()
    .collection("users")
    .doc(username)
    .collection("Aquariums")
    .doc(aquarium.id)
    .delete()
    .then(() => {
      console.log("aquarium deleted");
    });
}

//**Incomplete*// uploads and image to firebase storage - could not get it working
export async function uploadImage(uri, id) {
  const response = await fetch(uri);
  const blob = await response.blob();

  const imageid = generateUUID(4);

  const path =
    "users/" + username + "/Aquariums/" + id + "/image_" + imageid + ".jpg";
  console.log(path);
  var ref = firebase.storage().ref().child(path);

  if (await ref.put(blob)) {
    ref.getDownloadURL().then((url) => {
      console.log(url);
      firebase
        .firestore()
        .collection("users")
        .doc(username)
        .collection("Aquariums")
        .doc(id)
        .update({
          imageUrl: url,
        });
    });
  }
}

