import React from 'react';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import { Link } from 'react-router-dom';

import styled from "styled-components";

const WelcomeUser = ({ username }) => {
    
    let name = username;
    if (!name) {
        name = "Admin";
    }

      return(
        <Container>
              <Heading size="1">Hey, {name}👋</Heading>
              <InnerContainer>
                <Heading size="2">Create and Publish <span><i className="fas fa-pencil-alt"></i></span></Heading>
                <Paragraph>Add new establishments by filling out the form.</Paragraph>
                <Button to="./create-establishment">Create</Button>
              </InnerContainer>
        </Container>
    );
};

export default WelcomeUser;

const Container = styled.div`
    margin: 2rem 0 1rem 0;
`;

const Button = styled(Link)`
    text-decoration: none;
    display: inline-block;
    border: none;
    font-size: 1.3rem;
    margin-top: 1rem;
    padding: 1rem 2rem;
    background: ${props => props.theme.seaLight};
    color: white;
    border-radius: 25px;
    transition: all .2s ease;
    
    &:hover{
        background: ${props => props.theme.seaBlack};
        color: white;
    }
`;


const InnerContainer = styled.div`
    padding: 2rem 1rem;
    margin-top: 3rem;
    background: #f3f0f0;
    border-radius: 15px;
`;
