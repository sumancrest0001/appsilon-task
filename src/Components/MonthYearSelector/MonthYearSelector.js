import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './MonthYearSelector.scss';

import "react-datepicker/dist/react-datepicker.css";

const MonthYearSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2014/04/08"));
  return (
    <div className="month-year-selector">
      <DatePicker
        className="date-picker"
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
      />
    </div>);
}

export default MonthYearSelector;
