import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #ff8c00;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #e48006;
    }
`;

const EnlaceHome = styled(Link)`
    color: #000;
    text-decoration: none;
    cursor: pointer;
`;

const HabitacionPreview = ({habitacion}) => {

    const { contenido, imagen, titulo, slug } = habitacion;

    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Link to={slug}>
                <Image fluid={imagen.fluid} />
            </Link>
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <EnlaceHome to={slug}>
                    <h3
                        css={css`
                            font-size: 1.6rem;
                        `}
                    
                    >{titulo}</h3>
                </EnlaceHome>
                    <p>{contenido}</p>

                <Boton to={slug}>Ver Habitación</Boton>
            </div>
        </div>
    );
}
 
export default HabitacionPreview;