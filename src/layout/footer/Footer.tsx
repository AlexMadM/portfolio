import React from 'react';
import Icon from "../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Alexander</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'}width={'21px'} viewBox={'0 0 21'} iconId={'instagram'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon height={'21px'}width={'21px'} viewBox={'0 0 21'} iconId={'telegram'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon height={'21px'}width={'21px'} viewBox={'0 0 21'} iconId={'vk'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon height={'21px'}width={'21px'} viewBox={'0 0 21'} iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Alexander, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
`
const Name = styled.span`
`

const SocialList = styled.ul`
    display: flex;
  gap: 30px;
`
const SocialLink = styled.a`
`
const Copyright = styled.small
    `
    `
const SocialItem = styled.li`
`

export default Footer;