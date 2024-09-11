import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContextoCarrito } from '../contextos/contextoCarrito';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { productos, agregarProducto } = useContextoCarrito();

  useEffect(() => {
    if (productos.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % productos.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [productos]);

  const siguienteProducto = () => {
    setIndex((prevIndex) => (prevIndex + 1) % productos.length);
  };

  const anteriorProducto = () => {
    setIndex((prevIndex) => (prevIndex - 1 + productos.length) % productos.length);
  };

  if (productos.length === 0) {
    return <p>No hay productos en el carrito</p>;
  }

  return (
    <SliderContainer>
      <ButtonWrapper>
        <Boton onClick={anteriorProducto}>Anterior</Boton>
        <Boton $marginLeft onClick={siguienteProducto}>Siguiente</Boton>
      </ButtonWrapper>
      <Producto>
        <img 
          onClick={() => agregarProducto(productos[index].id, productos[index].nombre)}
          src={productos[index].image}
          alt="producto-img"
        />
        <h3>{productos[index]?.nombre}</h3>
        <details>
          <summary><b>Características</b>:</summary>
          <p><b>{productos[index]?.camara}</b></p>
          <p><b>{productos[index]?.capacidad}</b></p>
          <p><b>{productos[index]?.pantalla}</b></p>
          <p><b>{productos[index]?.procesador}</b></p>
          <p><b>{productos[index]?.energía}</b></p>
        </details>
      </Producto>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 900px) {
    height: 60vh;
  }
`;

const ButtonWrapper = styled.section`
  position: absolute;
  top: 40%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 10;
  @media (max-width: 700px) {
    width: 110%;
    top: 35%;
  }
`;

const Producto = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  width: 100%;
  max-width: 400px;
  z-index: 1;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 200px; 
    height: 60vh;
  }

  img {
    min-width: 200px; 
    height: 400px; 
    border-radius: 4px;
    padding: 5px;
    object-fit: contain;

    &:hover{
      cursor: pointer;
    }

    @media (max-width: 900px) {
      height: 200px;
      width: fit-content;
    }
  }

  details {
    margin-bottom: 10px;
    border-radius: 4px;
    cursor: pointer;
    padding: 6px 12px;
    overflow: hidden;
    height: 20vh;

    @media (max-width: 900px) {
      font-size: 12px;
      padding: 5px 10px;
      overflow-y: scroll;
    }
  }
  
  summary{
    border: 1px solid #00b8e6;
    padding: 6px 12px;
  }

  h3 {
    margin: 10px 0;
  }

  button {
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
    background-color: #00b8e6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 900px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }

  button:hover {
    background-color: #009ac1;
  }
`;


const Boton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #00b8e6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 5px 8px;
    font-size: 12px;
  }

  &:hover {
    background-color: #009ac1;
  }
`;

export default Slider;