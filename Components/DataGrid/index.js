import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function BasicExampleDataGrid({ data }) {

  return (
    <div style={{ marginTop: 70, height: 400, width: 530 }}>
      <DataGrid
        sx={{ backgroundColor: "#ccc", borderColor: "#ccc", borderWidth: 5, borderStyle: "solid" }}
        {...data}
        onCellDoubleClick={
          (params, event) => {
            console.log('cell clicked:',
              "ID:", params.row.id,
              "Age:", params.row.age,
              "First name:", params.row.firstName,
              "Full name:", params.row.fullName,
              "Last name:", params.row.lastName
            );
          }
        }
        components={{
          Toolbar: GridToolbar,
          ToolbarColor: "inherit",
        }}
      />
    </div>
  );
}
