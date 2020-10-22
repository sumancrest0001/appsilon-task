import React from 'react';
import Header from '../Header/Header';
import countryMap from '../../images/countries.png';
import './SalesRevenue.scss';

const salesRevenue = () => (
  <div className="sales-revenue-section">
    <Header>SALES REVENUE BY COUNTRY</Header>
    <img src={countryMap} alt="map of countries" className="sales-revenue-section__country" />
  </div>
);

export default salesRevenue;