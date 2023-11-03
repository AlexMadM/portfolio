import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main =styled.div`
min-height: 100vh;
  background-color: aquamarine;
  display: flex;
`

const Photo =styled.img`
width: 350px;
  height: 450px;
  object-fit: cover;
  margin-right: 20px;
  @media ${theme.media.mobile}{
    width:310px;
    height:380px;
  }
`

const MainTitle = styled.h1`

  ${font({ weight: 400,Fmax:27,Fmin:20}) }

`

const Name =styled.h2`
${font({family: "'Josefin Sans',sans-serif", weight: 700,Fmax:50,Fmin:36}) }
  //font-family: 'Josefin Sans',sans-serif;
  //font-size: 50px;
 // font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;
  span{
    position: relative;
    z-index: 0;
    white-space: nowrap;
    &::before{
      position: absolute;
      bottom: 0;
      z-index: -1;
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
    }
  }
  @media ${theme.media.mobile}{
margin:15px 0 22px;
  }
`
const SmallText =styled.span`
  font-size: 14px;
  font-weight: 400;


`
const PhotoWrapper = styled.div`
position: relative;
  margin-top: 65px;
  z-index: 0;
  &::before{
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    @media ${theme.media.mobile}{
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;

    }
  }
  
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText

}