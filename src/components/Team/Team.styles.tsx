import styled from "styled-components";
import theTeamBackground from 'assets/images/the_team_background.svg';

export const TeamWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1rem;
  row-gap: 1em;
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: url(${theTeamBackground});
  padding: 80px 0;
  overflow: hidden;

  @media (min-width: 1025px) {
    max-width: 1024px;
    margin: 0 auto;
  }
  
`

export const TeamPodWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  
  img#lines {
   
    z-index: -1;
    position: absolute;
    animation: brightness 5s ease-in-out infinite forwards;

    @media (max-width: 1024px) {
      width: 100%;
    }
    
  }


  @keyframes flicker {
    0%, 25%, 50%, 76%, 100% {
      opacity: 1;
    }
    1%, 24%, 49%, 75%, 95% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes brightness {
    0%, 100%  { filter: brightness(1); }
    50% { filter: brightness(1.5); }
    10%, 30% { filter: brightness(2.5); }
    15%, 35% { filter: brightness(4.2); }
    20%, 40% { filter: brightness(4); }
  }
  
`