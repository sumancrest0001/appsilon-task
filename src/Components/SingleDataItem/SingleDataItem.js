import React from 'react';
import './SingleDataItem.scss';

const singleDataItem = ({ singleInfo, children }) => (
  <div className="single-data">
    <div className="single-data__total">{singleInfo.title === 'total profit' ? `$ ${singleInfo.total}` : singleInfo.total}</div>
    <div className="single-data__stat">
      <div className="single-data__title">{singleInfo.title}</div>
      <div style={{ color: `${singleInfo.percentage > 0 ? 'green' : 'red'}` }} className="single-data__percentage">{singleInfo.percentage > 0 ? `+${singleInfo.percentage}` : singleInfo.percentage}%</div>
    </div>
    <div className="single-data__filter">
      <div className="single-data__stat-interval">
        <select name="interval" className="single-data__options">
          <option value="monthly">monthly stat</option>
          <option value="weekly">weekly stat</option>
        </select>
      </div>
      {children}
    </div>

  </div>
);

export default singleDataItem;