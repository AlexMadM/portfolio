import React from 'react';

import {S} from '../../HeaderMenu_Stules'
import Menu from "../menu/Menu";

const DesktopMenu:React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <S.DesktopMenu>
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
        </S.DesktopMenu>
    );
};

export default DesktopMenu;




