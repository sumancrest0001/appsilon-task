import React from 'react';
import './Header.scss';

const header = (props) => (
  <h2 className="header">{props.children}</h2>
);

export default header;

