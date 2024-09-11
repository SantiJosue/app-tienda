import { useParams, Navigate, NavLink } from "react-router-dom";
import styled from "styled-components";

const Articulo = ({articulos}) => {
    const {id} = useParams();

    return (
        <>
            {articulos[id -1] ? (
            <ContenedorArticulo>
                <h2>{articulos[id-1].titulo}</h2>
                <p>{articulos[id-1].descripcion}</p>
                <BtnRegresar type="button" to={"/blog"}>Regresar</BtnRegresar>
            </ContenedorArticulo>
            ) : (
                <Navigate to={"/blog"} />
            )}      
        </>
    );
}
 
const ContenedorArticulo = styled.section`
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        margin: 5px 0;
    }
`;

const BtnRegresar = styled(NavLink)`
    text-decoration: none;
    border: none;
    background: #00b8e6;
    padding: 10px 15px;
    color: white;
    border-radius: 4px;
    margin: 5px 0;

    &:hover {
        background: #00a9d3;
    }
`;

export default Articulo;