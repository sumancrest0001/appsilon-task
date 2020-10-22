import React from 'react';
import './ExportIcon.scss';
import { ReactComponent as Export } from '../../../images/download.svg';

const exportIcon = () => (
  <Export fill="white" className="export-icon" />
);

export default exportIcon;