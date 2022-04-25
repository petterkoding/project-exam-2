import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Footer = () => {
    return (
        <SFooter>
            <Container>
                <FlexContainer>
                    <Address>
                        <span>Holidaze Travels&reg;</span>
                        <span>Bryggaveien 32,</span>
                        <span>5014, Bergen</span>
                    </Address>
                    <List>
                        <FooterLinks to="#">About us</FooterLinks>
                        <FooterLinks to="#">Hosting</FooterLinks>
                        <FooterLinks to="#">Members</FooterLinks>
                        <FooterLinks to="#">FAQ</FooterLinks>
                    </List>
                    <List>
                        <FooterLinks to="#">Help</FooterLinks>
                        <FooterLinks to="/contact-us">Contact</FooterLinks>
                        <FooterLinks to="#">Insurance</FooterLinks>
                        <FooterLinks to="#">Policy</FooterLinks>
                    </List>
                </FlexContainer>
            </Container>
        </SFooter>
    );
};

export default Footer;

const SFooter = styled.footer`
    height: 180px;
    margin-top: 7rem;
    color: black;
    flex-shrink: 0;
    border-top: 1px solid #554949;
`;

const Address = styled.address`
    display: flex;
    flex-direction: column;

`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 92rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 1rem;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const List = styled.ul`
    list-style: none;
`;

const FooterLinks = styled(Link)`
    display: block;
    text-decoration: none;
    padding: 0.3rem 0.5rem;
    background: transparent;
    color: black;
    transition: all 0.15s ease;

    &:hover{
        cursor: pointer;
        background: #acacac8a;
    }
`;

