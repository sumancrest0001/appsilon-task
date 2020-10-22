import React from 'react';
import './Summary.scss';
import HeaderWithIcons from '../HeaderWithIcons/HeaderWithIcons';

const summary = () => (
  <div className="summary">
    <HeaderWithIcons>Summary</HeaderWithIcons>
    <div className="summary__bar-section">
      <span style={{ width: "80%" }} className="summary__bar"></span>
      <span style={{ width: "65%" }} className="summary__bar"></span>
      <span style={{ width: "85%" }} className="summary__bar"></span>
      <span style={{ width: "5%" }} className="summary__bar"></span>
    </div>
  </div>
);

export default summary;
