import styled from "styled-components";
import { useContextoCarrito } from "../contextos/contextoCarrito";

const Carrito = () => {
    const {carrito, eliminarProducto, agregarMas, reducirCantidad} = useContextoCarrito();

    return (
        <ContenedorTienda>
            <h2>Carrito</h2>
            {carrito.length > 0 ? (
                carrito.map((producto, index) => {{
                    return (
                        <Lista key={index}>
                            <Item>{producto.nombre}</Item>
                            <Item>Cantidad: {isNaN(Number(producto.cantidad)) ? "Valor Inválido" : Number(producto.cantidad) > 1 ? Number(producto.cantidad) + "+" : Number(producto.cantidad)}</Item>
                            <ContenedorBtn>
                                <Eliminar onClick={() => eliminarProducto(producto.id)}>Eliminar</Eliminar>
                                <Agregar onClick={() => agregarMas(producto.id)}>Agregar</Agregar>
                                <Reducir onClick={() => reducirCantidad(producto.id)}>Reducir</Reducir>
                            </ContenedorBtn>
                        </Lista>
                    )
                }})
            ) : (
                <p>Todavia no has agregado productos.</p>
            )}
        </ContenedorTienda>
    );
}

const ContenedorTienda = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    margin-left: 20px;

    h2{
        font-size: 28px;

        @media (max-width: 900px) {
            font-size: 24px;
        }
    }

    p{
        text-align: center;
    }
`;

const ContenedorBtn = styled.section`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const Lista = styled.ul`
    width: 300px;
    list-style: none;
    text-align: center;
    border: 1px solid #afafaf;
    margin: 10px 0;
    padding: 10px 0;
    border-radius: 2px;
`;

const Item = styled.li`
    font-weight: bold;
`;

const Eliminar = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: red;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #df0d0d;
    }
`;

const Agregar = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: #00b8e6;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #00a9d3;
    }
`;

const Reducir = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: #00b8e6;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #00a9d3;
    }
`;
 
export default Carrito;