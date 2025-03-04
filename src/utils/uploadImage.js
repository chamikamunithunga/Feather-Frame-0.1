import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

const uploadImage = async (file, birdName) => {
  const storageRef = ref(storage, `birds/images/${birdName}.jpg`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
