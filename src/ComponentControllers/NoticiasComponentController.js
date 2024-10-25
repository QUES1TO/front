import React, { useState, useEffect } from "react";
import NoticiasComponent from "../Components/NoticiasComponent";
import api from "../Http/api";
const NoticiasComponentController = () => {
    const [data, setData] = useState([]);
    useEffect( ()=>{
       
      },[]);
    return (
        <>
        <NoticiasComponent
        data={data}/>
        </>
    );
}
export default NoticiasComponentController;