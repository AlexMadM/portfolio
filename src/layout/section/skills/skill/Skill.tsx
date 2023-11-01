import React from 'react';
import Icon from "../../../../components/icon/Icon";
import {S} from '../Skill_Styles'
import {FlexWrapper} from "../../../../components/FlexWrapper";


export type SkillPropsType = {
    iconId: string
    title: string
    description: string
    key?:number
}

const Skill= (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper> <Icon iconId={props.iconId}/></S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>

        </S.Skill>
    );
};

export default Skill;

