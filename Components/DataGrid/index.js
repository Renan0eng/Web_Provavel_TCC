import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Box from '@mui/material/Box';

export default function BasicExampleDataGrid({ gridWidth, dataGrid }) {

  return (
    <div style={{ height: 400, width: "100%", alignSelf: "center", display: "flex", justifyContent: "space-evenly" }}>
      <Box sx={{ height: 400, width: "100%", maxWidth: gridWidth, alignSelf: "center" }}>
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          {...dataGrid}
          onCellDoubleClick={
            (params, event) => {
              console.log('cell clicked:', params);
            }
          }

        />
      </Box>
    </div>
  );
}
