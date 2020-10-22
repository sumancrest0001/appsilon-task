import React from 'react';
import ImportExportButton from '../../UI/ImportExportButton/ImportExportButton';
import ImportIcon from '../../UI/Icons/ExportIcon/ImportIcon';
import ExportIcon from '../../UI/Icons/ExportIcon/ExportIcon';
import './ImportExportSection.scss';

const importExportSection = () => (
  <div className="import-export-section">
    <ImportExportButton title="import">
      <ImportIcon />
    </ImportExportButton>
    <ImportExportButton title="export">
      <ExportIcon />
    </ImportExportButton>
  </div>
);

export default importExportSection;