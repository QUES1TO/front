import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CarIcon from '@mui/icons-material/AddShoppingCart';
import Modal from '@mui/material/Modal';
import { Button, Box, FormControl, TextField, Drawer, Grid } from "@mui/material";

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
import main from '../img/eh.avif';  // Ruta a la imagen de fondo

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: '20px',
    boxShadow: theme.shadows[3],
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro y transparente
    '&:hover': {
        boxShadow: theme.shadows[6],
    },
}));

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 8,
};


const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    display: 'flex',
    flexDirection: 'column', // Cambiar a columna para apilar imagen y número
    alignItems: 'center', // Centrar el contenido
}));

const MainComponent2 = ({ data, handleOpen, handleClose, open, selectedProductName, handleProductAmount, addToCart, selectCategory }) => {
    const [drawerOpen, setDrawerOpen] = useState(true); // Estado para controlar la apertura del Drawer

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const list = () => (
        <Box sx={{ width: 250, padding: '20px', backgroundColor: '#9b1b30' }} role="presentation">
            <Grid container spacing={2}>
                {/* Aquí se numeran las imágenes */}
                {[
                    { img: toyota, id: 1 },
                    { img: suzuki, id: 2 },
                    { img: bmw, id: 3 },
                    { img: nissan, id: 4 },
                    { img: ford, id: 5 },
                    { img: jac, id: 6 },
                    { img: honda, id: 7 },
                    { img: fiat, id: 8 },
                    { img: jeep, id: 9 },
                    { img: renault, id: 10 },
                    { img: changan, id: 11 },
                    { img: chebro, id: 12 },
                    { img: subaru, id: 13 },
                    { img: foton, id: 14 },
                    { img: chery, id: 15 },
                ].map(({ img, id }) => (
                    <Grid item xs={6} key={id}>
                        <StyledButton onClick={() => selectCategory(id)}>
                            <img src={img} alt={`Marca ${id}`} className="brand-image" />
                            <span className="brand-number">{id}</span>
                        </StyledButton>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

    return (
        <>
            <img className='main-image' src={main} alt="Background" />
            <Drawer
                anchor="right"
                variant="persistent"
                open={drawerOpen}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 250,
                        boxSizing: 'border-box',
                        backgroundColor: '#9b1b30',
                    },
                }}
            >
                {list()}
            </Drawer>

            <div className="main" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '10px', marginRight: '224px' }}>
                {data.map((row) => (
                    <StyledCard key={row.id} >
                        <CardHeader style={{ margin: 0,color: red[500] }}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {row.nombre.charAt(0)} {/* Muestra la inicial del nombre */}
                                </Avatar>
                            }
                            title={row.nombre}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={`http://localhost:8000/storage/${row.url_imagen}`}
                            alt={row.nombre}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <h3 style={{ margin: 0,color: red[500] }}>CALIDAD: {row.calidad}</h3>
                                <h3 style={{ margin: 0,color: red[500] }}>AÑO: {row.modelo}</h3>
                                <h3 style={{ margin: 0,color: red[500] }}>LADO: {row.lado}</h3>
                                <h3 style={{ margin: 0,color: red[500] }}>MARCA: {row.categoria_id}</h3>
                                <h3 style={{ margin: 0 ,color: red[500]}}>{row.descripcion}</h3>
                                <h1 style={{ margin: 0, color: red[500] }}>{row.precio}</h1>
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onClick={() => handleOpen(row)} style={{ margin: 0 ,color: red[500]}}>
                                <CarIcon />
                            </IconButton>
                        </CardActions>
                    </StyledCard>
                ))}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography variant="h6">{selectedProductName}</Typography>
                    <form>
                        <FormControl fullWidth>
                            <TextField
                            
                                type="number"
                                id="outlined-basic"
                                label="Cantidad"
                                variant="outlined"
                                placeholder="Cantidad"
                                onChange={handleProductAmount}
                                sx={{ marginBottom: 2 }}
                            />
                            <StyledButton onClick={addToCart} variant="outlined" >
                                Añadir al carrito
                            </StyledButton>
                        </FormControl>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default MainComponent2;
