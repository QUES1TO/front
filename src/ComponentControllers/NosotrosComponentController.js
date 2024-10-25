import React, { useState, useEffect } from "react";
import NosotrosComponent from "../Components/NosotrosComponent";
import api from "../Http/api";
const createData = (id,nombre,email,password) => {
    return {id,nombre,email,password};
}
const NosotrosComponentController = () => {
    const [data, setData] = useState([]);
    useEffect( ()=>{
        api.login()
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
        <NosotrosComponent
        data={data}/>
        </>
    );
}
export default NosotrosComponentController;