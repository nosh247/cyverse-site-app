import styled from "styled-components";
import newsBackgroundSrc from 'assets/images/news-background.svg';
import newsBackgroundSquareSrc from 'assets/images/news-background-square.jpg';

export const NewsWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  min-height: 800px;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  background-color: #000;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${newsBackgroundSquareSrc});
  background-size: cover;
  position: relative;
  
  button {
    transform: scale(0.7);
    position: absolute;
    left: 33%;
    bottom: 30px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-position: 0 -100px;
  }

  @media (min-width: 1025px) {
    background-size: contain;
    min-height: 550px;
    background-image: url(${newsBackgroundSrc});
  }
`

export const NewsImageWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  animation-delay: 3s;
  overflow: hidden;
  display: none;
  
  @media (min-width: 1025px) {
    display: block;
  }
  
`

export const NewsCreatesWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  left: 30%;
  animation-delay: 3s;
  animation: brightness 1200ms ease-in-out infinite alternate both;
  display: none;

  @media (min-width: 1025px) {
    display: block;
  }
  
  @keyframes brightness {
    0%, 100% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(1.2);
    }
  }
`