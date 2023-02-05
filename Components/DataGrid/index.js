import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Box from '@mui/material/Box';

export default function BasicExampleDataGrid({ gridWidth, dataGrid }) {

  return (
      <Box sx={{ height: 450, width: "100%", maxWidth: gridWidth, alignSelf: "center",padding: 3}}>
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          {...dataGrid}
          onCellDoubleClick={
            (params, event) => {
              console.log('cell clicked:', params);
            }
          }
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
  );
}
