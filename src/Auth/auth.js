const auth = () => {
    const datosConExpiracion = JSON.parse(localStorage.getItem("token"));
    if(datosConExpiracion!=null)
    {
        const now = new Date();
        const expirationTime = new Date(datosConExpiracion.expiracion);
        if(now > expirationTime)
        {
            localStorage.removeItem("token");
        }
        else{
            return datosConExpiracion;
        }
    }
    else{
        return null;
    }
}
export default auth;