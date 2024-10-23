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

// Contenedor principal
const MainContainer = styled('div')({
    display: 'flex',
    padding: '20px',
    backgroundColor: '#f5f5f5',
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
    backgroundColor: '#007BFF',
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
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.1)',
    }
});

// Estilo para las imágenes de las marcas
const MarcaImage = styled('img')({
    width: '100px',
    height: 'auto',
});

const MarcaComponent = ({ userData }) => {
    const navigate = useNavigate();

    // Lista de marcas
    const marcas = [
        { src: toyota, alt: 'Toyota' },
        { src: suzuki, alt: 'Suzuki' },
        { src: bmw, alt: 'BMW' },
        { src: nissan, alt: 'Nissan' },
        { src: ford, alt: 'Ford' },
        { src: jac, alt: 'Jac' },
        { src: honda, alt: 'Honda' },
        { src: fiat, alt: 'Fiat' },
        { src: jeep, alt: 'Jeep' },
        { src: renault, alt: 'Renault' },
        { src: changan, alt: 'Changan' },
        { src: chebro, alt: 'Chebro' },
        { src: subaru, alt: 'Subaru' },
        { src: foton, alt: 'Foton' },
        { src: chery, alt: 'Chery' }
    ];

    return (
        <MainContainer>
            {/* Contenedor a la izquierda con la barra de búsqueda */}
            <LeftContainer>
                {/* Barra de bienvenida encima de la barra de búsqueda */}
                <WelcomeBar>
                    ¡Bienvenido! Elige una marca para obtener más información.
                </WelcomeBar>
                {/* Barra de búsqueda */}
                <SearchBar>
                    <input type="text" placeholder="Buscar marca..." />
                </SearchBar>
            </LeftContainer>

            {/* Contenedor de las marcas */}
            <MarcaContainer>
                {marcas.map((marca, index) => (
                    <div key={index} onClick={() => navigate("/perfil")}>
                        <MarcaButton>
                            <MarcaImage src={marca.src} alt={marca.alt} />
                        </MarcaButton>
                    </div>
                ))}

            </MarcaContainer>
            
                    <button className="add-user-button" onClick={() => navigate("/nuevoproducto")}>
                        AGREGAR NUEVO PRODUCTO</button>
                
            
            
        </MainContainer>
    );
}

export default MarcaComponent;
