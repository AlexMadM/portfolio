import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import Menu from "../menu/Menu";

const DesktopMenu:React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems}/>
            {  /*     <ul>
                {props.menuItems.map((item,i)=>
                {
                    return <ListItem key={i}>
                        <Link href="">{item}
                        <Mask>
                            <span>{item}</span>
                        </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>*/}
        </StyledDesktopMenu>
    );
};

export default DesktopMenu;

const StyledDesktopMenu = styled.nav`
ul{
  display: flex;
  gap: 30px;
  justify-content: center;
  
}
  
  
`


