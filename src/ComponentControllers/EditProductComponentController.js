import React,{useRef,useState,useEffect} from "react";
import LoginComponent from "../Components/LoginComponent";
import api from '../Http/api';
import { useNavigate, useLocation } from "react-router-dom";
import EditProductComponent from '../Components/EditProductComponent';

const EditProductComponentController = ({setAuthenticated}) => { 

    const storageUrl =process.env.REACT_APP_BASE_URL + process.env.REACT_APP_STORAGE_URL 
    const navigate = useNavigate();
    const history = useLocation();
    const row = history.state;
    const [nombreValue,setNombreValue]= useState(9);
    const [previewImagenValue,setPreviewImagenValue]= useState();
    const [urlImagenValue,setUrlImagenValue]= useState(storageUrl.url_image);
    const [calidadValue,setCalidadValue] = useState();
    const [modeloValue,setModeloValue] = useState();
    const [ladoValue,setLadoValue] = useState();
    const [stockValue,setStockValue] = useState();
    const [descripcionValue,setDescripcionValue] = useState();
    const [precioValue,setPrecioValue] = useState();

    const [CategoriaList,setCategoriaList] = useState([]);
    const [categoriaId, setCategoriaId] = useState();

    console.log(row);
    
    
    const handleNombreChange = (e) =>{
        console.log(e.target.value);
        setNombreValue(e.target.value);
    }
    
    const handleCalidadChange = (e) =>{
        console.log(e.target.value);
        setCalidadValue(e.target.value);
    }
    const handleModeloChange = (e) =>{
        console.log(e.target.value);
        setModeloValue(e.target.value);
    }
    const handleLadoChange = (e) =>{
        console.log(e.target.value);
        setLadoValue(e.target.value);
    }
    const handleStockChange = (e) =>{
        console.log(e.target.value);
        setStockValue(e.target.value);
    }
    const handleDescripcionChange = (e) =>{
        console.log(e.target.value);
        setDescripcionValue(e.target.value);
    }
    const handlePrecioChange = (e) =>{
        console.log(e.target.value);
        setPrecioValue(e.target.value);
    }
    
    
    const handleChangeCategoria = (e) => {
        setCategoriaId(e.target.value);
      };
      

      const handleUrlImagenChange = (newValue) => {        
        //const objectUrl = URL.createObjectURL(newValue)
        const image = newValue.target.files[0];
        setPreviewImagenValue(image);
        setUrlImagenValue(image);
      }
    const handleSaveData = () => {
        const formData = new FormData();        
        formData.append('url_imagen',urlImagenValue);
        formData.append('nombre',nombreValue);
        formData.append('calidad', calidadValue);
        formData.append('modelo', modeloValue);
        formData.append('lado', ladoValue);
        formData.append('stock', stockValue);
        formData.append('descripcion', descripcionValue);
        formData.append('precio', precioValue);
        formData.append('categoria_id', categoriaId);
        formData.append('_method', 'put');
        api.saveProductData(formData,row.id)
            .then(response=>{
                return response.json();
            })
            .then(json=>{
                if(json.code=200)
                {
                    navigate("/home3");
                }
            })
            .catch(response=>{
                console.log(response);
            });
    }
    useEffect( ()=>{
        api.CategoryData()
        .then(response =>{
            return response.json()
        }).then(json=>{
            const row = [];
            json.body.forEach(element => {
                row.push(element);
            });
            setCategoriaId(row);
        }).catch(response=>{
            console.log(response);
        });
      },[]); 
  

    return (
       
        <EditProductComponent
        handleNombreChange={handleNombreChange}
        handleCalidadChange={handleCalidadChange}
        handleModeloChange={handleModeloChange}
        handleStockChange={handleStockChange}
        handleLadoChange={handleLadoChange}
        handleDescripcionChange={handleDescripcionChange}
        handlePrecioChange={handlePrecioChange}
        previewImagenValue={previewImagenValue}
        handleUrlImagenChange={handleUrlImagenChange}
        handleChangeCategoria={handleChangeCategoria}
        handleSaveData={handleSaveData}
       />
    );
}
export default EditProductComponentController;