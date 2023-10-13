import React from 'react';

import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle";
import Menu from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from './../../../assets/img/proj1.webp'
import timerImg from './../../../assets/img/proj2.webp'


const worksItem = ['All', 'LANDING PAGE', 'React', 'SPA']

const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItem}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}src={socialImg}/>
                <Work title={'Timer'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'} src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: olive`

export default Works;