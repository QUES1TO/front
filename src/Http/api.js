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
const userData = () => {
    return httpGetRequest('/api/user/data',{});
}
const login = (email,password) => {
    const body = JSON.stringify({
        email: email,
        password: password
    });
    return httpPostRequest('/api/user/login',body);
}
const productData = (token) => {
    return httpGetRequest('/api/product',{},token);
}

const CategoryData = () => {
    return httpGetRequest('/api/categoria',{});
}
const saveProductData = (body,id) =>{
    return httpPostRequest('/api/product/'+id,body,false);
}
const addToCart = (cart_id,amount,product_id,token) => {
    const body = JSON.stringify({
        amount: amount,
        product_id: product_id,
        id: cart_id
    });
    return httpPostRequest('/api/cart',body,true,token);    
}
const signUp = (name,email,password,last_name,address) => {
    const body = JSON.stringify({
        name: name,
        email: email,
        password: password,
        last_name: last_name,
        address: address
    });
    return httpPostRequest('/api/user/signUp',body);
}
const api = {
    login:login,
    userData:userData,
    productData:productData,
    CategoryData:CategoryData,
    saveProductData:saveProductData,
    addToCart:addToCart,
    signUp:signUp
};
export default api;