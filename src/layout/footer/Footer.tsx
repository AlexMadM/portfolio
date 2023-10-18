import React from 'react';
import Icon from "../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

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
    background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  font-family: Josefin Sans;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialLink = styled.a`
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  
  &:hover{
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small
    `
    opacity: 0.5;
      text-align: center;
      font-size: 12px;
      font-weight: 400;
    
    `
const SocialItem = styled.li`
`

export default Footer;