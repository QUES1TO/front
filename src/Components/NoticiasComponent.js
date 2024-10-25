import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";
import LOGO from '../img/LOGO.png'; // Ruta a la imagen del logo


const NoticiasComponent = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#121212',
                minHeight: '100vh',
                color: "#FFFFFF",
              
            }}
        >
            {/* Menú de Navegación */}
            <Box
                component="nav"
                sx={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    bgcolor: "#7D1D1D",
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    py: 2,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
                }}
            >
                <img 
                    src={LOGO} 
                    alt="Logo" 
                    style={{ position: 'absolute', left: '20px', top: '-10px', width: '300px', height: '114px' }} // Ajustar la posición y tamaño
                />
                 {["Inicio", "Nosotros", "Productos","Noticias",].map((item, index) => (
                    <Button
                        key={index}
                        component={Link}
                        to={`/${item.toLowerCase()}`}
                        sx={{
                            color: "#F9E6E6",
                            fontWeight: "bold",
                            mx: 3,
                            fontSize: "1rem",
                            "&:hover": { color: "#FFFFFF" },
                            transition: "color 0.3s"
                        }}
                    >
                        {item}
                    </Button>
                ))}
            </Box>

            {/* Espaciado para compensar la barra de navegación fija */}
            <Box sx={{ height: "64px" }}></Box>
           
        </Box>
    );
};

export default NoticiasComponent;
