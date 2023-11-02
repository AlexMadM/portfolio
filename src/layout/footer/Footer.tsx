import React from 'react';
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from '../footer/Footer_Styles'
const socialItemsData = [
    {
        iconId: 'instagram'

    },
    {
        iconId: 'telegram'

    },
    {
        iconId: 'vk'

    },
    {
        iconId: 'linkedin'

    },
]

const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Alexander</S.Name>
                <S.SocialList>
                    {socialItemsData.map((i, k) => {
                        return <S.SocialItem>
                            <S.SocialLink key={k}>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21'} iconId={i.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Alexander, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};


export default Footer;