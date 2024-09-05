import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';
import login from '../img/vidrio.png';
const LoginComponent = ({handleEmailChange,
    handlePasswordChange,
    authenticate,
    emailErrorState,
    emailErrorMessage
    }) => {
        const errorEmail = () => {
            return (
                emailErrorState && <FormHelperText error>
                    {emailErrorMessage}
                </FormHelperText>
            );
        }
    return (
        <>
         <img className='image' src={login}/>
            <div className="card-container">
            
           
            <Card   style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      
               
                    <CardContent>
                        <h1>LOGIN</h1>
                        <form>
                            <FormControl className="login-form-control">
                                <TextField  
                                    className="login-input"                                   
                                    id="outlined-basic" 
                                    label="Email" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Email" 
                                    error={emailErrorState} 
                                    onChange={handleEmailChange}/>
                                    {errorEmail()} 
                                <TextField  
                                    className="login-input"  
                                    type="password"                                  
                                    id="outlined-basic" 
                                    label="Password" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Contraseña" 
                                    error={false} 
                                    onChange={handlePasswordChange}/>
                                      <br></br>
                                    <span className="login-forgot"><a className="login-a" href="#">¿Olvidaste tu contraseña?</a></span>
                       

                                <Button onClick={authenticate} variant="outlined" className="" >
                                    Ingresar
                                </Button>
                                
                            </FormControl>
                        </form>
                    </CardContent>
                    
                </Card>
            </div>
        </>
    );
}
export default LoginComponent;