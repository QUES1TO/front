import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import LOGO from '../img/LOGO.png';  // Ruta a la imagen de fondo


const SideBarComponent = ({ changeCollapse, collapsed, authenticated }) => {
    const navigate = useNavigate();

    return (
        <>
        
            {authenticated && (
                <div className={`sidebar-container`} style={{ width: collapsed ? '80px' : '250px' }}>

                    
                    <div className="sidebar-title">-.-
        <img className='sidebar-logo' src={LOGO} alt="Background" />
        </div>
        
                    <Sidebar
                        collapsed={collapsed}
                        rootStyles={{
                            height: 'inherit',
                            [`.${sidebarClasses.container}`]: {
                                overflowX: 'visible',
                                overflowY: 'visible',
                                backgroundColor: 'inherit',
                            },
                        }}
                        
                    >
                        
                        <Menu>
                            <MenuItem icon={<HomeIcon />} onClick={() => navigate("/perfil")} className="sidebar-menu-item">
                                informacion
                            </MenuItem>
                            <MenuItem icon={<AdUnitsIcon />} onClick={() => navigate("/home")} className="sidebar-menu-item">
                                Usuarios
                            </MenuItem>
                            <MenuItem icon={<AdUnitsIcon />} onClick={() => navigate("/producto")} className="sidebar-menu-item">
                                Productos
                            </MenuItem>
                            <MenuItem icon={<AdUnitsIcon />} onClick={() => navigate("/inventario")} className="sidebar-menu-item">
                                Inventario
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
            )}
        </>
    );
};

export default SideBarComponent;
