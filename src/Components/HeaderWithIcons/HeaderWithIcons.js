import React from 'react';
import RefreshIcon from '../../images/refresh.svg';
import UncheckedIcon from '../../images/unchecked.svg';
import DropdownIcon from '../../images/down-arrow.svg';
import './HeaderWithIcons.scss';

const headerWithIcons = (props) => (
  <div className="header-with-icons">
    <h2 className="header__title">{props.children}</h2>
    <div className="header__icons icons">
      <img src={RefreshIcon} alt="refresh icon" className="icons__refresh" />
      <img src={UncheckedIcon} alt="unchecked icon" className="icons__unchecked" />
      <img src={DropdownIcon} alt="dropdown icon" className="icons__dropdown" />
    </div>
  </div>
);

export default headerWithIcons;