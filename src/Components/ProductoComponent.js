import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button, Box, FormControl, TextField, Drawer, Grid } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import toyota from '../img/toyota.png';  
import suzuki from '../img/suzuki.png';
import bmw from '../img/bmw.png';
import nissan from '../img/nissan.png';
import ford from '../img/ford.png';
import jac from '../img/jac.png';
import honda from '../img/honda.png';
import fiat from '../img/fiat.png';
import jeep from '../img/jeep.svg';
import renault from '../img/renault.png';
import chebro from '../img/chebro.png';
import changan from '../img/changan.png';
import subaru from '../img/subaru.png';
import foton from '../img/foton.png';
import chery from '../img/chery.png';
import LOGO from '../img/LOGO.png'; // Ruta a la imagen del logo

// Estilos de los componentes
const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 300,
    margin: '20px',
    borderRadius: '10px',
    boxShadow: theme.shadows[3],
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:hover': {
        boxShadow: theme.shadows[6],
        transform: 'scale(1.05)',
        transition: 'transform 0.3s',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: red[500],
        },
        '&:hover fieldset': {
            borderColor: red[700],
        },
        '&.Mui-focused fieldset': {
            borderColor: red[900],
        },
    },
}));

const ProductoComponent = ({ data, addToCart, selectCategory }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchYear, setSearchYear] = useState("");
    const [searchSide, setSearchSide] = useState("");
    const [searchName, setSearchName] = useState("");

    // Filtrar los datos según los términos de búsqueda
    const filteredData = data.filter((item) =>
        (item.modelo.toString().includes(searchYear) || searchYear === "") &&
        (item.lado.toLowerCase().includes(searchSide.toLowerCase()) || searchSide === "") &&
        (item.nombre.toLowerCase().includes(searchName.toLowerCase()) || searchName === "")
    );

    const handleSelectBrandClick = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const OverlayText = styled(Box)(({ theme }) => ({
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100px',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        color: '#F9E6E6',
        zIndex: 999,
    }));

    const list = () => (
        <Box sx={{ width: 250, padding: '20px', backgroundColor: '#9b1b30' }} role="presentation" onMouseLeave={handleDrawerClose}>
            <Grid container spacing={2}>
                {[toyota, suzuki, bmw, nissan, ford, jac, honda, fiat, jeep, renault, changan, chebro, subaru, foton, chery].map((img, index) => (
                    <Grid item xs={6} key={index}>
                        <StyledButton onClick={() => selectCategory(index + 1)}>
                            <img src={img} alt={`Marca ${index + 1}`} className="brand-image" />
                            <span className="brand-number">{index + 1}</span>
                        </StyledButton>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    return (
        <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', color: "#FFFFFF" }}>
            <Box component="nav" sx={{ position: "fixed", top: 0, width: "100%", bgcolor: "#7D1D1D", zIndex: 1000, display: "flex", justifyContent: "center", py: 2, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}>
                <img src={LOGO} alt="Logo" style={{ position: 'absolute', left: '20px', top: '-10px', width: '300px', height: '114px' }} />
                {["Inicio", "Nosotros", "Productos", "Noticias"].map((item, index) => (
                    <Button
                        key={index}
                        component={Link}
                        to={`/${item.toLowerCase()}`}
                        sx={{ color: "#F9E6E6", fontWeight: "bold", mx: 3, fontSize: "1rem", "&:hover": { color: "#FFFFFF" }, transition: "color 0.3s" }}
                    >
                        {item}
                    </Button>
                ))}
            </Box>

            <Box sx={{ height: "64px" }}></Box>

            <OverlayText onClick={handleSelectBrandClick}>
                <Typography
                    variant="h6"
                    sx={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        cursor: "pointer",
                        textAlign: 'center',
                    }}
                >
                    Seleccione la marca que necesite
                </Typography>
            </OverlayText>

            <Drawer
                anchor="right"
                variant="persistent"
                open={drawerOpen}
                sx={{ '& .MuiDrawer-paper': { width: 250, boxSizing: 'border-box', backgroundColor: '#9b1b30' } }}
            >
                {list()}
            </Drawer>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '20px' }}>
                    <FormControl variant="outlined" sx={{ width: '250px', margin: '10px' }}>
                        <StyledTextField className="login-input nombre-input" label="BUSCAR AÑO" variant="outlined" value={searchYear} onChange={e => setSearchYear(e.target.value)} />
                    </FormControl>

                    <FormControl variant="outlined" sx={{ width: '250px', margin: '10px' }}>
                        <StyledTextField className="login-input nombre-input" label="BUSCAR LADO" variant="outlined" value={searchSide} onChange={e => setSearchSide(e.target.value)} />
                    </FormControl>

                    <FormControl variant="outlined" sx={{ width: '250px', margin: '10px' }}>
                        <StyledTextField className="login-input nombre-input" label="BUSCAR NOMBRE" variant="outlined" value={searchName} onChange={e => setSearchName(e.target.value)} />
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                    {filteredData.length > 0 ? (
                        filteredData.map((row) => (
                            <StyledCard key={row.id}>
                                <CardHeader
                                    avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{row.nombre.charAt(0)}</Avatar>}
                                    title={row.nombre}
                                    titleTypographyProps={{ variant: 'h6', color: red[500] }}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={`http://localhost:8000/storage/${row.url_imagen}`}
                                    alt={row.nombre}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    <h3 style={{ margin: 0, color: red[500] }}>CALIDAD: {row.calidad}</h3>
                                        <h3 style={{ margin: 0, color: red[500] }}>AÑO: {row.modelo}</h3>
                                        <h3 style={{ margin: 0, color: red[500] }}>LADO: {row.lado}</h3>
                                        <h3 style={{ margin: 0, color: red[500] }}>MARCA: {row.categoria_id}</h3>
                                        <h3 style={{ margin: 0, color: red[500] }}>{row.descripcion}</h3>
                                        <h1 style={{ margin: 0, color: red[500] }} > Bs.{row.precio}</h1>
                                     </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            const message = `Hola, estoy interesado en el producto ${row.nombre} (Modelo: ${row.modelo}, Lado: ${row.lado}).`;
                                            window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
                                        }}
                                        sx={{ marginTop: 2, backgroundColor: red[500] }}
                                    >
                                        Reservar
                                    </Button>
                                </CardContent>
                            </StyledCard>
                        ))
                    ) : (
                        <Typography variant="h4" color="error" sx={{ fontWeight: 'bold', marginTop: 4 }}>
                        No hay productos disponibles.
                    </Typography> )}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductoComponent;
