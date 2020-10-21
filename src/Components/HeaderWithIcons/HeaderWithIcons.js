import React from 'react';
import { ReactComponent as RefreshIcon } from '../../images/refresh.svg';
import { ReactComponent as UncheckedIcon } from '../../images/unchecked.svg';
import { ReactComponent as DropdownIcon } from '../../images/down-arrow.svg';
import './HeaderWithIcons.scss';

const headerWithIcons = (props) => (
  <div className="header-with-icons">
    <h2 className="header__title">{props.children}</h2>
    <div className="header__icons icons">
      <RefreshIcon alt="refresh icon" className="icons__refresh" />
      <UncheckedIcon alt="unchecked icon" className="icons__unchecked" />
      <DropdownIcon alt="dropdown icon" className="icons__dropdown" />
    </div>
  </div>
);

export default headerWithIcons;