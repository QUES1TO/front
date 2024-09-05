import React, {useRef, useState} from "react";
import First from "../Components/FirstComponent";

const FirstComponentController = () => {
    const primerRef = useRef();
    const [valorTitulo,setValor]= useState("Hola desde variable reactiva!!");
    const cambio = () =>{
        console.log(primerRef.current.value);
        setValor(primerRef.current.value);
    }
    return (
        <>
        <First
        primerRef={primerRef}
        cambio={cambio}
        valorTitulo={valorTitulo}
        />
        </>
    );
}
export default FirstComponentController;