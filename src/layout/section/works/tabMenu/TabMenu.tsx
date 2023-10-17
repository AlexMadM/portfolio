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
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`
 

`
