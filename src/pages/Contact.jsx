import React from 'react'
import styled from "styled-components";
import Heading from '../components/common/Heading';
import ContactForm from '../components/contact/ContactForm';
import Motion from '../components/motion/Motion';

const Contact = () => {

  document.title = "Holidaze | Contact us";

  return (
    <Motion>
      <Container>
        <Heading size="1">Contact us</Heading>
        <ContactForm />
      </Container>
    </Motion>
  )
}

export default Contact


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

