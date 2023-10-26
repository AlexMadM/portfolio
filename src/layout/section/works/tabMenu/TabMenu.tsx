import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleTabMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return <ListItem key={i}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyleTabMenu>
    );
};

export default TabMenu;

const StyleTabMenu = styled.nav`

  ul {
    display: flex;
  
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`


const ListItem = styled.li`
 

`
