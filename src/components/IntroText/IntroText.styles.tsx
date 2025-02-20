import { blue } from "components/Variables";
import styled from "styled-components";

export const IntroTextWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto 50px;
    padding: 30px 0;
    font-weight: 400;
    color: ${blue};
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));

    @keyframes pulsate {
        0% {
            filter: drop-shadow(0px 0px 5px rgba(255,255,255,1)) ;
        }
        50%{
            filter: drop-shadow(0px 10px 3px rgba(255,255,255,0.25)) drop-shadow(0px -10px 3px rgba(255,255,255,0.3));
        }
        100%{
            filter: drop-shadow(0px 0px 5px rgba(255,255,255,1));
        }
    }

    @media (min-width: 1080px){
        font-size: 1.5rem;
        padding: 30px 0;
    }
`