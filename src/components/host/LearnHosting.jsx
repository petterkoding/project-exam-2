import React from 'react';
import host from "../../assets/host.jpg"
import boat from "../../assets/boat.jpg"
import Heading from '../common/Heading';
import { motion } from "framer-motion";
import styled from 'styled-components';

const LearnHosting = () => {
    return (
        <Wrapper
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 1}}
        >   
            <Grid>
                <TextContainer>
                    <Heading size="2">Say Hi to Lars 👋</Heading>
                    <Paragraph>
                        At just 24 years old, he's been hosting for hundreds of tourists for 3 years.
                        He's ready to share his success with you.
                    </Paragraph>
                    <Button>Learn more</Button>
                </TextContainer>
                
                <ImageContainer>
                    <Image src={host} alt="smiling young man" />
                </ImageContainer>
            </Grid>

            <Grid>
                <ImageContainer>
                    <Image src={boat} alt="Boat docked at the harbour in Bergen" />
                </ImageContainer>
                
                <TextContainer>
                    <Heading size="2">Ahoy Cpt</Heading>
                    <Paragraph>
                        He loves the sea and offers smooth sailing on his boat.
                        This sought after trip will definitely put a smile on your face.
                    </Paragraph>
                </TextContainer>
            </Grid>
        </Wrapper>
    );
};

export default LearnHosting;

const Wrapper = styled(motion.div)`
    position: relative;
    margin-bottom: 10rem;
    margin: 7rem 0;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    height: 100%;
    margin-bottom: 5rem;
`;


const TextContainer = styled.div`
    color: #000000;
    padding: 1rem 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 980px){
        padding: 3rem 0;
    }
`;

const Paragraph = styled.p`
    max-width: 550px;
    margin-top: 2rem;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 600px;
    object-fit: cover;
    padding: 4rem;
    @media(max-width: 980px){
        width: 100%;
        padding: 2rem;
        margin: 0 auto;
        padding: 0;
        height: 300px;
    }
`;

const Button = styled.button`
    border: 1px solid black;
    padding: 1rem 2rem;
    border-radius: 22px;
    background: transparent;
    margin-top: 4rem;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover{
        cursor: pointer;
        background: ${props => props.theme.seaBlack};
        color: white;
    }
`;
