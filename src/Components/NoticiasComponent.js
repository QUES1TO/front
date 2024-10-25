import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import LOGO from '../img/LOGO.png';

const noticias = [
    {
        id: 1,
        title: "Lanzamiento de Nuevos Productos",
        description: "Explora nuestra nueva gama de parabrisas innovadores.",
        image: "https://via.placeholder.com/300",
        link: "/productos"
    },
    {
        id: 2,
        title: "Promociones Especiales",
        description: "Aprovecha nuestras promociones de temporada en Glass Mar.",
        image: "https://via.placeholder.com/300",
        link: "/promociones"
    },
    {
        id: 3,
        title: "Novedades del Sector",
        description: "Mantente informado sobre las últimas noticias de la industria.",
        image: "https://via.placeholder.com/300",
        link: "/noticias"
    }
];

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
                    style={{ position: 'absolute', left: '20px', top: '-10px', width: '300px', height: '114px' }}
                />
                {["Inicio", "Nosotros", "Productos", "Noticias"].map((item, index) => (
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

             <Box sx={{ height: "64px" }}></Box>

           
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Últimas Noticias
                </Typography>
                <Grid container spacing={4}>
                    {noticias.map((noticia) => (
                        <Grid item xs={12} sm={6} md={4} key={noticia.id}>
                            <Card sx={{ backgroundColor: '#1E1E1E', color: '#FFFFFF' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={noticia.image}
                                    alt={noticia.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {noticia.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {noticia.description}
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to={noticia.link}
                                        sx={{
                                            mt: 2,
                                            color: "#7D1D1D",
                                            "&:hover": { color: "#FFFFFF" }
                                        }}
                                    >
                                        Ver más
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default NoticiasComponent;
