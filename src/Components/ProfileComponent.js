import React from "react";
import { Avatar, Grid, Box, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import main from '../img/eh.avif'; // Ruta a la imagen de fondo


function ProfileComponent({ userData, handleEdit }) {
  return (
    <Box className="profile-container">
      {/* Imagen de fondo */}
      <img className='main-image' src={main} alt="Background" />

      {/* Tarjeta de perfil */}
      <div className="profile-card">
       
        <Box textAlign="center">
          <Avatar
            className="profile-avatar"
            src={userData.profileImage || "/default-profile.png"}
            alt={userData.name}
            sx={{ width: 200, height: 200, margin: "0 auto" }}  // Avatar más grande y centrado
          />
          <Typography variant="h5" component="h2" gutterBottom>
            {userData.name|| "Jhojan"} {userData.apellido|| "Apaza"}
          </Typography>
        </Box>

        {/* Información del usuario */}
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} md={6}>
            <div className="info-row">
              <EmailIcon className="icon" />
              <Typography variant="body1" color="inherit">
                {userData.email}
              </Typography>
            </div>

            <div className="info-row">
              <PhoneIcon className="icon" />
              <Typography variant="body1" color="inherit">
                {userData.telefono || "60739093"}
              </Typography>
            </div>

            <div className="info-row">
              <LocationOnIcon className="icon" />
              <Typography variant="body1" color="inherit">
                {userData.direccion || "CBBA"}, {userData.ciudad || "Cercado"}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Acerca de mí
            </Typography>
            <Typography variant="body2" color="inherit" paragraph>
              {userData.descripcion || "Soy un apasionado desarrollador con experiencia en la creación de aplicaciones modernas utilizando las últimas tecnologías."}
            </Typography>
          </Grid>
        </Grid>

        {/* Botón de contacto */}
        <Box textAlign="center" mt={4}>
          
        </Box>
      </div>
    </Box>
  );
}

export default ProfileComponent;
