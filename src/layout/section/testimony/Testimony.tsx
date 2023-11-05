import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import Slider from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from '../skills/Skill_Styles'
import {Container} from "../../../components/Container";



const Testimony:React.FC = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};
const StyledTestimony= styled.section`

  background-color: aliceblue;


${S.IconWrapper} {
    margin: 40px 0 72px;
}
`

export default Testimony;