import React, { useState, useEffect } from "react";
import MainComponent2 from "../Components/MainComponent2";
import api from "../Http/api";
import auth from "../Auth/auth";
const MainComponentController2 = () => {
    const authenticationData = auth();
    const [data, setData] = useState([]);
    const [selectedId,setSelectedId] = useState("");
    const [selectedProductName,setSelectedProductName] =useState("");
    const [selectedProductAmount,setSelectedProductAmount] = useState("");
    const [open, setOpen] = useState(false);
    
    useEffect( ()=>{
        api.productoData2(authenticationData.token)
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
      const handleOpen = (row) => 
      { 
        setOpen(true);
        setSelectedId(row.id);
        setSelectedProductName(row.nombre);
      }
      const handleClose = () => setOpen(false);
      const handleProductAmount = (e) => {
        setSelectedProductAmount(e.target.value);
      }
      const addToCart = () => {
        let currentCart = localStorage.getItem("carito_id"); 
        if(currentCart==null)
        {
            currentCart = 0;
        }        

        api.addToCart(currentCart,selectedProductAmount,selectedId,authenticationData.token)
            .then(response => {
                return response.json();
            }).
            then(json=>{
                procesarRespuesta(json);
            }).catch(response=>{
                console.log(response);
            });
      }
      const procesarRespuesta=(json)=>{
        if(json.code==201)
        {
            localStorage.setItem("carito_id",json.body.carito_id);
            handleClose();
        }
      }
    return (
        <>
        <MainComponent2
        data={data}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}        
        selectedProductName={selectedProductName}
        handleProductAmount={handleProductAmount}
        addToCart={addToCart}/>
        </>
    );
}
export default MainComponentController2;