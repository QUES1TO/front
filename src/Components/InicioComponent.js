import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid, Paper, Card, CardContent } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import frente from '../img/frente.png'; // Ruta a la imagen de fondo
import lateral from '../img/lateral.png'; // Ruta a la imagen de fondo
import detras from '../img/detras.webp'; // Ruta a la imagen de fondo
import LOGO from '../img/LOGO.png';  // Ruta a la imagen de fondo
const InicioComponent = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#121212',
                minHeight: '100vh',
                color: "#FFFFFF",
            }}
        >
            {/* Encabezado principal */}
            <Box
                component="header"
                sx={{
                    bgcolor: "rgba(74, 4, 4, 0.8)",
                    py: 6,
                    textAlign: "center",
                    animation: "fadeIn 1s"
                }}
            >
                <Typography variant="h3" component="h1" fontWeight="bold" sx={{ mt: 4 }}>GLASS MAR</Typography>
                <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto", mt: 2, fontSize: "1.2rem" }}>
                    Glass Mar ofrece soluciones duraderas y de alta calidad para mantener la seguridad y visibilidad en carretera. Nuestro compromiso con la innovación asegura parabrisas más resistentes y eficaces para todo tipo de vehículos.
                </Typography>
            </Box>

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
                {["Inicio", "Nosotros", "Productos","Noticias", ].map((item, index) => (
                   
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

            {/* Información de contacto */}
            <Box sx={{ py: 6, bgcolor: "#1C1C1C", textAlign: "center" }}>
                <Grid container spacing={3} justifyContent="center">
                    {[
                        { label: "Dirección", info: "", link: "https://maps.app.goo.gl/wQ3xZg51vaYqfCYG6" },
                        { label: "Teléfono", info: "", link: "https://api.whatsapp.com/send?phone=60739083&text=Hola,%20quiero%20más%20información." },
                        { label: "Horario  ", info: "__8:00 am a 5:30 pm" },
                    ].map((contact, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Paper elevation={4} sx={{ p: 3, bgcolor: "#4A0404", color: "#F9E6E6" }}>
                                <Button component="a" href={contact.link} sx={{ color: "#F9E6E6", textDecoration: "none" }}>
                                    <Typography variant="h6">{contact.label}</Typography>
                                    <Typography variant="body2">{contact.info}</Typography>
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Sección de Servicios Destacados */}
            <Box sx={{ py: 6, bgcolor: "#2C2C2C", textAlign: "center" }}>
                <Typography variant="h4" component="h2" fontWeight="bold" color="#F9E6E6">Nuestros Servicios</Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
                    {["Instalación de Parabrisas", "Reparación", "Reemplazo Completo"].map((service, index) => (
                        <Grid item xs={12} sm={3} key={index}>
                            <Card sx={{ maxWidth: 345, bgcolor: "#D32F2F", transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="#FFFFFF">
                                        {service}
                                    </Typography>
                                    <Typography variant="body2" color="#E0E0E0">
                                        {`Ofrecemos un servicio completo de ${service.toLowerCase()}, garantizando calidad y seguridad en cada trabajo.`}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
{/* Galería de imágenes */}
<Box sx={{ py: 6, bgcolor: "rgba(28, 28, 28, 0.9)", textAlign: "center" }}>
    <Typography variant="h4" component="h2" fontWeight="bold" color="#F9E6E6">Nuestros productos</Typography>
    <Grid container spacing={2} sx={{ mt: 3 }}>
        {/* Solo las tres imágenes importadas */}
        {[
            { src: frente, name: "Frente" },
            { src: lateral, name: "Lateral" },
            { src: detras, name: "Atras" }
        ].map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={0} sx={{ height: "200px", bgcolor: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h6" sx={{ color: "#F9E6E6", mb: 1 }}>{image.name}</Typography> {/* Nombre de la imagen */}
                    <img src={image.src} alt={image.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
                </Paper>
            </Grid>
        ))}
    </Grid>
</Box>




            {/* Sección de Blog o Artículos */}
            <Box sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h4" component="h2" fontWeight="bold" color="white">Nuestros Consejos</Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }} >
                    {[
                        { title: "Cómo elegir el parabrisas adecuado", excerpt: "Elegir el parabrisas adecuado es crucial para la seguridad de su vehículo. Considere la calidad del vidrio, la certificación del fabricante y el tipo de instalación que se va a realizar." },
                        { title: "Mantenimiento de parabrisas: ¿Qué debes saber?", excerpt: "El mantenimiento regular de su parabrisas puede prevenir daños mayores. Limpie regularmente, verifique el estado de los sellos y reemplace limpiaparabrisas desgastados." },
                     ].map((article, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Paper elevation={3} sx={{ p: 3, bgcolor: "#D32F2F", textAlign: "left" }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>{article.title}</Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: "#E0E0E0" }}>{article.excerpt}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Redes Sociales */}
            <Box sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h5">Síguenos en nuestras redes sociales</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button sx={{ color: "#F1EDED", "&:hover": { color: "#FFFFFF" } }}><EmailIcon /></Button>
                    <Button sx={{ color: "#F1EDED", "&:hover": { color: "#FFFFFF" } }}><InstagramIcon /></Button>
                    <Button sx={{ color: "#F1EDED", "&:hover": { color: "#FFFFFF" } }}><FacebookIcon /></Button>
                    <Button sx={{ color: "#F1EDED", "&:hover": { color: "#FFFFFF" } }}><TwitterIcon /></Button>
                </Box>
            </Box>

            {/* Footer */}
            <Box component="footer" sx={{ bgcolor: "#4A0404", color: "#F1EDED", py: 4, textAlign: "center" }}>
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Glass Mar. Todos los derechos reservados.
                </Typography>
                <Typography variant="body2">
                    Política de Privacidad | Términos y Condiciones
                </Typography>
            </Box>

            {/* Animaciones CSS */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default InicioComponent;
