import { useState, useEffect } from "react";
import getBirdByName from "../firestore/getBirdByName"; // Import the function to get bird data

const BirdProfile = ({ birdName }) => {
  const [bird, setBird] = useState(null);

  useEffect(() => {
    const fetchBird = async () => {
      const data = await getBirdByName(birdName);
      setBird(data);
    };
    fetchBird();
  }, [birdName]);

  return bird ? (
    <div>
      <h2>{bird.name} ({bird.scientificName})</h2>
      <img src={bird.imageURL} alt={bird.name} />
      <p><b>Local Name:</b> {bird.localName}</p>
      <p><b>Habitat:</b> {bird.habitat}</p>
      <p><b>Diet:</b> {bird.diet}</p>
      <p><b>Size:</b> {bird.size}</p>
      <p><b>Wingspan:</b> {bird.wingspan}</p>
      <p><b>Lifespan:</b> {bird.lifespan}</p>
      <p><b>Migration Period:</b> {bird.migrationPeriod}</p>
      <p><b>Conservation Status:</b> {bird.conservationStatus}</p>
    </div>
  ) : (
    <p>Loading...</p> // Show loading text while data is being fetched
  );
};

export default BirdProfile;
