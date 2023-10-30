import React, {useState} from 'react';
import Logo from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import MobileMenu from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'
import DesktopMenu from "./desktopMenu/DesktopMenu";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);
        return (
            <S.Header>
                <Container>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <Logo/>
                        {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
                        <DesktopMenu menuItems={items}/>
                        <MobileMenu menuItems={items}/>
                    </FlexWrapper>

                </Container>
            </S.Header>
        );
    };

    export default Header;

