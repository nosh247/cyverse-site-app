import styled from "styled-components";
import gameDetailsBackground from 'assets/images/game-details-background.png';

export const GameDetailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-image: url(${gameDetailsBackground});
    padding: 50px 0;
    margin: 20px auto 0;

  @media (min-width: 1025px) {
    max-width: 1024px;
  }
    
    
  
`