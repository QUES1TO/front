import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent3 from "../Components/MainComponent3";
import api from "../Http/api";
import auth from "../Auth/auth";
const createData = (id,nombre,cc,modelo,marca,url_imagen,stock,descripcion,precio,categoria_id) => {
    return {id,nombre,cc,modelo,marca,url_imagen,stock,descripcion,precio,categoria_id};
}
const MainComponentController3 = () => {
    const authenticationData = auth();

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect( ()=>{
        api.productoData2()
            .then(response =>{
                return response.json()
            }).then(json=>{
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                setData(row);
            }).catch(response=>{
                console.log(response);
            });
      },[]);    
      const handleEdit = (row) => {
        console.log("Estamos aqui");
        navigate("/edit/"+row.id, { state: row});
    }
    const handleDelete = (row) => {
        
        navigate("/delete/"+row.id, { state: row});
    }
    return (
        <>
        <MainComponent3
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}/>
        </>
    );
}
export default MainComponentController3;

