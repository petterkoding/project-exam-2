import React from 'react'
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";
import styled from "styled-components";

const FeaturedEstablishment = ({ attributes, id}) => {

    const { title, rating, img: { data: { attributes: { url, alternativeText } } } } = attributes;
    
  return (
        <Card
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <StyledLink to={`/accommodations/${id}`}>
              <Title>{title}</Title>
              <Container>
                  <CoverImage src={url} alt={alternativeText} />
                  <RatingStars>{rating}<i className="fas fa-star"></i></RatingStars>
              </Container>
            </StyledLink>
        </Card>
    )
}

export default FeaturedEstablishment


const Card = styled(motion.div)`
    width: 100%;
    height: 300px;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 980px){
        width: 100%;
    }
`;

const Container = styled.div`
    position: relative;
`;

const Title = styled.h3`
    font-weight: 400;
    font-size: 1.3rem;
    color: #272727;

    @media (max-width: 480px){
        font-size: 1rem;
    }
`;

const CoverImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: grayscale(50%);
    
    @media (max-width: 980px) {
        height: 220px;
    }
`;


const StyledLink = styled(Link)`
    text-decoration: none;
`;

const RatingStars = styled.span`
    font-size: 1rem;
    background: #eeeeee;
    border-radius: 15px;
    padding: 2px 7px;
    color: #505050;
    position: absolute;
    right: 20px;
    top: 10px;
    
    i{
        color: #e2ae02;
    }
`;