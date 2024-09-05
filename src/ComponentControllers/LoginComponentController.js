import React,{useRef,useState} from "react";
import LoginComponent from "../Components/LoginComponent";
import api from '../Http/api';
import { useNavigate } from "react-router-dom";

const LoginComponentController = ({setAuthenticated}) => { 

    const navigate = useNavigate();
    
    const [emailValue,setEmailValue]= useState("");
    const [passwordValue,setPasswordValue]= useState("");
    const [emailErrorState,setmailErrorState] = useState(false);
    const [passwordErrorState,setPasswordErrorState] = useState(false);
    const [emailErrorMessage,setEmailErrorMessage] = useState("");
    const [passwordErrorMessage,setPasswordErrorMessage] = useState("");

    const handlePasswordChange = (e) =>{
        console.log(e.target.value);
        setPasswordValue(e.target.value);
    }
    const handleEmailChange = (e) =>{
        console.log(e.target.value);
        setEmailValue(e.target.value);
    }
    const authenticate = () =>{
        const response = api.login(emailValue,passwordValue)
            .then(response =>{
                return response.json()
            }).then(json=>{
                procesarRespuesta(json);
            }).catch(response=>{
                console.log(response);
            });
    }
    const procesarRespuesta = (json) => {
        console.log(json);
        if(json.code==422)
        {
            if('email' in json.body[0])
            {
                setmailErrorState(true);
                setEmailErrorMessage(json.body[0].email[0]);
            }
        }
        if(json.code==200)
        {
            console.log("Correcto");
            const ahora = new Date();
            const expirationTime = process.env.REACT_APP_EXPIRATION_TIME;
            const expiracion = ahora.setMinutes(ahora.getMinutes() + Number(expirationTime));
            const datosConExpiracion = {
                email : json.body.email,
                token: json.body.token,
                id:json.body.id,
                role:json.body.role,
                expiracion : expiracion
            }
            localStorage.setItem("token",JSON.stringify(datosConExpiracion));
            setAuthenticated(true); 
            let currentRoute = localStorage.getItem("current_route");  
            if(currentRoute == null)
            {
                localStorage.setItem("current_route","/home")
            }  
            currentRoute = localStorage.getItem("current_route");     
            navigate(currentRoute,{replace:true});             
        }
    }

    return (
        <LoginComponent
        handleEmailChange={handleEmailChange}  
        handlePasswordChange={handlePasswordChange}  
        authenticate={authenticate}     
        emailErrorState={emailErrorState}
        emailErrorMessage={emailErrorMessage}
        />
    );
}
export default LoginComponentController;