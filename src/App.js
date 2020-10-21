import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import TopDataboard from './Components/TopDataboard/TopDataboard';
import HeaderWithIcons from './Components/HeaderWithIcons/HeaderWithIcons';

function App() {
  return (
    <div className="App">
      <Header>Enterprise Shiny Dashboard</Header>
      <TopDataboard />
      <HeaderWithIcons>production</HeaderWithIcons>
    </div>
  );
}

export default App;
