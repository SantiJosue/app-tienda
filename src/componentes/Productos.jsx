import { useState } from "react";
import styled from "styled-components";
import { useContextoCarrito } from "../contextos/contextoCarrito";
import Notificacion from "./../componentes/Notificacion";

const Productos = () => {
    const { productos, agregarProducto } = useContextoCarrito();
    const [notificacion, setNotificacion] = useState(null);

    const manejarAgregarProducto = (id, nombre) => {
        agregarProducto(id, nombre);

        // Mostrar la notificación con un mensaje personalizado si es la primera vez
        if (!notificacion) {
            setNotificacion({
                mensaje: `¡${nombre} ha sido agregado al carrito!`
            });

            // Ocultar la notificación después de 3 segundos
            setTimeout(() => {
                setNotificacion(null);
            }, 1000);
        }
    };

    return (
        <Contenedor>
            {productos.length > 0 &&
            productos.map((producto, index) => (
                <Lista key={index}>
                    <li>{producto.nombre}</li>
                    <img 
                        src={producto.image} alt="Imagen de producto"
                        onClick={() => manejarAgregarProducto(producto.id, producto.nombre)}
                    />
                    <Boton onClick={() => manejarAgregarProducto(producto.id, producto.nombre)}>
                        Agregar al Carrito
                    </Boton>
                </Lista>
            ))}
            {notificacion && (
                <Notificacion mensaje={notificacion.mensaje} />
            )}
        </Contenedor>
    );
}

const Contenedor = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
    justify-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        justify-content: center;
        align-content: center;
        gap: 15px;
        margin-bottom: 6rem;
    }
`;

const Lista = styled.ul`
    min-width: 150px;
    width: 100%;
    max-width: 400px;
    list-style: none;
    text-align: center;
    border: 1px solid #afafaf;
    border-radius: 4px;
    padding: 10px;
    margin: 2px 10px;
    transition: all .3s ease;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 900px) {
        width: 80%;
        margin: 2px 0;
    }

    li {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
    }
    
    img{
        min-width: 100px;
        width: fit-content;
        height: 220px;
        object-fit: contain;
        margin: 10px 0;
    }
`;

const Boton = styled.button`
    border: none;
    padding: 10px;
    width: 100%;
    background: #00b8e6;
    color: white;
    border-radius: 2px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background: #00a9d3;
    }
`;

export default Productos;
