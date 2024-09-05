import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from "react-pro-sidebar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
const SideBarComponent = ({changeCollapse,collapsed,authenticated}) => {
    const navigate = useNavigate();
    return (
        <>
            { authenticated && <Sidebar
            collapsed={collapsed}
            rootStyles={{
                height:'inherit',
                [`.${sidebarClasses.container}`]:{
                    overflowX:'visible',
                    overflowY:'visible'
                },
                padding:'0px'
            }}
            >               
                <div className="bar-main-container">
                    <IconButton aria-label="menu" onClick={changeCollapse}>
                        <MenuIcon/>
                    </IconButton>
                    <div className="bar-second-container">
                        <Menu className="side-bar-menu">
                            <h1>Mi primer menu</h1>
                            <SubMenu
                            label="Primer texto sub menu"
                            icon={<AdUnitsIcon/>}>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem onClick={()=>{navigate("/home")}}>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem onClick={()=>{navigate("/home2")}}>Item numero 2</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1<Badge badgeContent={8} color="error"/></MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                            <SubMenu>
                                <h1>Mi primer sub menu</h1>
                                <MenuItem>Item numero 1</MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
            </Sidebar>}
        </>
    );
}
export default SideBarComponent;