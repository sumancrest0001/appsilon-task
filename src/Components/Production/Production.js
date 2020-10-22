import React from 'react';
import HeaderWithIcons from '../HeaderWithIcons/HeaderWithIcons';
import ImportExportSection from '../ImportExportSection/ImportExportSection';
import MonthYearSelector from '../MonthYearSelector/MonthYearSelector';
import BarChart from '../../images/bar-chart.png';
import './Production.scss';

const production = () => (
  <div className="production">
    <HeaderWithIcons>production</HeaderWithIcons>
    <img src={BarChart} alt="bar chart for production" className="production__image" />
    <div className="production__filter">
      <MonthYearSelector />
      <ImportExportSection />
    </div>
  </div>
);

export default production;