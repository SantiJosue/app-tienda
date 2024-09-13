import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const notify = keyframes`
    0% {
        transform: translateY(-1.25rem);
        opacity: 0;
    }

    10% {
        transform: translateY(0);
        opacity: 1;
    }

    90% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(-1.25rem);
        opacity: 0;
    }       
`; 

const Mensaje = styled.p`
    background-color: #04d130;
    width: 30%;
    text-align: center;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
    animation: ${notify} 3s ease forwards;
    position: fixed;

    @media (max-width: 900px) {
        font-size: 14px;
        width: 60%;
    }
`;

export default Notificacion;