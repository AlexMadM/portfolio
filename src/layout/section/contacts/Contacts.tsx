import React from 'react';
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from '../contacts/Contact_Styles'

const Contacts: React.FC = () => {
    return (
        <S.Contacts>

           <Container>
               <SectionTitle>
                   Contact
               </SectionTitle>
               <S.Form>
                   < S.Field placeholder={'name'}/>
                   < S.Field placeholder={'subject'}/>
                   < S.Field placeholder={'message'} as={'textarea'}/>
                   <Button type={"submit"}>Send Message</Button>
               </S.Form>
           </Container>

        </S.Contacts>
    );
};



export default Contacts;