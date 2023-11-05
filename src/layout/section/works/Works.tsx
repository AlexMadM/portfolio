import React, {useState} from 'react';

import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from './../../../assets/img/proj1.webp'
import timerImg from './../../../assets/img/proj2.webp'
import {Container} from "../../../components/Container";
import TabMenu, {TabStatusType} from "./tabMenu/TabMenu";


//const worksItem = ['All', 'LANDING PAGE', 'React', 'SPA']

const tabsItems:Array<{status: TabStatusType, title: string, }> =[
    {
        title:'All',
        status:'all'
    },
    {
        title:'LANDING PAGE',
        status:'landing'
    },
    {
        title:'React',
        status:'react'
    },
    {
        title:'SPA',
        status:'spa'
    },
]

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'spa'
    },
    {
        title: 'Timer',
        src: timerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type:'react',
    },
]

const Works: React.FC = () => {
    const [currentFilterStatus,setCurrentFilterStatus]= useState('all')
    let filteredWork = workData

    if (currentFilterStatus === 'landing') {
        filteredWork = workData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'spa') {
        filteredWork = workData.filter(work => work.type === 'spa')
    }
    if (currentFilterStatus === 'react') {
        filteredWork = workData.filter(work => work.type === 'react')
    }

    function  changeFilterStatus(value:TabStatusType){
        setCurrentFilterStatus(value)
    }

    return (
        <StyledWorks id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu currentFilterStatus={currentFilterStatus}  changeFilterStatus={changeFilterStatus} tabsItems={tabsItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWork.map((i) => {
                        return <Work title={i.title} text={i.text} src={i.src}/>
                    })}

                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`

export default Works;