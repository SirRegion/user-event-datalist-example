import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser"/>

        <datalist id="browsers">
          <option value="Edge"/>
          <option value="Firefox"/>
          <option value="Chrome"/>
          <option value="Opera"/>
          <option value="Safari"/>
        </datalist>
      </div>
    </div>
  );
}

export default App;
