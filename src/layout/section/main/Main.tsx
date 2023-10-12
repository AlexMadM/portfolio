import React from 'react';
import photo from '../../../assets/img/proj2.webp'
import styled from "styled-components";
const Main = () => {
    return (
        <div>
            <div>
                <span>Hi</span>
                <h2>Hi am Alexander</h2>
                <h1>I am web Developer</h1>
            </div>
            <Photo src={photo}/>
        </div>
    );
};

const Photo =styled.img`
width: 350px;
  height: 450px;
  object-fit: cover;
`

export default Main;