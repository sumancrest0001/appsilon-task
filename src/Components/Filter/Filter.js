import React from 'react';
import './Filter.scss';
import MonthYearSelector from '../MonthYearSelector/MonthYearSelector';
import ImportExportSection from '../ImportExportSection/ImportExportSection';

const filter = () => (
  <div className="filter">
    <div className="filter__interval">
      <label for="interval">RANGE:</label>
      <select name="interval" className="filter__options">
        <option value="1">1 month</option>
        <option value="2">2 months</option>
      </select>
    </div>
    <MonthYearSelector />
    <ImportExportSection />
  </div>
);

export default filter;