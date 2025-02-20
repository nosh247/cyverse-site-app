import styled from "styled-components";
import trailerBackgroundSrc from 'assets/images/trailer-background.png';
import youtubeBackground from 'assets/images/trailer-secondary-bg.svg';


export const TrailerWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${trailerBackgroundSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-width: 1025px) {
    min-height: 800px;
  }

`
export const YoutubeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  padding: 180px;
  height: 650px;
  max-width: 100%;
  background-image: url(${youtubeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;

  @media (min-width: 1025px) {
    max-width: 100%;
    max-height: unset;
  }
`

export const YoutubePlayer = styled.iframe`
  position: relative;
  display: block;
  width: 650px;
  height: 420px;
  margin-top: 90px;
`