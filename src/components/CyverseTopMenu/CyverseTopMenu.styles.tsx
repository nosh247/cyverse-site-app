import styled from "styled-components";
import {topMenuBlue, topMenuBlueHover} from "../Variables";

export const CyverseTopMenuWrapper = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-right: 10px;
    
    li {
      padding: 0 15px;
      position: relative;
      border-right: solid 1px ${topMenuBlue};
      line-height: 0.8;
      
      &:last-child {
        padding-right: 0;  
        border: none;
      }
      
      a {
        color: ${topMenuBlue};
        text-decoration: none;
      }
      
      &:hover {
        a {
          color: ${topMenuBlueHover};
        }
        
        &:before {
          content: "";
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          bottom: -10px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${topMenuBlueHover} transparent;
        }
      }
    }
  }

`