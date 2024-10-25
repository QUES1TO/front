import React, { useState, useEffect } from "react";
import ProductoComponent from "../Components/ProductoComponent";
import api from "../Http/api";
import auth from "../Auth/auth";

const ProductoComponentController = () => {
    const authenticationData = auth();
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [selectedProductName, setSelectedProductName] = useState("");
    const [selectedProductAmount, setSelectedProductAmount] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(2); // Estado para la categoría seleccionada

    useEffect(() => {
        fetchProducts(selectedCategory); // Llama a la función para cargar productos
    }, [selectedCategory]);

    const fetchProducts = (category) => {
        api.productoData(category)
            .then(response => response.json())
            .then(json => {
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                setData(row);
            })
            .catch(response => {
                console.log(response);
            });
    };

    const handleOpen = (row) => {
        setOpen(true);
        setSelectedId(row.id);
        setSelectedProductName(row.nombre);
    };

    const handleClose = () => setOpen(false);
    
    const handleProductAmount = (e) => {
        setSelectedProductAmount(e.target.value);
    };

    const addToCart = () => {
        let currentCart = localStorage.getItem("carito_id");
        if (currentCart == null) {
            currentCart = 0;
        }

        api.addToCart(currentCart, selectedProductAmount, selectedId, authenticationData.token)
            .then(response => response.json())
            .then(json => {
                procesarRespuesta(json);
            })
            .catch(response => {
                console.log(response);
            });
    };

    const procesarRespuesta = (json) => {
        if (json.code == 201) {
            localStorage.setItem("carito_id", json.body.carito_id);
            handleClose();
        }
    };

    // Función para seleccionar la categoría
    const selectCategory = (categoryId) => {
        setSelectedCategory(categoryId); // Actualiza la categoría seleccionada
    };

    return (
        <>
            <ProductoComponent
                data={data}
                handleOpen={handleOpen}
                handleClose={handleClose}
                open={open}
                selectedProductName={selectedProductName}
                handleProductAmount={handleProductAmount}
                addToCart={addToCart}
                selectCategory={selectCategory} // Pasa la función de selección de categoría
            />
        </>
    );
};

export default ProductoComponentController;
