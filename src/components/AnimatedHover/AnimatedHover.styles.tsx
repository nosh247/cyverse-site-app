import { secondaryColor, shadowColor, white } from "components/Variables";
import styled from "styled-components";

export const AnimatedHover = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px; 
    
    @media (min-width: 1025px){
        width: 100px;
        height: 100px;

        &::before {
            content:'';
            width: 50%;
            height: 50%;
        }
    }
    

    &::before {
        content:'';  
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 50%;
        height: 50%;
        border-radius: 999px;
        background: ${secondaryColor};
        opacity: 1;
    }

    img {
        opacity: 0;
        display: block;
        width: 100%;
        height: 100%; 
        z-index: 3;
        mix-blend-mode: color-dodge;
        display: none;

        @media (min-width: 1080px){
            display: initial;
        }
    }
`