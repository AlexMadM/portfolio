import React, {useState} from 'react';
import {S} from '../../HeaderMenu_Stules'
import Menu from "../menu/Menu";




const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {

const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtn =()=>{setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtn}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

export default MobileMenu;

