import styled from "styled-components";
import profileFrameCorner from 'assets/images/profile-frame-corner.svg';
import profileFrameGrid from 'assets/images/profile-frame-grid.svg';
import {
    teamMemberBlue,
} from "components/Variables";


export const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  
  img {
    opacity: 0.8;
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${profileFrameCorner});
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${profileFrameGrid});
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.4;
    transition: transform 100ms;
  }
  
  &:hover {
    &:before {
      transform: scale(0);
    }
    &:after {
      animation: blinker 150ms linear infinite;
    }
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  
`
export const NameWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: left;
  color: white;
  width: 100%;
  margin-top: 15px;
  padding-left: 5px;
  
  &:before {
    content: "";
    position: absolute;
    width: calc(100% - 10px);
    height: 2px;
    background: ${teamMemberBlue};
    bottom: -5px;
    left: 5px;
  }
`

export const ImageWrapper = styled.div`
  img{
    width: 100%;
  }
`

export const Name = styled.div`
  color: ${teamMemberBlue};
  text-transform: uppercase;
  margin-right: 5px;
`
export const LastName = styled.div`
  color: ${teamMemberBlue};
  text-transform: uppercase;
  font-weight: bold;
`

export const JobPositionWrapper = styled.div`
  display: flex;
  justify-content: left;
  color: ${teamMemberBlue};
  width: 100%;
  margin-top: 10px;
  padding-left: 5px;
  span {
    font-size: 12px ;
  }
`
