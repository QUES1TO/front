// DeleteProductComponentController.js

import React from "react";
import api from '../Http/api';
import { useNavigate, useLocation } from "react-router-dom";
import DeleteProductComponent from '../Components/DeleteProductComponent';

const DeleteProductComponentController = () => {
    const navigate = useNavigate();
    const history = useLocation();
    const row = history.state;

    const handleDelete = () => {
        api.deleteProductData(row.id)
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.code === 200) {
                    navigate("/home3");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
  
    return (
        <DeleteProductComponent
         handleDelete={handleDelete} />
    );
}

export default DeleteProductComponentController;
