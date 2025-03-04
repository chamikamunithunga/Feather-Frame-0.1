import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path if needed

const getBirdByName = async (birdName) => {
  const q = query(collection(db, "birds"), where("name", "==", birdName));
  const querySnapshot = await getDocs(q);

  let birdData = null;
  querySnapshot.forEach((doc) => {
    birdData = doc.data();
  });

  return birdData;
};

export default getBirdByName;
