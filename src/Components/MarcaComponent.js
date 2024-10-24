import React from "react";
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import toyota from '../img/toyota.png';  
import suzuki from '../img/suzuki.png';
import bmw from '../img/bmw.png';
import nissan from '../img/nissan.png';
import ford from '../img/ford.png';
import jac from '../img/jac.png';
import honda from '../img/honda.png';
import fiat from '../img/fiat.png';
import jeep from '../img/jeep.svg';
import renault from '../img/renault.png';
import chebro from '../img/chebro.png';
import changan from '../img/changan.png';
import subaru from '../img/subaru.png';
import foton from '../img/foton.png';
import chery from '../img/chery.png';
import main from '../img/eh.avif';  // Ruta a la imagen de fondo

// Contenedor principal
const MainContainer = styled('div')({
    display: 'flex',
    padding: '20px',
    background: `url(${main}) no-repeat center center fixed`, // Establece la imagen de fondo
    backgroundSize: 'cover', // Ajusta la imagen para cubrir el área
    minHeight: '100vh', // Asegura que el contenedor cubra al menos la altura de la ventana
});

// Contenedor para la barra de búsqueda y la barra de bienvenida
const LeftContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    marginRight: '20px',
});

// Barra de bienvenida
const WelcomeBar = styled('div')({
    backgroundColor: 'rgba(0, 123, 255, 0.8)', // Agrega opacidad para mayor contraste
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
});

// Barra de búsqueda
const SearchBar = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px', // Margen para separar de las marcas
});

// Contenedor de las marcas
const MarcaContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columnas por fila
    justifyContent: 'center',
    gap: '20px',
    flex: 1,
    '@media (max-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)', // 2 columnas en pantallas medianas
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: 'repeat(1, 1fr)', // 1 columna en pantallas pequeñas
    }
});

// Estilo para cada botón de marca
const MarcaButton = styled('button')({
    display: 'flex',
    flexDirection: 'row', // Cambia a fila
    alignItems: 'center', // Centra verticalmente el contenido
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.1)',
    },
});

// Estilo para las imágenes de las marcas
const MarcaImage = styled('img')({
    width: '100px',
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo blanco semitransparente
    borderRadius: '5px', // Bordes redondeados
    padding: '5px', // Espacio alrededor de la imagen
});


// Estilo para el número de la marca
const MarcaNumber = styled('span')({
    marginLeft: '10px', // Espacio a la izquierda del número
    fontSize: '16px',
    fontWeight: 'bold',
    color:'white',
});

const MarcaComponent = ({ userData }) => {
    const navigate = useNavigate();

    // Lista de marcas
    const marcas = [
        { src: toyota, alt: 'Toyota', route: '/produco' },    // 1
        { src: suzuki, alt: 'Suzuki', route: '/suzuki' },    // 2
        { src: bmw, alt: 'BMW', route: '/bmw' },              // 3
        { src: nissan, alt: 'Nissan', route: '/nissan' },    // 4
        { src: ford, alt: 'Ford', route: '/ford' },          // 5
        { src: jac, alt: 'Jac', route: '/jac' },              // 6
        { src: honda, alt: 'Honda', route: '/honda' },        // 7
        { src: fiat, alt: 'Fiat', route: '/fiat' },           // 8
        { src: jeep, alt: 'Jeep', route: '/jeep' },           // 9
        { src: renault, alt: 'Renault', route: '/renault' },  // 10
        { src: changan, alt: 'Changan', route: '/changan' },  // 11
        { src: chebro, alt: 'Chebro', route: '/chebro' },     // 12
        { src: subaru, alt: 'Subaru', route: '/subaru' },     // 13
        { src: foton, alt: 'Foton', route: '/foton' },        // 14
        { src: chery, alt: 'Chery', route: '/chery' }         // 15
    ];

    return (
        <MainContainer>
            {/* Contenedor a la izquierda con la barra de búsqueda */}
            <LeftContainer>
                <SearchBar>
                    <input type="text" placeholder="Buscar marca..." />
                </SearchBar>
            </LeftContainer>

            <MarcaContainer>
            <WelcomeBar
                    style={{
                        backgroundColor: '#750808',
                        color: 'white',
                        padding: '20px',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Arial, sans-serif',
                        width: '300%',
                        maxWidth: '1000px',
                    }}
                >
                    ¡Bienvenido! Elige una marca para obtener más información.
                </WelcomeBar>
                <p></p><p></p>
                {marcas.map((marca, index) => (
                    <div key={index} onClick={() => navigate(marca.route)}>
                        <MarcaButton>
                            <MarcaImage src={marca.src} alt={marca.alt} />
                            <MarcaNumber>{index + 1}</MarcaNumber> {/* Muestra el número de la marca */}
                        </MarcaButton>
                    </div>
                ))}
            </MarcaContainer>

            <button className="add-user-button" onClick={() => navigate("/nuevoproducto")}>
                AGREGAR NUEVO PRODUCTO
            </button>
        </MainContainer>
    );
}

export default MarcaComponent;
