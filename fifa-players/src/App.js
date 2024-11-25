// src/App.js
import React from 'react';
import PlayersList from './components/PlayersList';
import Player from './components/Player';
import players from './players';


function App() {
  return (
    <div className="App">
      <h1 className="text-center">FIFA Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;