import React, { useState } from "react";
import LoginComponent from "../Components/LoginComponent";
import api from '../Http/api';
import { useNavigate } from "react-router-dom";

const LoginComponentController = ({ setAuthenticated }) => { 
    const navigate = useNavigate();
    
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [emailErrorState, setEmailErrorState] = useState(false);
    const [passwordErrorState, setPasswordErrorState] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");  // Nuevo estado para el mensaje de error

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    const authenticate = () => {
        api.login(emailValue, passwordValue)
            .then(response => response.json())
            .then(json => procesarRespuesta(json))
            .catch(error => {
                console.error('Error:', error);
                setErrorMessage("Hubo un problema con la solicitud. Por favor, intente nuevamente.");  // Mensaje de error genérico
            });
    };

    const procesarRespuesta = (json) => {
        if (json.code === 422) {
            if (json.body && 'email' in json.body[0]) {
                setEmailErrorState(true);
                setEmailErrorMessage(json.body[0].email[0]);
            }
            if (json.body && 'password' in json.body[0]) {
                setPasswordErrorState(true);
                setPasswordErrorMessage(json.body[0].password[0]);
            }
        } else if (json.code === 403) {
            setErrorMessage("Acceso denegado. Verifique sus datos.");  // Mensaje específico para error 403
        } else if (json.code === 200) {
            const ahora = new Date();
            const expirationTime = process.env.REACT_APP_EXPIRATION_TIME || 60; // Valor por defecto
            const expiracion = ahora.setMinutes(ahora.getMinutes() + Number(expirationTime));
            const datosConExpiracion = {
                email: json.body.email,
                token: json.body.token,
                id: json.body.id,
                role: json.body.role,
                expiracion: expiracion
            };
            localStorage.setItem("token", JSON.stringify(datosConExpiracion));
            setAuthenticated(true);
            let currentRoute = localStorage.getItem("current_route");
            if (currentRoute === null) {
                localStorage.setItem("current_route", "/home");
            }
            currentRoute = localStorage.getItem("current_route");
            navigate(currentRoute, { replace: true });
        }
    };

    return (
        <LoginComponent
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            authenticate={authenticate}
            emailErrorState={emailErrorState}
            emailErrorMessage={emailErrorMessage}
            passwordErrorState={passwordErrorState}
            passwordErrorMessage={passwordErrorMessage}
            errorMessage={errorMessage}  // Pasar el mensaje de error al componente
        />
    );
};

export default LoginComponentController;
