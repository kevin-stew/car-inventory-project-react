import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'max_speed',
    headerName: 'Max Speed',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'make',
    headerName: 'Make',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Full Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];


export const DataTable = () =>{
    let { carData, getData } = useGetData();


return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={carData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}


