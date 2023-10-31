import React from 'react';
import {S} from './../../HeaderMenu_Stules'

const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, i) => {
                return <S.MenuItem key={i}>
                    <S.Link href="">{item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuItem>
            })}
        </ul>
    );
};

export default Menu;


