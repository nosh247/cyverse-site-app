import styled from "styled-components";
import { white } from "components/Variables";

export const TitleWrapper = styled.h1`
    margin:0 auto;
    padding: 0;
    color: ${white};
    font-size: 1.6rem;
    position: relative;
    animation: slideUp 1s forwards ease-in-out;
    text-shadow: 0px 0px 5px ${white};

    @keyframes slideUp {
        0% {
            opacity: 0;
            bottom: 50px;
        }
        100% {
            opacity: 1;
            bottom: 0px;
        }
    }

    @media screen and (min-width: 1080px){
        font-size: 3rem;
        margin-top: -70px;
    }
`
