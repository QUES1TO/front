import React from "react";
function FirstComponent({primerRef,cambio,valorTitulo})
{
    return(
        <>
        <h1 >{valorTitulo}</h1>
        <input onChange={cambio} ref={primerRef} type="text"/>
        </>
    );
}

export default FirstComponent;