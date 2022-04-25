import React from 'react'
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import { motion } from 'framer-motion';
import styled from "styled-components";

const Tags = ({ icon, x, y, color, s }) => {
    
    const styles = {
        position: "absolute",
        left: x,
        top: y,
        color: color,
        fontSize: s,
    }
    return (
       <i style={styles} className={icon}></i>
    )
}

const Discount = () => {
  return (
        <Box
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 1.2}}>
            <Heading size="4">Early Spring Discount</Heading>
            <Paragraph>Get 15% OFF on all orders from March 1st 2022.</Paragraph>
            <Span>(Use code at checkout. Only for members*)</Span>
            <Code>"Spring2022"</Code>
            <Tags icon="fas fa-tag" x="10%" y="-10%" color="#0d7e40" s="30px"/>
            <Tags icon="fas fa-tag" x="90%" y="55%" color="#0d7e40" s="36px"/>
        </Box>
  )
}

export default Discount

const Box = styled(motion.div)`
    margin: 0 auto;
    width: 70%;
    height: 120px;
    padding: 5rem 2rem;
    border: 1px solid #026b31;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 680px) {
        width: 100%;
    }
`;

const Span = styled.span`
    margin: 0.1rem 0 1rem 0;
    color: grey;
    font-size: 0.8rem;
`;

const Code = styled.span`
    color: mediumseagreen;
    color: #0d7e40;
    font-size: 1.2rem;
    text-transform: uppercase;
`;