import React,{useRef,useState} from "react";
import GuardarComponent from "../Components/GuardarComponent";
import api from '../Http/api';
import { useNavigate } from "react-router-dom";
const GuardarComponentController = () => { 
    const navigate = useNavigate();

    const [nameValue, setNameValue]= useState("");
    const [emailValue,setEmailValue]= useState("");
    const [passwordValue,setPasswordValue]= useState("");
    const [last_nameValue,setLast_nameValue]= useState("");
    const [addressValue,setAddressValue]= useState("");

    const [nameErrorMessage,setNameErrorState]= useState(false);
    const [emailErrorState,setmailErrorState] = useState(false);
    const [passwordErrorState,setPasswordErrorState] = useState(false);
    const [last_nameErrorState,setLast_nameErrorState] = useState(false);
    const [addressErrorState,setAddressErrorState] = useState(false);

    const [nameErrorStrate, setNameErrorMenssage] = useState("");
    const [emailErrorMessage,setEmailErrorMessage] = useState("");
    const [passwordErrorMessage,setPasswordErrorMessage] = useState("");
    const [last_nameErrorMessage,setLast_nameErrorMessage] = useState("");
    const [addressErrorMessage,setAddressErrorMessage] = useState("");

    const handleNameChange = (e) =>{
        
        setNameValue(e.target.value);
    }
    const handlePasswordChange = (e) =>{

        setPasswordValue(e.target.value);
    }
    const handleEmailChange = (e) =>{

        setEmailValue(e.target.value);
    }
    const handleLast_nameChange = (e) =>{

        setLast_nameValue(e.target.value);
    }
    const handleAddressChange = (e) =>{

        setAddressValue(e.target.value);
    }

    const authenticate = () =>{
        const response =api.signUp(nameValue,emailValue,passwordValue,last_nameValue,addressValue)
            .then(response =>{
                return response.json()
            }).then(json=>{
                procesarRespuesta1(json);
                if(json.code=200)
                    {
                        navigate("/home1");
                    }
            }).catch(response=>{
                console.log(response);
            });
    }
    const procesarRespuesta1 = (json) => {
        console.log(json);
        if(json.code===422)
        {
            if('email' in json.body[0])
            {
                setmailErrorState(true);
                setEmailErrorMessage(json.body[0].email[0]);
            }
            else{
                setmailErrorState(false);
                setEmailErrorMessage(json.body[0].password[0]);
            }
            if('password' in json.body[0])
            {
                setPasswordErrorState(true);
                setPasswordErrorMessage(json.body[0].password[0]);
            }
            else{
                setPasswordErrorState(false);
                setPasswordErrorMessage(json.body[0].password[0]);
                
                setPasswordErrorState(false);
            }
            if('name' in json.body[0])
            {
                setNameErrorState(true);
                setNameErrorMenssage(json.body[0].name[0]);
            }
            else{
                setNameErrorState(false);
                setNameErrorMenssage(json.body[0].name[0]);
            }
            if('last_name' in json.body[0])
                {
                    setLast_nameErrorState(true);
                    setLast_nameErrorMessage(json.body[0].last_name[0]);
                    
                }
                else{
                    setLast_nameErrorState(false);
                    setLast_nameErrorMessage(json.body[0].last_name[0]);
                }
             if('address' in json.body[0])
                {
                     setAddressErrorState(true);
                     setAddressErrorMessage(json.body[0].address[0]);
                 }
                else{
                     setAddressErrorState(false);
                     setAddressErrorMessage(json.body[0].address[0]);
                    }

        }
        if(json.code===200)
        {
            alert("Autenticado");
            navigate("/home");
        }
    }
    return (
        <GuardarComponent
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}  
        handlePasswordChange={handlePasswordChange} 
        handleLast_nameChange={handleLast_nameChange} 
        handleAddressChange={handleAddressChange} 

        authenticate={authenticate}    

        nameErrorState={nameErrorStrate}
        nameErrorMessage={nameErrorMessage}
        emailErrorState={emailErrorState}
        last_nameErrorState={last_nameErrorState}
        addressErrorState={addressErrorState}

        emailErrorMessage={emailErrorMessage}
        passwordErrorState={passwordErrorState}
        passwordErrorMessage={passwordErrorMessage}
        last_nameErrorMessage={last_nameErrorMessage}
        addressErrorMessage={addressErrorMessage}
        />
    );
}
export default GuardarComponentController;