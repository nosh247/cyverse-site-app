import styled from "styled-components";

export const CyverseLogoWrapper = styled.div<{ width?: number }>`
    display: block;
    margin: 16px auto;    
    width: ${(props) => props.width && `${props.width}px`};
    animation: slideDown 1s forwards ease-in-out;
    position: relative;
    max-width: 80% !important;

    img {
        max-width: 100%;
        width: 100%;
        height: auto;
        /* filter: drop-shadow(0px 0px 3px rgba(255,255,255,0.75));   */
        animation: skewDeformFlick 10s infinite alternate ease-in-out;        
    }
    @keyframes delayAnim {
        0%{
            filter: drop-shadow(0px 0px 3px rgba(255,255,255,0.75));
        }
        100% {
            filter: drop-shadow(0px 0px 5px rgba(255,255,255,1));
        }
    }

    @keyframes skewDeformFlick {
        1% {
            transform: skew(-45deg);
        }
        1.25% {
            transform: skew(45deg, 10deg);
        }
        1.75%{
            transform: skew(0deg);
        }
        2.1%{
            transform: skew(0deg);
        }
        2.5%{
            transform: skew(100deg, -5deg);
        }
        3%{
            transform: skew(150deg,50deg);
        }
        5%{
            transform: skew(0);
        }
        100%{
            transform: skew(0);

        }
    }


    @keyframes slideDown {
        0% {
            opacity: 0;
            top: -25px;
            transform: skew(15deg);
        }
        1%{
            top: 100px;
            transform: skew(-50deg);

        }
        15%{
            top: 50px;
            transform: skew(60deg);

        }
        25%{
            transform: skew(0deg);
        }
        100% {
            opacity: 1;
            top: 0px;
            
        }
    }
`