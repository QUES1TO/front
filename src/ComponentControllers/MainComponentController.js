import React, { useState, useEffect } from "react";
import MainComponent from "../Components/MainComponent";
import api from "../Http/api";
const createData = (id,nombre,email,password) => {
    return {id,nombre,email,password};
}
const MainComponentController = () => {
    const [data, setData] = useState([]);
    useEffect( ()=>{
        api.userData()
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

    return (
        <>
        <MainComponent
        data={data}/>
        </>
    );
}
export default MainComponentController;