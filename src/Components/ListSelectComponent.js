import React from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from "@mui/material";

import Typography from '@mui/material/Typography';
const ListSelectComponent = ({data,handleEdit}) => {
  
    return (
        <>
        
<div className="cobr">
                <div className="">

                <h1 className="pag">TOTAL A COBRAR </h1>
               --------------------------------------------------------------
          {data.map((row) => (
            
            <Typography>

            <h1 className="">.....................fsfs..................................PAGAR:.------------.{row.total}..bs</h1>

            </Typography>
              
               
             
          ))}
        
        </div>
    



    
                          
       

    <div className="contendor">
    
          
          <button className="botonpa">PAGAR</button>
        
        

      </div>
                </div>
            {localStorage.setItem("current_route","/listSelect")}
             </>
    );
}
export default ListSelectComponent;