import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

const MainComponent = ({data,handleEdit}) => {
    return (
        <>
            
                <div className="main-body">
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>       
            <TableCell align="right">Options</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.product_name}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.product_price}</TableCell>           
              <TableCell align="right">
                
                <IconButton onClick={()=>handleEdit(row)}><EditIcon className="edit-icon"/></IconButton>
                <IconButton/><DeleteIcon className="delete-icon"/>
                </TableCell>          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                    
                </div>
            {localStorage.setItem("current_route","/home")}
        </>
    );
}
export default MainComponent;