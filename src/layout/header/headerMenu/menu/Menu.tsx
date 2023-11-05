import React from 'react';
import {S} from './../../HeaderMenu_Stules'



const items = [
    {
        title:'Home',
        href:'home'
    },
    {
        title:'Skills',
        href:'skills'
    },
    {
        title:'Works',
        href:'works'
    },
    {
        title:'Testimony',
        href:'testimony'
    },

]

const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, i) => {
                return <S.MenuItem key={i}>
                    <S.NavLink activeClass="active"  smooth={true} spy={true}  to={item.href}>{item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

export default Menu;


