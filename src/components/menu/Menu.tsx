import React from 'react';
import styled from "styled-components";



const Menu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item,i)=>
                {
                return <li key={i}><a href="">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

export default Menu;

const StyledMenu = styled.nav`
ul{
  display: flex;
  gap: 30px;
  justify-content: center;
}
`