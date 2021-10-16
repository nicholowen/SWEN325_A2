import Aquarium from "../models/Aquarium";

//simple functions that could be useful in different areas

//generates a random string to be used as a unique identifier
export function generateUUID(noOfDigits) {
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ";
  let uuid = [];
  for (let i = 0; i < noOfDigits; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join("");
}

//creates aquarium object 
export function createAquariumObject(
  id,
  name,
  width,
  height,
  depth,
  volume,
  ph,
  ammonia,
  nitrites,
  nitrates,
  salinity,
  co2,
  type,
  imageUrl,
  inhabitants
) {
  let aq = new Aquarium({
    id: id,
    name: name,
    width: width,
    height: height,
    depth: depth,
    volume: volume,
    ph: ph,
    ammonia: ammonia,
    nitrites: nitrites,
    nitrates: nitrates,
    salinity: salinity,
    co2: co2,
    type: type,
    imageUrl: imageUrl,
    inhabitants: inhabitants,
  });
  
  return aq;
}

//simple capitalises the first letter in a string
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
