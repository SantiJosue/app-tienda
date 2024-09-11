import React from 'react';
import styled from 'styled-components';

const Notificacion = ({mensaje}) => {
    return (
        <Contenedor>
            <Mensaje>{mensaje}</Mensaje>
        </Contenedor>
    );
}

const Contenedor = styled.section`
    width: 100%;
    position: fixed;
    top: 5rem;
    display: flex;
    justify-content: center;
`;

const Mensaje = styled.p`
    background-color: #04d130;
    width: 30%;
    text-align: center;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;

    @media (max-width: 900px) {
        font-size: 14px;
        width: 60%;
    }
`;
 
export default Notificacion;