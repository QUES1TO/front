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
    const [productNameValue,setProductNameValue]= useState(row.product_name);
    const [previewImageValue,setPreviewImageValue]= useState(storageUrl+row.product_url_image);
    const [productUrlImageValue,setProductUrlImageValue]= useState(null);
    const [productStockValue,setProductStockValue] = useState(row.product_stock);
    const [productPriceValue,setProductPriceValue] = useState(row.product_price);
    const [categoryList,setCategoryList] = useState([]);
    const [CategoriaId, setCategoriaId] = useState(row.categoria_id);
    
    console.log(row);
    
    
    const handleProductNameChange = (e) =>{
        console.log(e.target.value);
        setProductNameValue(e.target.value);
    }
    const handleProductStockChange = (e) =>{
        console.log(e.target.value);
        setProductStockValue(e.target.value);
    }
    const handleProductPriceChange = (e) =>{
        console.log(e.target.value);
        setProductPriceValue(e.target.value);
    }
    const handleChangeCategoryId = (e) => {
        setCategoriaId(e.target.value);
      };
      const handleUrlImageChange = (newValue) => {        
        const objectUrl = URL.createObjectURL(newValue)
        setPreviewImageValue(objectUrl);
        setProductUrlImageValue(newValue);
      }
    const handleSaveData = () => {
        const formData = new FormData();        
        formData.append('product_url_image', productUrlImageValue);
        formData.append('product_name',productNameValue);
        formData.append('product_price', productPriceValue);
        formData.append('product_stock', productStockValue);
        formData.append('categoria_id', CategoriaId);
        formData.append('_method', 'put');
        api.saveProductData(formData,row.id)
            .then(response=>{
                return response.json();
            })
            .then(json=>{
                if(json.code=200)
                {
                    navigate("/home");
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
                setCategoryList(row);
            }).catch(response=>{
                console.log(response);
            });
      },[]); 
    /*const authenticate = () =>{
        const response = api.login(emailValue,passwordValue)
            .then(response =>{
                return response.json()
            }).then(json=>{
                procesarRespuesta(json);
            }).catch(response=>{
                console.log(response);
            });
    }*/
    /*const procesarRespuesta = (json) => {
        console.log(json);
        if(json.code==422)
        {
            if('email' in json.body[0])
            {
                setmailErrorState(true);
                setEmailErrorMessage(json.body[0].email[0]);
            }
        }
        if(json.code==200)
        {
                      
        }
    }*/

    return (
       <>
        <EditProductComponent
        productNameValue={productNameValue}
        handleProductNameChange={handleProductNameChange}
        productStockValue={productStockValue}
        handleProductStockChange={handleProductStockChange}
        productPriceValue={productPriceValue}
        handleProductPriceChange={handleProductPriceChange}
        previewImageValue={previewImageValue}
        handleUrlImageChange={handleUrlImageChange}
        categoryList={categoryList}
        CategoriaId={CategoriaId}
        handleChangeCategoryId={handleChangeCategoryId}
        handleSaveData={handleSaveData}/>
       </>
    );
}
export default EditProductComponentController;