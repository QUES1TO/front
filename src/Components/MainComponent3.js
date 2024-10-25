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
import {  IconButton } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';


import main from '../img/eh.avif';  // Ruta a la imagen de fondo


const MainComponent3 = ({data,handleEdit,handleDelete}) => {
    return (
        <>
        

                <div className="main">
                <img className='main-image' src={main} alt="Background" />
                <TableContainer component={Paper} sx={{ boxShadow: '0 4px 8px rgba(0,0,0,5.1)', borderRadius: 2 }}>
                    <Table className="custom-table" sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#8f0606' }}>
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>id</TableCell>
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>nombre</TableCell>
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>calidad</TableCell>  
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>modelo</TableCell>     
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>lado</TableCell>  
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>url_image</TableCell>  
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>stock</TableCell>  
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>descripcion</TableCell>  
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>precio</TableCell>  
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>categoria_id</TableCell>
            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Options</TableCell>
          </TableRow>
        </TableHead>
       

<TableBody>
  {data.map((row) => (
    <TableRow key={row.id} sx={{
      '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' },
      '&:hover': { backgroundColor: '#e0f7fa' }
    }}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="right">{row.nombre}</TableCell>
      <TableCell align="right">{row.calidad}</TableCell>
      <TableCell align="right">{row.modelo}</TableCell>
      <TableCell align="right">{row.lado}</TableCell>
      <TableCell align="right">
        <CardMedia
          className="prp"
          component="img"
          height="100" // Ajusta la altura según tus necesidades
          image={`http://localhost:8000/storage/${row.url_imagen}`} // Asegúrate de que la URL sea correcta
           // Cambia esto si quieres mostrar un texto alternativo diferente
        />
      </TableCell>
      <TableCell align="right">{row.stock}</TableCell>
      <TableCell align="right">{row.descripcion}</TableCell>
      <TableCell align="right">{row.precio}</TableCell>
      <TableCell align="right">{row.categoria_id}</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => handleEdit(row)} sx={{ color: '#1976d2' }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(row)} sx={{ color: '#d32f2f' }}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ))}
</TableBody>


      </Table>
    </TableContainer>
    <div className="">
    
         

      </div>
                </div>
            {localStorage.setItem("current_route","/home3")}
             </>
    );
}
export default MainComponent3;