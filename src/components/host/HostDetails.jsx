import React from 'react';
import styled from "styled-components";

const HostDetails = ({ details, show, setShow }) => {

  const {  name, description, rating, phone, email, picture: { data: { attributes: { url } } } } = details;

  return (
    <>
      <Card className={show ? "show" : "hidden"}>
        <Button onClick={() => setShow(!show)}><i className="fa fa-times"></i></Button>
        <Flex>
          <ProfilePic src={url} alt="a man wearing glasses"/>
          <InnerFlex>
            <Name>{name}</Name>
            <Rating>{rating} <i className="fas fa-medal"></i></Rating>
          </InnerFlex>
        </Flex>
        <Details>
          {description}
        </Details>
        <ContactInfo>
           <InfoContainer>
            tel: {phone}
          </InfoContainer>
          <InfoContainer>
            mail: {email}
          </InfoContainer>
        </ContactInfo>
        <GoToForm href="#contact-host" onClick={() => setShow(!show)}>Contact host</GoToForm>
      </Card>
      <Backdrop $isOpen={show} onClick={()=>setShow(false)}/>
    </>
  );
};

export default HostDetails;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 65px;
  background: #00000068;
  height: 100%;
  width: 100%;
  z-index: 5;
  display: none;

  @media (max-width: 980px) {
    display: ${props => props.$isOpen ? "block" : "none"};
  }
  @media (max-width: 680px) {
    top: 60px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  padding: 2rem;
  border: 1px solid ${props => props.theme.clouds};
  border-radius: 15px;
  transition: all 0.4s ease;

  @media (max-width: 980px) {
    position: absolute;
    top: calc(20vh);
    left: 0;
    height: auto;
    width: 100%;
    background: white;
    z-index: 100;
  }

  &.show{
    left: 0;
  }

  &.hidden{
    left: -100%;
  }

  @media (max-width:980px){
    margin-top: 1rem;
    max-width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const InnerFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  color: black;
  font-size: 1.4rem;
  @media (max-width:680px){
    font-size: 1rem;
  }
`;

const Rating = styled.span`
  color: red;
`;

const Details = styled.p`
  font-size: 1.1rem;
  color: #2a2a2a;
  padding: 1rem 0;
  margin-top: 2rem;
  max-width: 600px;

  @media (max-width:680px){
    margin-top: 0.5rem;
    padding: 0;
    font-size: 1rem;
  }

`;

const ContactInfo = styled.address`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  color: #4e4e4e;
 
`;

const InfoContainer = styled.span`
  padding: 0.2rem 0;
`;

const ProfilePic = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 2rem;

  @media (max-width: 1145px) {
    width: 75px;
    height: 75px;
    margin-right: 0.7rem;
    
  }

  @media (max-width: 680px){
    width: 60px;
    height: 60px;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #f8f8f8;
  border: none;
  display: none;
  transition: all 0.2s ease;

  i{
    font-size: 2rem;
    color: #575757;
  }

  &:hover{
    cursor: pointer;
    background: #eeeeee;
  }
  &:hover > i{
    color: #000000;
  }
  @media (max-width: 980px) {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
  }
`;

const GoToForm = styled.a`
  display: inline-block;
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #1d1d1d;
  border-radius: 20px;
  border: 1px solid black;
  margin-top: 1rem;
  transition: all 0.2s ease;

  &:hover{
    background: ${props => props.theme.seaBlack};
    color: white;
  }
`;