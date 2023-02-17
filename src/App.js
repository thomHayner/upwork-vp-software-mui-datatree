import React from 'react';
import './App.css';
import DataTreeComponent from './DataTreeComponent';
import PROVIDED_DATA from './sample-channel-structure.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Inner-Mapped-Data Single Component (PROVIDED_DATA)</h2>
        <DataTreeComponent data={PROVIDED_DATA.data} />
      </header>
    </div>
  );
}

export default App;
