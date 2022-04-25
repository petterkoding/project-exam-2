import React from 'react';
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import styled from "styled-components";

const TabLink = ({ attributes }) => {
  const { subject, message, text, email_from, createdAt } = attributes;


  return (
    <Toggle
      date={createdAt}
      subject={subject}
      email={email_from}>
      <MessageContainer layout transition={{ ease:[0.6, 0.01, -0.05, 0.95],duration: 0.3}} initial={{opacity: 0, y: 10}} animate={{opacity:1, y: 0}}>
        <Title layout>Message</Title>
        <EmailFrom layout>from: {email_from}</EmailFrom>
        <Message layout>{text}{message}</Message>
      </MessageContainer>
    </Toggle>

  );
};

export default TabLink;

const Title = styled.h5`
  font-size: 1rem;
  color: black;
  white-space: nowrap;
  margin-right: 2rem;
    @media (max-width: 680px){
      margin-right: 0;
      font-size: 0.9rem;
    }
`;

const MessageContainer = styled(motion.div)`
  transition: all 0.4s ease;
  padding: 1rem 0.5rem;
`;

const Message = styled.p`
  width: 100%;
  margin-top: 1rem;
  position: relative;
  max-width: 800px;

  &::before{
    content:"";
    position: absolute;
    width: 90%;
    height: 2px;
    background: ${props=>props.theme.clouds};
    left: 0;
    top: -5px;
  }
 
`;

const EmailFrom = styled.span`
  margin-right: 1rem;
    @media (max-width: 680px){
      font-size: 0.8rem;
    }
`;