import React from 'react';
import HeaderWithIcons from '../HeaderWithIcons/HeaderWithIcons';
import ImportExportSection from '../ImportExportSection/ImportExportSection';
import BarChart from '../../images/bar-chart.png';
import './Production.scss';

const production = () => (
  <div className="production">
    <HeaderWithIcons>production</HeaderWithIcons>
    <img src={BarChart} alt="bar chart for production" className="production__image" />
    <ImportExportSection />
  </div>
);

export default production;