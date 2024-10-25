import './App.css';
import { useState ,useEffect} from 'react';
import FirstController from './ComponentControllers/FirstComponentController';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import LoginController from './ComponentControllers/LoginComponentController';
import MainComponentController from './ComponentControllers/MainComponentController';
import MainComponentController2 from './ComponentControllers/MainComponentController2';
import SideBarComponentController from "./ComponentControllers/SideBarComponentController";
import EditProductComponentController from "./ComponentControllers/EditProductComponentController";
import ProfileComponentController from "./ComponentControllers/ProfileComponentController";
import GuardarComponentController from "./ComponentControllers/GuardarComponentController";
import GuardarProductoComponentController from "./ComponentControllers/GuardarProductoComponentController";
import ListSelectComponentController from "./ComponentControllers/ListSelectComponentController";
import MarcaComponentController from "./ComponentControllers/MarcaComponentController";
import MainComponentController3 from './ComponentControllers/MainComponentController3';
import InicioComponentController from "./ComponentControllers/InicioComponentController";
import NosotrosComponentController from "./ComponentControllers/NosotrosComponentController";
import ProductoComponentController from "./ComponentControllers/ProductoComponentController";
import NoticiasComponentController from "./ComponentControllers/NoticiasComponentController";

import auth from "./Auth/auth";
const App = () => {
  const [authenticated,setAuthenticated] = useState(false);
  useEffect( ()=>{
    const authenticationData = auth();
    if(authenticationData!=null)
    {
      setAuthenticated(true);
    }
  },[]);

  const loginTarget = () => {
    var userAuthenticated = auth();
    var currentRoute = localStorage.getItem("current_route");
    return(userAuthenticated!=null? <Navigate to={currentRoute}/>:<LoginController setAuthenticated={setAuthenticated}/>);
  }
  const PrivateRoutes = () => {
    const isAuthenticated = auth();
    const { pathmane } = useLocation();
    useEffect(() => {
      if(auth()==null)
      {
        setAuthenticated(false);
      }
    },[pathmane]);
    return (
      isAuthenticated!=null ? <Outlet/> : <Navigate to= "/login" replace/>
    )
  }
  const PrivateSellerRoutes = () => {
    const isAuthenticated = auth();
    const { pathmane } = useLocation();
    useEffect(() => {
      if(auth()==null)
      {
        setAuthenticated(false);
      }
      
    },[pathmane]);
    if(auth()==null)
    {
      return (
        <Navigate to="login" replace/>
      )
    }else{
      return (
        isAuthenticated.role=="Seller" || isAuthenticated.role=="Admin" ? <Outlet/> : <Navigate to= "/home" replace/>
      )
    }
    
  }
  return (
    <>
    <Router>
      <div className="main-container">
        <SideBarComponentController authenticated={authenticated}/>
        <Routes>
        <Route path='/inicio' Component={InicioComponentController}/>
        <Route path='/nosotros' Component={NosotrosComponentController}/>
        <Route path='/productos' Component={ProductoComponentController}/>
        <Route path='/noticias' Component={NoticiasComponentController}/>
          <Route path='/' element={<Navigate to="/home"/>}/>  
          <Route path='/produo' Component={MarcaComponentController}/> 
          <Route path='/login' Component={loginTarget}/> 
            
          <Route element={<PrivateRoutes/>}>
            <Route path='/home' Component={MainComponentController}/>   
           
            <Route path='/edit/:id' Component={EditProductComponentController}/>
            <Route path='/perfil' Component={ProfileComponentController}/>
            <Route path='/produco' Component={MainComponentController2}/>
            <Route path='/listSelect' Component={ListSelectComponentController}/>
            <Route path='/home3' Component={MainComponentController3}/>
          </Route>    
          <Route path='/guardar' Component={GuardarComponentController}/> 
          <Route path='/nuevoproducto' Component={GuardarProductoComponentController}/>
          
          <Route element={<PrivateSellerRoutes/>}>
             
            
            
          </Route>          
        </Routes>
      </div>
    </Router>
       
    </>
  );
}

export default App;
