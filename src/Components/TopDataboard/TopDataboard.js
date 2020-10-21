import React from 'react';
import './TopDataboard.scss';
import { data } from '../../utility';
import SingleDataItem from '../SingleDataItem/SingleDataItem';
import UserIcon from '../../UI/Icons/UserIcon/UserIcon';
import MoreIcon from '../../UI/Icons/MoreIcon/MoreIcon';
import StatIcon from '../../UI/Icons/StatIcon/StatIcon';
import DatabaseIcon from '../../UI/Icons/DatabaseIcon/DatabaseIcon';
const topDataboard = () => {

  const selectCorrectIcon = (info) => {
    if (info.title === 'total profit') return <DatabaseIcon />;
    if (info.title === 'active user') return <UserIcon />;
    if (info.title === 'new orders') return <StatIcon />;
    if (info.title === 'open complaints') return <MoreIcon />;
  }
  return (
    <div className="top-databoard">
      {
        data.map(item => <SingleDataItem singleInfo={item}>{selectCorrectIcon(item)}</SingleDataItem>)
      }
    </div>)
}
  ;

export default topDataboard;
