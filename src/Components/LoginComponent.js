import React, { useState } from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import login from '../img/login.jpg';  // Ruta a la imagen de fondo

const LoginComponent = ({
    handleEmailChange,
    handlePasswordChange,

    emailErrorState,
    passwordErrorState,

    emailErrorMessage,
    passwordErrorMessage,

    authenticate,  // Para login
    errorMessage    // Mensaje de error general
}) => {
    const [animationState, setAnimationState] = useState("slide-in");

    const handleSubmit = (event) => {
        event.preventDefault();
        authenticate();  // Llamamos a la función de login
    };

    return (
        <div className="login-container">
            <img className='background-image' src={login} alt="Background" />
            <div className={`card-container ${animationState}`}>
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
                            LOGIN
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <FormControl className="login-form-control">
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
                                {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>} {/* Mostrar el mensaje de error */}
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: 'rgba(70, 8, 8, 0.568)', color: 'white', marginTop: '20px' }}
                                    fullWidth
                                >
                                    Ingresar
                                </Button>
                                
                                <Button
                                    component="a" // Usa 'a' como componente
                                    href="/guardar" // Ruta a la que redirigir
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
                                    <span style={{ color: '#510501' }}>¿No tienes cuenta? Regístrate</span>
                                </Button>
                            </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginComponent;
