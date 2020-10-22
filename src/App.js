import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import TopDataboard from './Components/TopDataboard/TopDataboard';
import MainSection from './Components/MainSection/MainSection';
import Filter from './Components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Header>Enterprise Shiny Dashboard</Header>
      <TopDataboard />
      <MainSection />
      <Filter />
    </div>
  );
}

export default App;
