import styled from 'styled-components';
import Slider from './Slider';
import Productos from './Productos';
import { useContextoCarrito } from '../contextos/contextoCarrito';

const Tienda = () => {
  const { productos } = useContextoCarrito();

  return (
    <ContenedorTienda>
      <h2>Tienda</h2>
      <Productos productos={productos}/>
      <ContenedorSlider>
        <Slider  />
      </ContenedorSlider>
    </ContenedorTienda>
  );
}

const ContenedorTienda = styled.section`
  margin-right: 10px;
  display: grid;
  grid-template-columns: 2fr;

  h2{
    font-size: 28px;

    @media (max-width: 900px) {
      font-size: 24px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ContenedorSlider = styled.section`
  width: 100%;
  margin: 80px 0;

  @media (max-width: 900px) {
    margin:  0;
  }
`;

export default Tienda;
