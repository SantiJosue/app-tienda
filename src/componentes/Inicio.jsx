import Slider from './../componentes/Slider';
import styled from 'styled-components';

const Inicio = () => {
    return (
        <InicioContainer>
            <TextContainer>
                <h2>Inicio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi incidunt et quis recusandae hic corporis nihil omnis deleniti officiis.</p>
            </TextContainer>
            <SliderContainer>
                <Slider  />
            </SliderContainer>
        </InicioContainer>
    );
}

const InicioContainer = styled.section`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        text-align: center;
    }
`;

const TextContainer = styled.section`
    margin-bottom: 5rem;

    h2{
        font-size: 28px;

        @media (max-width: 900px) {
            font-size: 24px;
        }
    }
`;
 
const SliderContainer = styled.section`
    width: 80%;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export default Inicio;