import React from 'react';
import photo from '../../../assets/img/blogging 1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from '../../section/main/Main_Stules'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


const Main: React.FC = () => {
    return (
        <S.Main>

            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi</S.SmallText>
                        <S.Name>I am <span>Alexander</span></S.Name>

                        <S.MainTitle>
                            <p>I web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['I web Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay:150
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt  className="parallax-effect-img"
                           tiltMaxAngleX={40}
                           tiltMaxAngleY={40}
                           perspective={800}
                           transitionSpeed={1500}
                           scale={1.1}
                           gyroscope={true}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo}/>
                        </S.PhotoWrapper>
                    </Tilt>


                </FlexWrapper>
            </Container>

        </S.Main>
    );
};


export default Main;