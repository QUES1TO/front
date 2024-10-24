import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import LOGO from '../img/LOGO.png';  // Ruta a la imagen de fondo
import HomeIcon from '@mui/icons-material/Home';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory'; // Importar ícono para inventario

const SideBarComponent = ({ changeCollapse, collapsed, authenticated }) => {
    const navigate = useNavigate();

    return (
        <>
            {authenticated && (
                <div className={`sidebar-container`} style={{ width: collapsed ? '80px' : '250px' }}>
                    <div className="sidebar-title">
                        <img className='sidebar-logo' src={LOGO} alt="Logo" />
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
                                Información
                            </MenuItem>
                            <MenuItem icon={<AccountCircleIcon />} onClick={() => navigate("/home")} className="sidebar-menu-item">
                                Usuarios
                            </MenuItem>
                            <MenuItem icon={<StoreIcon />} onClick={() => navigate("/producto")} className="sidebar-menu-item">
                                Productos
                            </MenuItem>
                            <MenuItem icon={<InventoryIcon />} onClick={() => navigate("/home3")} className="sidebar-menu-item">
                                Inventario
                            </MenuItem>
                            <MenuItem icon={<AdUnitsIcon />} onClick={() => navigate("/inventario/gestionar")} className="sidebar-menu-item">
                                Gestionar Inventario
                            </MenuItem>
                            <MenuItem icon={<ShoppingCartIcon />} onClick={() => navigate("/listSelect")} className="sidebar-menu-item">
                                Carrito
                            </MenuItem>
                            <MenuItem icon={<AdUnitsIcon />} onClick={() => navigate("/inventario/reportes")} className="sidebar-menu-item">
                                Reportes de Inventario
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
            )}
        </>
    );
};

export default SideBarComponent;
