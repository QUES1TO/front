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
import { IconButton } from "@mui/material";
import main from '../img/eh.avif';  // Ruta a la imagen de fondo

const MainComponent = ({ data, handleEdit, handleDelete }) => {
    return (
      
      
        <div className="main">
          <img className='main-image' src={main} alt="Background" />
            <div className="table-and-button">
                <TableContainer component={Paper} sx={{ boxShadow: '0 4px 8px rgba(0,0,0,5.1)', borderRadius: 2 }}>
                    <Table className="custom-table" sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#8f0606' }}>
                                <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Options</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} sx={{
                                    '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' },
                                    '&:hover': { backgroundColor: '#e0f7fa' }
                                }}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleEdit(row.id)} sx={{ color: '#1976d2' }}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(row.id)} sx={{ color: '#d32f2f' }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="button-container">
                <Link to="/guardar">
                    <button className="add-user-button">AGREGAR NUEVO USUARIO</button>
                </Link>
            </div>
        </div>
    );
}

export default MainComponent;
