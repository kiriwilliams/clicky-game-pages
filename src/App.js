import React from 'react';
import './App.css';
import Game from "./pages/game";
// import { url } from 'inspector';

const bgPattern = {
  background: 'url("./images/blu_stripes.png") repeat'
};

function App() {
  return (
    <div style={bgPattern} className="h-100">
      <Game />
    </div>
  );
}

export default App;
