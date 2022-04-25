import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import market from "../../assets/market.jpg";
import styled from "styled-components";


const HeroSection = ({ establishments }) => {
 
  const [suggestions, setSuggestions] = useState([]);

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    if (searchValue.length > 0) {
      const suggestion = establishments.filter((el) => el.attributes.title.toLowerCase().includes(searchValue));
      setSuggestions(suggestion)
    }else {
      setSuggestions([])
    }
  }
  return (
    <Wrapper>
      <Flex>
        <div>
          <Hidden>
            <Heading
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2, delay: 2.5 }}>
              Visit Bergen
            </Heading>
          </Hidden>
          <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ ease: [0,.13,.43,.98], duration: 2.2, delay: 3.1 }}>
            <Paragraph>
              Find enjoyable accommodation in Bergen
            </Paragraph>
          </motion.div>
        </div>

        <div>
          <InputContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2.8, delay: 2.4 }}>
              <Label
                htmlFor="main-search">
                Search now</Label>
            <Input
                autoComplete="off"
                type="search"
                id="main-search"
                name="main-search"
                onChange={searchHandler}
                placeholder="Apartments, guesthouses, hotels..."/>
            <SuggestList>
              {suggestions.map(title => {
                return (
                  <Suggestions
                    key={title.id}
                    to={`accommodations/${title.id}`}>{title.attributes.title}
                  </Suggestions>
                 
                )
              })}
            </SuggestList>
          </InputContainer>
        </div>
      </Flex>
      
      <AnimateContain
        initial={{y: -180,opacity: 0, height: "900px"}}
        animate={{y: 0, opacity: 1, height: "340px"}}
        transition={{ duration: 3, delay: 0.2 }}>
        
        <AnimText1
          initial={{opacity: 0, y:20}}
          animate={{opacity: [0,1,1]}}
          transition={{duration: 4, delay: 0.6}}
          >Accommodations
        </AnimText1>
      </AnimateContain>
      
    </Wrapper>
  );
};

export default HeroSection;

const AnimText1 = styled(motion.span)`
  display: block; 
  font-size: calc(4rem + 5vw);
  color: #f0e9e7;

  @media (max-width: 980px){
    font-size: calc(3rem + 2vw);
  }
  @media (max-width: 480px){
    font-size: 2.4rem;
  }
`;

const AnimateContain = styled(motion.div)`
  margin-top: 1rem;
  background-image: url(${market});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: calc(100% - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 20vh;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  column-gap: 3rem;
  
  @media (max-width:680px){
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;

const Heading = styled(motion.h1)`
  font-size: 60px;
  color: #111111;

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
  color: #1a1a1a;
`;

const Label = styled(motion.label)`
  display: block;
  font-size: 1.1rem;
  color: #181818;
  font-weight: 500;
`;

const InputContainer = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 100%;
  @media (max-width:680px){
    width: 100%;
  }
`;

const Input = styled.input`
  display: inline;
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  font-size: 1.2rem;
  padding: 7px;
  position: relative;
  z-index: 20;
  background: #f5f1f1;
  border: 1px solid #3d2727;
  border-radius: 5px;
  
  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
`;

const SuggestList = styled.div`
  background: white;
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  z-index: 100000;
  display: flex;
  flex-direction: column; 
`;

const Suggestions = styled(Link)`
  width: 100%;  
  height: 40px;
  color: black;
  list-style: none;
  border-bottom: 1px solid #58585854;
  display: flex;
  flex-direction: column;
  justify-content:center;   
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.2s ease;
  padding-left: 7px;

    &:hover{
      background: #e2e2e2;
    }
`;

