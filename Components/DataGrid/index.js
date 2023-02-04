import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];



export default function BasicExampleDataGrid({ data }) {

  return (
    <div style={{ marginTop: 70, height: 400, width: 530  }}>
      <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
    </div>
  );
}
