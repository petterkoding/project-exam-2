import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";

const Loading = () => {
    const loadingText = "Loading ...";
  return (
      <Container>
          {[...loadingText].map((letter, i) => (
              <motion.span
                  key={i}
                  initial={{ y: -10, rotate: "-20deg", opacity: 0 }}
                  animate={{ y: 0, rotate: "0deg", opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity, repeatType: "loop", repeatDelay: 1}}>
                  {letter}
              </motion.span>
          ))}
      </Container>
  )
}

export default Loading

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 25vh;
    background: #f3f7f8;
    background: inherit;
    z-index: 9999999;
    font-size: 1.2rem;
`;