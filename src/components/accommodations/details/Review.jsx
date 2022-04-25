import React from 'react';
import Heading from "../../common/Heading";
import styled from "styled-components";

const Review = ({ i, attributes }) => {    
    const { title, name, rating, review_text } = attributes;

    
        let emojiFace;
        if (rating < 2)
        emojiFace = "🤬";
        if (rating > 2 && rating <= 4) {
            emojiFace = "😌";
        }
        else if (rating > 4 && rating <= 8) {
            emojiFace = "😁";
        }
        else if (rating > 8) {
            emojiFace = "🥳";
        } 
    
    
    
    
    return(
        <Container $index={i}>
            <Heading size="3">{title}</Heading>
            <Text>{review_text}</Text>
            <Rating>Rating: {rating}</Rating>
            <Name>- {name}</Name>
            <Emoji>{emojiFace}</Emoji>
        </Container>
    );
};

export default Review;

const Container = styled.div`
    width: 100%;
    max-width: 350px;
    height: auto;
    padding: 2.5rem;
    background: #f0efef;
    border-radius: 15px;
    position: relative;
    margin-top: 0.5rem;

    @media (max-width: 800px){
        max-width: 90%;
    }

    &:hover{
        background: ${props => props.$index % 2 === 0 ? "#f3e8e8" : "#e2eef3"};
    }
    &:hover span{
        top: -35px;
        transform:rotate(10deg);
    }
`;

const Text = styled.p`
    font-size: 1rem;
    color: #4b4b4b;
    padding: 1rem 0;
`;

const Rating = styled.p`
    font-size: 1.1rem;
    color: #e74606;
`;

const Name = styled.p`
    text-align: right;
    font-size: 1.1rem;
    color: #2f2f2f;
    font-weight: 600;
`;

const Emoji = styled.span`
    position: absolute;
    top: 0;
    right: 45px;
    z-index: -1;
    font-size: 2rem;
    transition: all 0.25s ease;
    transform:rotate(-5deg);
      

`;