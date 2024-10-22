import React, { useState, useEffect } from "react";
import ListSelectComponent from "../Components/ListSelectComponent";
import api from "../Http/api";
const createData = (id,total) => {
    return {id,total};
}
const ListSelectComponentController = () => {
    const [data, setData] = useState([]);
    useEffect( ()=>{
        api.caritoData()
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
        <ListSelectComponent
        data={data}/>
        </>
    );
}
export default ListSelectComponentController;