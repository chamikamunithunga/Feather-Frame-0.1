import React, { useState } from 'react';
import BirdProfile from './components/BirdProfile'; // Import the BirdProfile component

function App() {
  const [birdName, setBirdName] = useState('Peacock'); // Example bird name

  return (
    <div className="App">
      <h1>Bird Information</h1>
      <input
        type="text"
        value={birdName}
        onChange={(e) => setBirdName(e.target.value)} // Set bird name dynamically
        placeholder="Enter bird name"
      />
      <BirdProfile birdName={birdName} /> {/* Pass birdName prop */}
    </div>
  );
}

export default App;
