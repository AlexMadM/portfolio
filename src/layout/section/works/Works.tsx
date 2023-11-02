import React from 'react';

import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from './../../../assets/img/proj1.webp'
import timerImg from './../../../assets/img/proj2.webp'
import {Container} from "../../../components/Container";
import TabMenu from "./tabMenu/TabMenu";


const worksItem = ['All', 'LANDING PAGE', 'React', 'SPA']

const workData = [
    {
        title:'Social Network',
        src:socialImg,
text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        title:'Timer',
        src:timerImg,
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
]

const Works: React.FC = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItem}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((i)=>
                    {
                        return    <Work title={i.title} text={i.text}src={i.src}/>
                    })}

                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper}{
      gap: 30px;
    }
 `

export default Works;