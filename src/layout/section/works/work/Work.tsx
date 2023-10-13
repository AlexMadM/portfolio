import React from 'react';
import styled from "styled-components";

type WorksPropsType ={
    title:string
    text:string
    src:string
}

const Work = (props:WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=''/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork =styled.div`
   max-width: 540px;
  width: 100%;
  object-fit: cover;
`

const Image =styled.img`
    width: 100%;
  height: 260px;
`
const Title =styled.h3`
`
const Text =styled.p`
`
const Link =styled.a`
`
export default Work;