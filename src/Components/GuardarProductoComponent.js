import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import main from '../img/eh.avif';  // Ruta a la imagen de fondo


const GuardarProductComponent = ({
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
      
    return (
        <>
        <body className="main">

        <img className='main-imagee' src={main} alt="Background" />
          
            <div className="">

            <Card id="crearproducto">
    <CardContent>
        <h1 className="crear-producto-title">Crear Producto</h1>
        <form>
            <FormControl className="custom-table">
                <TextField  
                    className="login-input nombre-input"                                   
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    placeholder="Introduzca el nombre del producto" 
                    onChange={handleNombreChange}
                />
                
                <TextField  
                    className="login-input calidad-input"                                   
                    id="outlined-basic" 
                    label="primera sergunda" 
                    variant="outlined" 
                    placeholder="Introduzca calidad"                                  
                    onChange={handleCalidadChange}
                />
                
                <TextField  
                    className="login-input modelo-input"                         
                    id="outlined-basic" 
                    label="Modelo" 
                    variant="outlined" 
                    placeholder="Introduzca el modelo de año" 
                    onChange={handleModeloChange}
                />
                
                <TextField  
                    className="login-input lado-input"                                 
                    id="outlined-basic" 
                    label="frente atras lateral" 
                    variant="outlined" 
                    placeholder="¿A qué lado del auto pertenece?" 
                    onChange={handleLadoChange}
                />
                
                <TextField  
                    className="login-input imagen-input"  
                    type="file"                                
                    id="outlined-basic" 
                    variant="outlined" 
                    placeholder="Imagen" 
                    onChange={handleUrlImagenChange}
                />
                
                <TextField  
                    className="login-input stock-input"  
                    id="outlined-basic" 
                    label="Stock" 
                    variant="outlined" 
                    placeholder="Escriba el número de stock" 
                    onChange={handleStockChange}
                />
                
                <TextField  
                    className="login-input descripcion-input"                             
                    id="outlined-basic" 
                    label="Descripción" 
                    variant="outlined" 
                    placeholder="Introduzca la descripción" 
                    onChange={handleDescripcionChange}
                />
                
                <TextField  
                    className="login-input precio-input"                             
                    id="outlined-basic" 
                    label="Precio" 
                    variant="outlined" 
                    placeholder="Escriba el precio" 
                    onChange={handlePrecioChange}
                />
                
                <TextField  
                    className="login-input tipo-input"                             
                    id="outlined-basic" 
                    label="Marca de auto" 
                    variant="outlined" 
                    placeholder="Introduzca el tipo" 
                    onChange={handleChangeCategoria}
                />
                
                
            </FormControl>
        </form>
        
    </CardContent>
</Card>

            </div>
          
               
                    <button onClick={handleSaveData} variant="outlined"  className="add-user-button">CREAR PRODUCTO</button>
                    
            </body>
        </>
    );
}
export default GuardarProductComponent;