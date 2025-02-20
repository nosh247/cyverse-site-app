import styled from "styled-components";
import * as colors from 'components/Variables';
import cyMainBack from 'assets/images/cy-main-back.webp';
import homeSideLines from 'assets/images/home_side_lines.svg';


export const AnimatedBackgroundWrapper = styled.div<{ size?: number, images?: string[], speed?: number[] }>`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    background-image: url(${homeSideLines}), url(${cyMainBack});
    background-position: center, 50% 50%;
    background-size: cover, ${props => props.size && `${props.size}%`};

    &:after {
       content:'';
       position: absolute;
       width: 100%;
       height: 100%;
       background: ${colors.shadowColor}; 
       animation: fadeIn 8s linear 0.25s forwards;
       box-shadow: 0 0 100px ${colors.shadowColor} inset;
    }

    canvas {
        object-fit: contain;
        position: relative;
        width:100%;
        height:auto;
        min-height: 600px;
    }

    @keyframes fadeIn {
        0% { opacity: 1}
        100% {opacity: 0.5}
    }
`