import React from 'react';
import './MainSection.scss';
import Production from '../Production/Production';
import Summary from '../Summary/Summary';
import SalesRevenue from '../SalesRevenue/SalesRevenue';

const mainSection = () => (
  <div className="main-section">
    <Production />
    <SalesRevenue />
    <Summary />
  </div>
);

export default mainSection;