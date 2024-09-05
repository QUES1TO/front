//formulario para gergistrar
import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';

const GuardarComponent =({
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
        const errorEmail = () => {
            return (
                emailErrorState && <FormHelperText error>
                    {emailErrorMessage}
                </FormHelperText>
            );
        }
        const errorName = () => {
            return (
                nameErrorState && <FormHelperText error>
                    {nameErrorMessage}
                </FormHelperText>
            );
        }
        const errorLast_name = () => {
            return (
                last_nameErrorState && <FormHelperText error>
                    {last_nameErrorMessage}
                </FormHelperText>
            );
        }
        const errorAddress = () => {
            return (
                addressErrorState && <FormHelperText error>
                    {addressErrorMessage}
                </FormHelperText>
            );
        }
        const errorPassword = () => {
            return (
                passwordErrorState && <FormHelperText error>
                    {passwordErrorMessage}
                </FormHelperText>
            );
        }
    return (
        <>
            <div className="cardd-container">
                <Card  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      
                    <CardContent>
                        <h1>REGISTRAR NUEVO USUARIO</h1>
                        <form>
                            <FormControl className="login-form-control">
                                <TextField  
                                    className="lgin-input"                                   
                                    id="outlined-basic" 
                                    label="Nombre" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Nombre" 
                                    error={nameErrorState} 
                                    onChange={handleNameChange}/>
                                    {errorName()} 
                                    <br></br>
                                <TextField  
                                    className="lgin-input"                                   
                                    id="outlined-basic" 
                                    label="Email" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Email" 
                                    error={emailErrorState} 
                                    onChange={handleEmailChange}/>
                                    {errorEmail()} 
                                    <br></br>
                                <TextField  
                                    className="Guardar-input"  
                                    type="password"                                  
                                    id="outlined-basic" 
                                    label="Password" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Contraseña" 
                                    error={passwordErrorState} 
                                    onChange={handlePasswordChange}/>
                                    {errorPassword()}
                                    <br></br>
                                <TextField  
                                    className="lgin-input"                                   
                                    id="outlined-basic" 
                                    label="Last_name" 
                                    variant="outlined" 
                                    placeholder="Introduzca" 
                                    error={last_nameErrorState} 
                                    onChange={handleLast_nameChange}/>
                                    {errorLast_name()} 
                                    <br></br>
                                <TextField  
                                    className="lgin-input"                                   
                                    id="outlined-basic" 
                                    label="Address" 
                                    variant="outlined" 
                                    placeholder="Introduzca " 
                                    error={addressErrorState} 
                                    onChange={handleAddressChange}/>
                                    {errorAddress()} 
                                    <br></br>
                                <Button onClick={authenticate}  style={{ backgroundColor: 'rgba(7, 18, 28, 0.8)' }}>
      
                                    Registrar
                                </Button>
                            </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
export default GuardarComponent;