import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import TopDataboard from './Components/TopDataboard/TopDataboard';
import Production from './Components/Production/Production';
import SalesRevenue from './Components/SalesRevenue/SalesRevenue';
import Summary from './Components/Summary/Summary';
import Filter from './Components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Header>Enterprise Shiny Dashboard</Header>
      <TopDataboard />
      <Production />
      <SalesRevenue />
      <Summary />
      <Filter />
    </div>
  );
}

export default App;
