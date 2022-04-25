import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Accommodation = ({ attributes, id }) => {
    const { type,
        short_description, address,
        title,
        rating,
        img: {
            data: {
                attributes: {
                    url
                }
            }
        }
    } = attributes;
    return(
        <CardLink to={`./${id}`}>
            <ImgContainer>
                <Image src={url} alt={title}/>
            </ImgContainer>
            <TextContainer>
                <Info><span>{type}</span>  {address}</Info>
                <Title>{title}</Title>
                <Description>{short_description}</Description>
                <Rating>{rating} <i className="fas fa-star"></i></Rating>
            </TextContainer>
        </CardLink>
    );
};



export default Accommodation;


const CardLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.2rem;
    background: ${props => props.theme.seagull};
    margin: 1rem 0;
    text-decoration: none;
    color: black;
    transition: all .2s ease;

    @media (max-width: 800px) {
        flex-direction: column;
        /* img{
            width: 100%;
            height: 290px;
        } */

    }

    &:hover{
        background: #d8d8d8d4;
    }
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const TextContainer = styled.div`
    flex: 2;
    margin-left: 2rem;
    @media (max-width: 800px) {
        margin-left: 0;
    }
`;

const Image = styled.img`
    display: block;
    width: 400px;
    height: 300px;
    object-fit: cover;

    @media (max-width: 800px) {
        width: 100%;
        height: 390px;
    }
    @media (max-width: 680px) {
        width: 100%;
        /* height: 230px; */
    }
    @media (max-width: 500px) {
        height: 260px;
    }
`;

const Info = styled.span`
    display: block;
    color: #a7a7a7;
    margin-top: 2rem;

    span{
        color: ${props => props.theme.seaLight};
        border: 1px solid ${props => props.theme.seaLight};
        border-radius: 15px;
        padding: 2px 6px;
        margin-right: .5rem;
    }
`;

const Title = styled.h3`
    text-transform: capitalize;
    color: #2c2c2c;
    margin-top: 2rem;
`;

const Description = styled.span`
    display: block;
    color: #3d3d3d;
    margin-top: 0.5rem;
`;

const Rating = styled.span`
    display: block;
    color: ${props => props.theme.orangeWood};
    margin-top: 2rem;
`;

