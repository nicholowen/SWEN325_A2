import * as ImagePicker from 'expo-image-picker';

export async function pickImage (props) {
  
    let permission = await ImagePicker.requestCameraPermissionsAsync();
  
    if(permission.granted === false) {
      alert("Permission to access camera is required!")
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
  
    if (result.cancelled) {
      return;
    }
    // selectedImage = result.uri;
    props.navigation.navigate("ImageScreen", {
        image: result.uri,
        aquarium: props.route.params
      })
  };

