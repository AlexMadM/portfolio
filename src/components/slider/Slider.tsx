import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import './../../styles/slider.css'

type SlidePropsType ={
    text: string
    userName:string
}

const Slid =(props:SlidePropsType)=> {
    return (
        <Slide>
            <Text>{props.text}</Text>
            <Name>{props.userName}</Name>
        </Slide>
    )
}

const items = [
    <Slid userName={'ivan ivanow'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                elit.'}/>,
    <Slid userName={'ivan ivanow'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                elit.'}/>,
    <Slid userName={'ivan ivanow'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n' +
        '                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing\n' +
        '                elit.'}/>
];

export const Slider = () => (
   <StyledSlider>
       <AliceCarousel
           mouseTracking
           items={items}

       />

   </StyledSlider>

);





const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;

align-items: center`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
`

const Name = styled.span`
  font-family: Josefin Sans;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const Pagination = styled.div`
span{
  display: inline-block;
  width: 7px;
  height: 7px;
 
background-color: rgba(255,255,255,0.5);
  border-radius: 20px;

  &+span{margin-left: 5px;}
  &.active{
    background-color: ${theme.colors.accent};
    width: 20px;
  }
  
}
`
export default Slider;