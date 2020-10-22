import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import TopDataboard from './Components/TopDataboard/TopDataboard';
import Production from './Components/Production/Production';

function App() {
  return (
    <div className="App">
      <Header>Enterprise Shiny Dashboard</Header>
      <TopDataboard />
      <Production />
    </div>
  );
}

export default App;
