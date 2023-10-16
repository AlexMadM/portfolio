import React from 'react';
import photo from '../../../assets/img/blogging 1.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
const Main = () => {
    return (
        <StyledMain>

            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <SmallText>Hi</SmallText>
                        <Name>I am <span>Alexander</span></Name>
                        <MainTitle>I  web Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain =styled.div`
min-height: 100vh;
  background-color: aquamarine;
  display: flex;
`

const Photo =styled.img`
width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  font-family: Poppins;
  font-size: 27px;
  font-weight: 400;

`

const Name =styled.h2`
  font-family: Josefin Sans;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;
  span{
    position: relative;
    z-index: 0;
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
  
`
const SmallText =styled.span`
  font-size: 14px;
  font-weight: 400;

    
`
const PhotoWrapper = styled.div`
position: relative;
  z-index: 0;
  &::before{
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: -24px;
    z-index: -1;
  }
`

export default Main;