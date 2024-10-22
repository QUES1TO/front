import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import login from '../img/login.jpg';  // Ruta a la imagen de fondo

const GuardarComponent = ({
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleLast_nameChange,
    handleAddressChange,

    nameErrorState,
    emailErrorState,
    passwordErrorState,
    last_nameErrorState,
    addressErrorState,

    emailErrorMessage,
    nameErrorMessage,
    passwordErrorMessage,
    last_nameErrorMessage,
    addressErrorMessage,

    authenticate
}) => {
    return (
        <div className="login-container">
            <img className='background-image' src={login} alt="Background" />
            <div className="card-container slide-in"> {/* Mantén la animación de entrada */}
                <Card style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px', // Bordes redondeados
                    padding: '3px', // Grosor del borde
                    border: '5px solid', // Ancho del borde
                    borderImageSlice: 1, // Cortar la imagen de borde
                    borderImageSource: 'linear-gradient(45deg, #5b0b0b, #434343, #000000, #5b0b0b)' // Degradado del borde
                }}>
                    <CardContent>
                        <h1 style={{ color: 'white', marginTop: '20px' }}>
                            REGISTRAR NUEVO USUARIO
                        </h1>
                        <form>
                            <FormControl className="login-form-control">
                                <TextField
                                    className="login-input"
                                    id="name"
                                    label="Nombre"
                                    variant="outlined"
                                    placeholder="Introduzca su Nombre"
                                    error={nameErrorState}
                                    onChange={handleNameChange}
                                    required
                                />
                                {nameErrorState && <FormHelperText error>{nameErrorMessage}</FormHelperText>}
                               
                                <TextField
                                    className="login-input"
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    placeholder="Introduzca su Email"
                                    error={emailErrorState}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailErrorState && <FormHelperText error>{emailErrorMessage}</FormHelperText>}
                                <br />
                                <TextField
                                    className="login-input"
                                    type="password"
                                    id="password"
                                    label="Contraseña"
                                    variant="outlined"
                                    placeholder="Introduzca su Contraseña"
                                    error={passwordErrorState}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                {passwordErrorState && <FormHelperText error>{passwordErrorMessage}</FormHelperText>}
                                <br />
                                <Button
                                    onClick={authenticate}
                                    style={{ backgroundColor: 'rgba(70, 8, 8, 0.568)', color: 'white', marginTop: '20px' }}
                                    fullWidth
                                >
                                    Registrar
                                </Button>
                                <Button
                                    component="a" // Usa 'a' como componente
                                    href="/login" // Ruta a la que redirigir
                                    style={{
                                        marginTop: '10px',
                                        color: '#510501',
                                        border: 'none',
                                        textDecoration: 'none', // Elimina subrayado
                                        background: 'none', // Sin fondo
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    variant="text"
                                    fullWidth
                                >
                                    <span style={{ color: '#510501' }}>¿Ya tienes cuenta? Inicia sesión</span>
                                </Button>
                            </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default GuardarComponent;
