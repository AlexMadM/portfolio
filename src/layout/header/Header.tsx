import React, {useState} from 'react';
import Logo from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

import {S} from './Header_Styles'
import MobileMenu from "./headerMenu/mobileMenu/MobileMenu";
import DesktopMenu from "./headerMenu/desktopMenu/DesktopMenu";




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
                        {width < breakpoint ? <MobileMenu/> : <DesktopMenu />}

                    </FlexWrapper>

                </Container>
            </S.Header>
        );
    };

    export default Header;

