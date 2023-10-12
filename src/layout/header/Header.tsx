import React from 'react';
import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";

const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
          <Menu/>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
display: flex;
  justify-content: space-between;
`