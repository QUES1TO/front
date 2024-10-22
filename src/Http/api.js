const BASE_URL = process.env.REACT_APP_BASE_URL;


const httpPostRequest = (apiRoute,body,json=true,token='') => {
    let headers = {}
    if(json==true)
    {
        headers = {
            'Content-Type':'application/json'
        }
        if (token != '')
        {
            headers = {
                'Content-Type':'application/json',
                'Authorization' : 'Bearer '+ token
            };
        }
    }

    return fetch(`${BASE_URL}${apiRoute}`,{
        method: 'POST',
        headers: headers,
        body:body        
    })
}

const httpDeleteRequest = (apiRoute, token = '') => {
    let headers = {
      'Content-Type': 'application/json'
    };
  
    if (token !== '') {
        headers = {
            'Content-Type':'application/json',
            'Authorization' : 'Bearer '+ token
        };
    }
  
    return fetch(`${BASE_URL}${apiRoute}`, {
      method: 'DELETE',
      headers: headers
    });
  };
  


const httpGetRequest = (apiRoute,params,token='') => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${BASE_URL}${apiRoute}?${queryParams}`
    let headers = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '+ token
    };
    if (token == '')
    {
        headers = {
            'Content-Type' : 'application/json'
        };
    }

    return fetch(url,{
        method: 'GET',
        headers: headers
    });
}


const login = (email,password) => {
    const body = JSON.stringify({
        email: email,
        password: password
    });
    return httpPostRequest('/api/user/login',body);
}

const signUp = (name,email,password) => {
    const body = JSON.stringify({
        name: name,
        email: email,
        password: password
    });
    return httpPostRequest('/api/user/signUp',body);
}
const guardarproducto = (data) =>{

    
    return httpPostRequest('/api/producto',data,false);
}

const guardarRepuesto = (data) =>{

    
    return httpPostRequest('/api/repuesto',data,false);
}


const productoo = (nombre,cc,modelo,marca,url_imagen,stock,descripcion,precio,categoria_id) => {
    const body = JSON.stringify({
        nombre: nombre,
        cc: cc,
        modelo: modelo,
        marca: marca,
        url_imagen: url_imagen,
        stock: stock,
        descripcion: descripcion,
        precio: precio,
        categoria_id: categoria_id
    });
    return httpPostRequest('/api/producto',body);
}

const productoData = (id_categoria) => {
    return httpGetRequest('/api/product',{id_categoria:id_categoria});
}

const productoData2 = () => {
    return httpGetRequest('/api/product2',{});
}


const repuestoData = (id_categoria) => {
    return httpGetRequest('/api/repuesto',{id_categoria:id_categoria});
}

const repuestoData2 = () => {
    return httpGetRequest('/api/repuesto2',{});
}




const CategoryData = () => {
    return httpGetRequest('/api/categoria',{});
}

const UserEdit = (id) => {
    return  httpGetRequest("/api/user/"+id,{});
 }
 const userData = () => {
    return httpGetRequest('/api/user/data',{});
}
const saveUser = (body) => {
    return httpPostRequest('/api/user',body);
}


const saveProductData = (body,id) =>{
    return httpPostRequest('/api/producto/'+id,body,false);
}

const addToCart = (carito_id,amount,producto_id,token) => {
    const body = JSON.stringify({
        amount: amount,
        producto_id: producto_id,
        id: carito_id
    });
    return httpPostRequest('/api/carito',body,true,token);    
}

const addToCarito = (carito_id,amount,repuesto_id,token) => {
    const body = JSON.stringify({
        amount: amount,
        repuesto_id: repuesto_id,
        id: carito_id
    });
    return httpPostRequest('/api/carito2',body,true,token);    
}

const editProductData = (body,id) =>{
    return httpPostRequest('/api/producto/'+id,body,false);
}
const deleteProductData = (id) => {
    return httpDeleteRequest(`/api/producto/${id}`,{});
  };
  
  const selectData = (id_seleccionado) => {
    return httpGetRequest('/api/carito/'+id_seleccionado,{});
}
const caritoData = () => {
    return httpGetRequest('/api/carito',{});
}

const api = {
    productoo:productoData,
    login:login,
    userData:userData,
    signUp:signUp,
    productoData:productoData,
    productoData2:productoData2,
    repuestoData:repuestoData,
    repuestoData2:repuestoData2,
    CategoryData:CategoryData,
    saveUser:saveUser,
    UserEdit:UserEdit,
    addToCart:addToCart,
    addToCarito:addToCarito,
    saveProductData:saveProductData,
    guardarproducto:guardarproducto,
    guardarRepuesto:guardarRepuesto,
    editProductData:editProductData,
    deleteProductData:deleteProductData,
    selectData:selectData,
    caritoData:caritoData,
};
export default api;