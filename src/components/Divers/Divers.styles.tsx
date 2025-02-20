import styled from "styled-components";
import diversBackground from 'assets/images/divers-background.png';
import frameContentBgSrc from 'assets/images/frame-content-bg.svg';
import frameContentBgSrc2 from 'assets/images/frame-content-bg2.svg';
import {blue, frameBg, topMenuBlue} from "components/Variables";

export const DiversWrapper = styled.div`
  min-height: 400px;
  background-size: contain;
  background-color: #000;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${diversBackground});
  padding-top: 250px;
  position: relative;

  @media (min-width: 1025px) {
    width: 1024px;
    margin: 0 auto;
    padding-top: 0;
    min-height: 975px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
  }
`

export const DiverFrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  perspective-origin: center;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.9)) drop-shadow(-2px -2px 5px rgba(0, 0, 0, 0.9));

  &:hover {
    z-index: 9 !important;
  }

  @media (min-width: 1025px) {
    align-items: stretch;
    justify-content: stretch;
    gap: 0;
  }
`
export const DiverName = styled.span`
  position: absolute;
  color: #fff;
  top: 60%;
  padding: 5px;
  font-size: 0.8rem;
  width: 100%;
  box-sizing: border-box;
  text-shadow: -1px -1px 10px #06DFD8, 1px 1px 5px #000;
  font-weight: bold;

  @media (min-width: 1025px) {
    bottom: 15px;
    padding: 15px;
    font-size: 1.8rem;
    text-align: right;
  }
`;


export const DiversContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0;
  }
`

export const DiverFrame = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 150px;
  opacity: 1;
  background: ${frameBg};
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
  border: 1px solid ${blue};
  box-sizing: border-box;
  user-select: none;
  transform: rotate3d(0, 1, 0, -25deg) scale(1);
  margin: 0 -10px;
  transition: all ease 150ms;
  cursor: pointer;

  @media (min-width: 1025px) {
    width: 175px;
    min-height: 250px;
  }

  &:hover {
    animation: spinToScale 200ms forwards ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    background-image: url(${frameContentBgSrc});
    background-size: 280px;
    background-position: center center;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    background-image: url(${frameContentBgSrc2});
    background-size: 280px;
    background-position: -20px center;
    background-repeat: repeat-y;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @keyframes spinToScale {
    0% {
      transform: rotate3d(0, 1, 0, -25deg) scale(1);
    }
    50% {
      transform: rotate3d(0, 1, 0, 5deg) scale(1.3);
    }
    100% {
      transform: rotate3d(0, 1, 0, -2deg) scale(1.2);
    }
  }
`

export const DiversTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  color: #06DFD8;
  letter-spacing: 0.08em;
  
  @media (min-width: 1025px) {
    font-size: 30px;
  }
`

export const DiversButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  justify-content: center;
  align-items: center;
  top: 5%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: 10;

  button {
    transform: scale(1.2);
  }

  @media (min-width: 1025px) {
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
    height: 55px;
  }
`