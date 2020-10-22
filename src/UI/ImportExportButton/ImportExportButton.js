import React from 'react';
import './ImportExportButton.scss';


const importExportButton = (props) => (
  <div className="import-export-button">
    <div className="import-export-button__title">{props.title}</div>
    {props.children}
  </div>
);

export default importExportButton