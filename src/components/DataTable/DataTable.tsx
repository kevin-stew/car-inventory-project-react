import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel  } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { 
        Button,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle 
        } from '@mui/material'; // ADD THESE
        
import { CarForm } from '../../components'; // ADD THIS


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Full Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'make',
    headerName: 'Make',
    type: 'number',
    width: 110,
    editable: true,
  },
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
];

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable =  () => {
  
  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = async () =>{
    for (let id in gridData){
      await server_calls.delete(`${gridData[id]}`)
    }
    window.location.reload()
  }  

  console.log(gridData) // a list of id's from checked rows

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Cars in Inventory</h2>
          <DataGrid 
						rows={carData} 
						columns={columns} 
						pageSize={5} 
						checkboxSelection 
						onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
						{...carData}  
					/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Car</DialogTitle>
          <DialogContent>
            <DialogContentText>Car id: {gridData[0]}</DialogContentText>
              <CarForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
}


