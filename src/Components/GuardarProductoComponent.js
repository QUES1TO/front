
import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const GuardarProductComponent =({
    handleNombreChange,
    handleCalidadChange,
    handleModeloChange,
    handleStockChange,
    handleLadoChange,
    handleDescripcionChange,
    handlePrecioChange,
    previewImagenValue,
    handleUrlImagenChange,
    handleChangeCategoria,
    
    handleSaveData
    }) => {
        // const errorEmail = () => {
        //     return (
        //         emailErrorState && <FormHelperText error>
        //             {emailErrorMessage}
        //         </FormHelperText>
        //     );
        // }
      
        // const errorPassword = () => {
        //     return (
        //         passwordErrorState && <FormHelperText error>
        //             {passwordErrorMessage}
        //         </FormHelperText>
        //     );
        // }
    return (
        <>
        <body className="bodyproducto">

        
            <div className="">

                <Card id="crearproducto">
                    <CardContent>
                        <h1 className="h1crear">Crear Producto</h1>
                        <form>
                            <FormControl className="Guardar-form-control">
                                <TextField  
                                    className="login-input"                                   
                                    id="outlined-basic" 
                                    label="Nombre" 
                                    variant="outlined" 
                                    placeholder="Introduzca el nombre del producto" 
                                    
                                    onChange={handleNombreChange}/>
                                    
                                    <div>

                                    </div>
                                <TextField  
                                    className="login-input"                                   
                                    id="outlined-basic" 
                                    label="calidad" 
                                    variant="outlined" 
                                    placeholder="Introduzca calidad"                                  
                                    onChange={handleCalidadChange}/>
                                
                                    <div>

                                    </div>
                                <TextField  
                                    className="login-input"                         
                                    id="outlined-basic" 
                                    label="modelo" 
                                    variant="outlined" 
                                    placeholder="Introduzca el modelo de año" 
                                    onChange={handleModeloChange}/>
                                 
                                    <div>

                                    </div>

                                    <TextField  
                                    className="login-input"  
                                                                     
                                    id="outlined-basic" 
                                    label="lado" 
                                    variant="outlined" 
                                    placeholder="que lado del auto pertenese" 
                                    onChange={handleLadoChange}/>
                                 
                                    <div>

                                    </div>
                                 <TextField  
                                    className="login-input"  
                                    type="file"                                
                                    id="outlined-basic" 
                                  
                                    variant="outlined" 
                                    placeholder="imagen" 
                                    onChange={handleUrlImagenChange}/>
                                 
                                    
                                    <div>

                                    </div>
                                    <TextField  
                                    className="login-input"  
                                                                    
                                    id="outlined-basic" 
                                    label="stock" 
                                    variant="outlined" 
                                    placeholder="escriba el numero de stock" 
                                    onChange={handleStockChange}/>
                                 
                                    <div>


                                    </div>

                    
                                    <TextField  
                                    className="login-input"  
                                    //type="text"                               
                                    id="outlined-basic" 
                                    label="descripcion" 
                                    variant="outlined" 
                                    placeholder="Introduzca la descripcion" 
                                    onChange={handleDescripcionChange}/>
                                 
                                    <div>

                                    </div>
                                    <TextField  
                                    className="login-input"  
                                    //type="text"                               
                                    id="outlined-basic" 
                                    label="Precio" 
                                    variant="outlined" 
                                    placeholder="escriba el precio" 
                                    onChange={handlePrecioChange}/>
                                 
                                    <div>
                                    </div>
                                    <TextField  
                                    className="login-input"  
                                    //type="text"                               
                                    id="outlined-basic" 
                                    label="Tipo(pulsar,boxer)" 
                                    variant="outlined" 
                                    placeholder="Introduzca numero de tipo" 
                                    onChange={handleChangeCategoria}/>
                                 
                                    <div>

                                    </div>
                                    
                                <Button onClick={handleSaveData} variant="outlined" startIcon={<PeopleAltIcon />}>
                                    Crear producto
                                </Button>
                            </FormControl>
                        </form>
                    </CardContent>
                </Card>
            </div>
            </body>
        </>
    );
}
export default GuardarProductComponent;