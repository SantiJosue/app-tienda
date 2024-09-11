import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';
import Error404 from './componentes/Error404';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Carrito from './componentes/Carrito';
import Articulo from './componentes/Articulo';
import Footer from './componentes/Footer';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const articulos = [
      {id: 1, titulo: "Articulo #1", descripcion: "Descripción del articulo 1"},
      {id: 2, titulo: "Articulo #2", descripcion: "Descripción del articulo 2"},
      {id: 3, titulo: "Articulo #3", descripcion: "Descripción del articulo 3"},
      {id: 4, titulo: "Articulo #4", descripcion: "Descripción del articulo 4"}
  ];

  const navigate = useNavigate();

  const volverInicio = () => {
    navigate("/");
  };

  return (
    <Contenedor>
      <Header>
        <h3 onClick={volverInicio}>Tienda Online</h3>
        <Menu>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
      </Header>
      <MainSection>
        <Routes>
          <Route path="*" element={ <Error404 />} />
          <Route path="/" element={ <Inicio />} />
          <Route path="/blog" element={ <Blog articulos={articulos} />} />
          <Route path="/blog/:id" element={ <Articulo articulos={articulos} />} />
          <Route path="/tienda" element={ <Tienda />} />
        </Routes>
        <aside>
          <Carrito />
        </aside>
      </MainSection>
      <Footer />
    </Contenedor>
  );
};

const Contenedor = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  `;

const Header = styled.header`
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #00b8e6;
  display: flex;
  justify-content: space-between;
  grid-column: span 2;

  h3 {
    margin-left: 32px;
    color: #fff;
    cursor: pointer;

    @media (max-width: 900px) {
      margin-left: 10px;
      font-size: 16px;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem 2rem;
    transition: all .3s ease;

    @media (max-width: 900px) {
      font-size: 14px;
      padding: 0.1rem 1rem;
    }
  }
  
  a:hover {
    background: #00a9d3;
  }
  `;
  
const Menu = styled.nav`
  display: inline-block;
`;

const MainSection = styled.section`
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }

  aside {
    margin-right: 40px;
  }

`;


export default App;