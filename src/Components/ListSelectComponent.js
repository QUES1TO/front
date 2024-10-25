import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, HeadingLevel, Table, TableRow, TableCell, WidthType } from "docx";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import main from '../img/eh.avif'; // Ruta a la imagen de fondo

function ListSelectComponent({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    total: "", 
    productos: "", // Cambié description a productos
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWordDocument = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Glass Mar", 
              heading: HeadingLevel.TITLE,
              alignment: "center",
              thematicBreak: true,
            }),
            new Paragraph({
              text: "Factura de Venta",
              heading: HeadingLevel.HEADING_1,
              alignment: "center",
              thematicBreak: true,
            }),
            new Paragraph({
              text: `Fecha: ${new Date().toLocaleDateString()}`, 
              alignment: "right",
            }),
            new Paragraph({
              text: "Información del Cliente",
              heading: HeadingLevel.HEADING_2,
              thematicBreak: true,
            }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Nombre de cliente:")],
                      width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                      children: [new Paragraph(formData.name || "No especificado")],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Dirección:")],
                      width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                      children: [new Paragraph(formData.email || "No especificado")],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Celular:")],
                      width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                      children: [new Paragraph(formData.phone || "No especificado")],
                    }),
                  ],
                }),
              ],
            }),
            new Paragraph({
              text: "Total: " + (formData.total || "No especificado"),
              alignment: "right",
              thematicBreak: true,
            }),
            new Paragraph({
              text: "Productos:",
              heading: HeadingLevel.HEADING_2,
              thematicBreak: true,
            }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Productos")],
                      width: { size: 70, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                      children: [new Paragraph("Cantidad")],
                      width: { size: 30, type: WidthType.PERCENTAGE },
                    }),
                  ],
                }),
                ...(formData.productos.split('\n').map((item, index) => (
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph(item || "No especificado")],
                      }),
                      new TableCell({
                        children: [new Paragraph("1")], // Cambia esto según tu lógica
                      }),
                    ],
                  })
                ))),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "factura_venta.docx");
  };

  const total = data.length > 0 ? data[0].total : "";

  React.useEffect(() => {
    setFormData((prevData) => ({ ...prevData, total }));
  }, [total]);

  return (
    <div>
      <img className='main-image' src={main} alt="Background" />
      <Box className="form-container">
        <Typography variant="h4" align="center" gutterBottom>
          Formulario de información de venta
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Llene el formulario
        </Typography>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Nombre de cliente"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Dirección"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-field"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Celular"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-field"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Total"
                variant="outlined"
                fullWidth
                name="total"
                value={formData.total}
                onChange={handleChange}
                className="form-field"
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Productos (separar por línea)"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="productos" // Cambié el nombre aquí a productos
                value={formData.productos} // Cambié a productos
                onChange={handleChange}
                className="form-field"
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={generateWordDocument}
                className="submit-button"
              >
                Generar Documento Word
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default ListSelectComponent;
