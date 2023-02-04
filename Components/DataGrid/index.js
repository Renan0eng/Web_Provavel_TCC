import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';




export default function BasicExampleDataGrid({ data }) {

  return (
    <div style={{ marginTop: 70, height: 400, width: 530 }}>
      <DataGrid
        {...data}
        onCellClick={
          (params, event) => {
            if (params.field === 'name') {
              console.log('cell clicked', params);
            }
          }
        }
        on
      />
    </div>
  );
}
