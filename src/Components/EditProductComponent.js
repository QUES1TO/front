import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';
import { MuiFileInput } from "mui-file-input";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';
const EditProductComponent = ({productNameValue,
                            handleProductNameChange,
                            productStockValue,
                            handleProductStockChange,
                            productPriceValue,
                            handleProductPriceChange,
                            previewImageValue,
                            handleUrlImageChange,
                            categoryList,
                            CategoriaId,
                            handleChangeCategoryId,
                            handleSaveData}) => {
        
    return (
        <>
            <div className="card-container">
                <Card>
                    <CardContent>
                        <h1>Editar producto</h1>
                        <form>
                            <FormControl className="login-form-control">
                                <TextField  
                                    className="login-input"                                   
                                    id="outlined-basic" 
                                    label="Nombre de producto" 
                                    variant="outlined" 
                                    placeholder="Introduzca el nuevo nombre" 
                                    error={false} 
                                    value={productNameValue}
                                    onChange={handleProductNameChange}
                                    />
                                    
                                <TextField  
                                    className="login-input"  
                                    type="number"                                  
                                    id="outlined-basic" 
                                    label="Precio" 
                                    variant="outlined" 
                                    placeholder="Introduzca el nuevo precio" 
                                    error={false} 
                                    value={productPriceValue}
                                    onChange={handleProductPriceChange}
                                    />
                                <TextField  
                                    className="login-input"  
                                    type="number"                                  
                                    id="outlined-basic" 
                                    label="Stock" 
                                    variant="outlined" 
                                    placeholder="Introduzca el nuevo stock" 
                                    error={false} 
                                    value={productStockValue}
                                    onChange={handleProductStockChange}
                                    />
                                <Box className="login-input">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={CategoriaId}
                                        label="Age"
                                        onChange={handleChangeCategoryId}
                                        >
                                            {categoryList.map((row) => (
                                                <MenuItem value={row.id}>{row.nombre}</MenuItem>
                                            ))}
                                        
                                        </Select>
                                    </FormControl>
                                </Box>
                                    <img className="product-image-preview" src={previewImageValue}/>
                                    <MuiFileInput value={previewImageValue} onChange={handleUrlImageChange}/>
                                <Button  onClick={handleSaveData} variant="outlined" startIcon={<AirplanemodeInactiveIcon />}>
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
export default EditProductComponent;