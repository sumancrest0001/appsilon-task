import React from 'react';
import './UserIcon.scss';
import { ReactComponent as User } from '../../../images/user-profile.svg';

const userIcon = () => (
  <User fill="white" className="user-icon" />
);

export default userIcon;