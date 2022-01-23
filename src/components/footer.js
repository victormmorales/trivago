import React from 'react';
import { css } from '@emotion/react';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer
                css={css`
                background-color: #007eb4;
                width: 100%;
                padding: 1rem;
                margin: 0 auto;
                margin-top: 7rem;
                bottom: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    color: #FFF;
                }       
                img {
                    max-width: 50px;
                } 
        `}
            >
                <p>Designed by <span>Víctor Ruiz &copy;</span> {year}</p>
                <a href="https://www.linkedin.com/in/victormmorales/">
                    
                <img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1610448149/Logos%20VR/LOGO_VR_Blanco_kzklcb.png" alt="logo-vr"/>
                </a>
            </footer>
            <p
                css={css`
                    text-align:center;
                    background-color: #086187;
                    color: #FFF;
                    margin: 0;
                    padding: 0.3rem;
                `}
            >Todos los derechos reservados</p>
        </>
    );
}
 
export default Footer;