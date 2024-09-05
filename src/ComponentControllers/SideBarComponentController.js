import React, {useState} from "react";
import SideBarComponent from "../Components/SideBarComponent";
const SideBarComponentController = ({authenticated}) => {
    const [collapsed,setCollapsed] = useState(false);
    const changeCollapse = () => {
        setCollapsed(!collapsed)
    }
    return (
        <SideBarComponent
        changeCollapse={changeCollapse}
        collapsed={collapsed}
        authenticated={authenticated}
        />
    );
}
export default SideBarComponentController;