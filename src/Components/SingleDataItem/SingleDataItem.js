import React from 'react';
import './SingleDataItem.scss';

const singleDataItem = (props) => (
  <div className="single-data">
    <div className="single-data__total">$ 500000</div>
    <div className="single-data__stat">
      <div className="single-data__title">total profit</div>
      <div className="single-data__percentage">+4.5%</div>
    </div>
    <div className="single-data__filter">
      <div className="single-data__stat-interval">
        <select name="interval" className="single-data__options">
          <option value="monthly">monthly stat</option>
          <option value="weekly">weekly stat</option>
        </select>
      </div>
      {props.children}
    </div>

  </div>
);

export default singleDataItem;