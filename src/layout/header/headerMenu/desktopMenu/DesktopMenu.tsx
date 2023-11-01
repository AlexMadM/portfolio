import React from 'react';

import {S} from '../../HeaderMenu_Stules'
import Menu from "../menu/Menu";

const DesktopMenu:React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>

        </S.DesktopMenu>
    );
};

export default DesktopMenu;




