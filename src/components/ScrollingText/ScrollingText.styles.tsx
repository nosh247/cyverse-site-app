import { white } from "components/Variables";
import styled from "styled-components";

export const ScrollingTextHideOverflow = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    overflow: hidden;
    display: none;

    @media (min-width: 1080px){
        display: block;
    }
`

export const ScrollingTextWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    height: 4rem;
    background-color: rgba(0,0,0, 0.35); 
    backdrop-filter: blur(3px);
    padding-left: 100%;
    box-sizing: content-box;
`

export const ScrollingText = styled.div`
    color: ${white};
    filter: drop-shadow(0px 0px 7px rgba(255,255,255,0.9)); 
    display: inline-block;
    height: 4rem;
    line-height: 4rem;  
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ticker;
    animation-duration: 25s;

    @keyframes ticker {
        0% {
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }
        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }
`

export const ScrollingItems = styled.div`
    display: inline-block;
    padding: 0 2rem;
    font-size: 1.5rem;
    color: white;   
`