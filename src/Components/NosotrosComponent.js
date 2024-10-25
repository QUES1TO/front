import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import LOGO from '../img/LOGO.png'; // Ruta a la imagen del logo

const NosotrosComponent = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#121212',
                minHeight: '100vh',
                color: "#FFFFFF",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                {["Inicio", "Nosotros", "Productos", "Noticias"].map((item, index) => (
                    <Button
                        key={index}
                        component={Link}
                        to={`/${item.toLowerCase().replace(" ", "")}`}
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

            {/* Encabezado */}
            <Box sx={{ textAlign: 'center', mb: 4, px: 2 }}>
                <Typography variant="h3" component="h1" fontWeight="bold">Sobre Nosotros</Typography>
                <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto", mt: 2, fontSize: "1.5rem" }}>
                    En Glass Mar, nos dedicamos a ofrecer soluciones de vidrio de la más alta calidad. Con años de experiencia en la industria, garantizamos un servicio excepcional y productos confiables para todos nuestros clientes.
                </Typography>
            </Box>

            {/* Información Adicional */}
            <Box sx={{ mt: 4, px: 2 }}>
                <Paper elevation={4} sx={{ p: 4, bgcolor: "#1C1C1C", borderRadius: '8px', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ color: "#FF0000" }}>Nuestra Misión</Typography>
                    <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mt: 2, fontSize: "1.5rem" }}>
                        Proporcionar soluciones de vidrio de calidad superior que garanticen la seguridad y satisfacción de nuestros clientes. Nos esforzamos por innovar continuamente y mejorar nuestros servicios para cumplir con las expectativas de nuestros clientes.
                    </Typography>
                </Paper>

                <Paper elevation={4} sx={{ p: 4, bgcolor: "#1C1C1C", borderRadius: '8px', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ color: "#FF0000" }}>Nuestra Visión</Typography>
                    <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mt: 2, fontSize: "1.5rem" }}>
                        Ser reconocidos como líderes en la industria de vidrio, siendo la opción preferida por los consumidores debido a nuestra calidad y servicio al cliente.
                    </Typography>
                </Paper>

                {/* Nuevas Secciones */}
                <Paper elevation={4} sx={{ p: 4, bgcolor: "#1C1C1C", borderRadius: '8px', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ color: "#FF0000" }}>Nuestros Valores</Typography>
                    <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mt: 2, fontSize: "1.5rem" }}>
                        - **Integridad**: Actuamos con honestidad y transparencia en todas nuestras interacciones.<br />
                        - **Calidad**: Nos comprometemos a ofrecer productos que cumplan con los más altos estándares.<br />
                        - **Innovación**: Siempre estamos buscando formas de mejorar y adaptarnos a las necesidades del mercado.
                    </Typography>
                </Paper>

                <Paper elevation={4} sx={{ p: 4, bgcolor: "#1C1C1C", borderRadius: '8px', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ color: "#FF0000" }}>Nuestro Equipo</Typography>
                    <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mt: 2, fontSize: "1.5rem" }}>
                        Contamos con un equipo de profesionales apasionados y dedicados a brindar el mejor servicio al cliente. Cada miembro de nuestro equipo aporta una vasta experiencia y conocimientos en la industria del vidrio.
                    </Typography>
                </Paper>

                <Paper elevation={4} sx={{ p: 4, bgcolor: "#1C1C1C", borderRadius: '8px', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ color: "#FF0000" }}>Nuestros Servicios</Typography>
                    <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", mt: 2, fontSize: "1.5rem" }}>
                        Ofrecemos una amplia gama de servicios, incluyendo:<br />
                        - Instalación de parabrisas y vidrios de seguridad.<br />
                        - Reparaciones de vidrios y parabrisas.<br />
                        - Consultoría para soluciones personalizadas de vidrio.
                    </Typography>
                </Paper>
            </Box>

            {/* Sección de Contacto - Botones Fijos */}
            <Box sx={{ bgcolor: "#1C1C1C", py: 3, position: 'fixed', bottom: 0, width: '100%' }}>
                <Grid container spacing={3} justifyContent="center">
                    {[
                        { label: "Contactanos", link: "https://api.whatsapp.com/send?phone=60739083&text=Hola,%20quiero%20más%20información." },
                        { label: "Dirección", link: "https://maps.app.goo.gl/wQ3xZg51vaYqfCYG6" }
                    ].map((contact, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Paper elevation={4} sx={{ p: 2, bgcolor: "#4A0404", color: "#F9E6E6", borderRadius: '8px', textAlign: 'center' }}>
                                <Button 
                                    component="a" 
                                    href={contact.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ 
                                        color: "#F9E6E6", 
                                        textDecoration: "none", 
                                        backgroundColor: "#7D1D1D", 
                                        borderRadius: '20px', 
                                        padding: '10px 20px',
                                       
                                        transition: "background-color 0.3s, color 0.3s",
                                        width: '100%'
                                    }}
                                >
                                    <Typography variant="h6">{contact.label}</Typography>
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default NosotrosComponent;
