import React, { useState, useEffect } from "react";
import MarcaComponent from "../Components/MarcaComponent";
import api from "../Http/api";
import auth from "../Auth/auth";
const MarcaComponentController = () => {
    const authenticationData = auth();
    const [userData,setUserData] = useState(authenticationData);
    
    return (
        <>
        <MarcaComponent
        userData={userData}/>
        </>
    );
}
export default MarcaComponentController;