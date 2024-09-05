import React, { useState, useEffect } from "react";
import ProfileComponent from "../Components/ProfileComponent";
import api from "../Http/api";
import auth from "../Auth/auth";
const ProfileComponentController = () => {
    const authenticationData = auth();
    const [userData,setUserData] = useState(authenticationData);
    
    return (
        <>
        <ProfileComponent
        userData={userData}/>
        </>
    );
}
export default ProfileComponentController;