import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import Slider from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Testimony = () => {
    return (
        <StyledTestimony>
<SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
           <Icon iconId={'quote'}/>
            <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};
const StyledTestimony= styled.section`

  background-color: aliceblue;
`

export default Testimony;