import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabStatusType ='all' | 'landing' | 'react' | 'spa'

export type TabMenuPropsType = {
    tabsItems: Array<{status: TabStatusType, title: string, }>
        changeFilterStatus: (value:TabStatusType)=> void
    currentFilterStatus:string
}

const TabMenu = (props:TabMenuPropsType ) => {
    return (
        <StyleTabMenu>
            <ul>
                {props.tabsItems.map((item, i) => {
                    return <ListItem key={i}>
                        <Link active={props.currentFilterStatus===item.status} as={'button'} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
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
