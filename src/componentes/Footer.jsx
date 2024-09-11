import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <ContenedorFooter>
            <p>Designed by <span>Santiago Fernández</span></p>
        </ContenedorFooter>
    );
}
 
const ContenedorFooter = styled.footer`
    width: 100%;
    height: 120px;
    font-size: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 4rem 0; */
    background-color: #00b8e6;
    color: white;

    span{
        font-weight: bold;
    }

    @media (max-width: 900px) {
        font-size: 16px;
    }
`;

export default Footer;