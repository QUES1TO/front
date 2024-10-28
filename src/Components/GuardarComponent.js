import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import main from '../img/eh.avif';  // Ruta a la imagen de fondo
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    return (
        <div className="main">
            <img className='main-image' src={main} alt="Background" />
            <div className=""> {/* Mantén la animación de entrada */}
                <Card id="crearproducto">
                    <CardContent>
                        <h1 className="crear-producto-title">
                            REGISTRAR NUEVO USUARIO
                        </h1>
                        <form>
                            <FormControl className="custom-table">
                                <TextField
                                    className="login-input nombre-input"
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
                                    className="login-input nombre-input"
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
                                    className="login-input nombre-input"
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
                                <button className="add-user-buttonn" onClick={() => navigate("/home")}>
                ATRAS
            </button>
                            </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default GuardarComponent;
