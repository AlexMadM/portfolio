import React from 'react';
import photo from '../../../assets/img/blogging 1.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
const Main = () => {
    return (
        <StyledMain>
          <FlexWrapper align={'center'} justify={'space-around'}>
              <div>
                  <span>Hi</span>
                  <Name>I am Alexander</Name>
                  <MainTitle>I  web Developer</MainTitle>
              </div>
              <Photo src={photo}/>
          </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain =styled.div`
min-height: 100vh;
  background-color: aquamarine;
`

const Photo =styled.img`
width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name =styled.h2`
`

export default Main;