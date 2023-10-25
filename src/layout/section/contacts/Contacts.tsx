import React from 'react';


import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

const Contacts = () => {
    return (
        <StyledContacts>

           <Container>
               <SectionTitle>
                   Contact
               </SectionTitle>
               <StyledForm>
                   < Field placeholder={'name'}/>
                   < Field placeholder={'subject'}/>
                   < Field placeholder={'message'} as={'textarea'}/>
                   <Button type={"submit"}>Send Message</Button>
               </StyledForm>
           </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`


`
const StyledForm = styled.form`
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  textarea{
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;
  color: #495057;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: ${theme.colors.font};
  &::placeholder{
    color: ${theme.colors.placeholdeColor};
    text-transform: capitalize;
    
    &:focus-visible{
      outline: 1px solid ${theme.colors.borderColor};
    }
  }
  
`

export default Contacts;