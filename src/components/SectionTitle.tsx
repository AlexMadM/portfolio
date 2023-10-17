import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: #FFF;
  font-family: Josefin Sans;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  position: relative;
  margin-bottom: 90px;
  
  &::before{
    content: '';
    display: inline-block;
    width: 55px;
    height:1px ;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`