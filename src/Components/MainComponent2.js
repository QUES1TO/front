import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import CarIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SideBarComponentController from "../ComponentControllers/SideBarComponentController";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import { FormHelperText, TextField } from "@mui/material";
const MainComponent2 = ({data,handleOpen,handleClose,open,selectedProductName,handleProductAmount,addToCart}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  console.log(selectedProductName);
    return (
        <>
            
                <div className="main-body">
                {data.map((row) => (
                    <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={row.product_name}
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={`http://localhost:8000/storage/${row.product_url_image}`}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" onClick={()=>handleOpen(row)}>
                        <CarIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>        
                    </CardActions>
                    
                  </Card>
                ))}
                
                    
                </div>  
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                     <Box sx={style}>
                      <h1>{selectedProductName}</h1>
                     <form>
                            <FormControl className="login-form-control">
                                <TextField  
                                type="Number"
                                    className="login-input"                                   
                                    id="outlined-basic" 
                                    label="Cantidad" 
                                    variant="outlined" 
                                    placeholder="Cantidad" 
                                    onChange={handleProductAmount}
                                    />
                                                                    
                                <Button onClick={addToCart} variant="outlined" >
                                    Añadir al carrito
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                  </Modal>
                {localStorage.setItem("current_route","/home2")}          
        </>
    );
}
export default MainComponent2;