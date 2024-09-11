import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Blog = ({articulos}) => {

    return (
        <ContenedorBlog>
            <h2>Blog</h2>
            <h3>Articulos:</h3>
            {
                articulos.map((articulo) => {
                    return <li key={articulo.id}>
                                <NavLink to={`/blog/${articulo.id}`}>{articulo.titulo}</NavLink>
                            </li>                            
                })
            }
        </ContenedorBlog>
    );
}

const ContenedorBlog = styled.section`
    width: 100%;
    text-align: center;
    list-style: none;

    h2{
        text-align: left;
        font-size: 28px;

        @media (max-width: 900px) {
            font-size: 24px;
            text-align: center;
            margin-bottom: 1rem;
        }
        
    }

    h3{
        font-size: 24px;
        margin-bottom: 10px;

        @media (max-width: 900px) {
            font-size: 20px;
        }
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
`;
 
export default Blog;