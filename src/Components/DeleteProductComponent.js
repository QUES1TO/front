import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import main from '../img/eh.avif';  // Ruta a la imagen de fondo
const DeleteProductComponent = ({ handleDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmDelete = () => {
    handleDelete();
    handleClose();
  };

  return (
    <div>
        <img className='main-image' src={main} alt="Background" />
      <Card variant="outlined" sx={{ maxWidth: 400, margin: "auto",  }}>
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Eliminar Producto
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ marginBottom: 2 }}>
            ¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.
          </Typography>
          <Button onClick={handleClickOpen} variant="contained" color="error" startIcon={<DeleteIcon />} fullWidth>
            Eliminar Producto
          </Button>
        </CardContent>
      </Card>

      {/* Diálogo de confirmación */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmDelete} color="error">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteProductComponent;
