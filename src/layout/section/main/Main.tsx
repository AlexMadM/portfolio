import React from 'react';
import photo from '../../../assets/img/blogging 1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from '../../section/main/Main_Stules'
const Main: React.FC = () => {
    return (
        <S.Main>

            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi</S.SmallText>
                        <S.Name>I am <span>Alexander</span></S.Name>
                        <S.MainTitle>I  web Developer</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo}/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>

        </S.Main>
    );
};



export default Main;