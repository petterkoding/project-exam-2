import React from "react";
import LoginForm from "../components/login/LoginForm";
import Heading from "../components/common/Heading";
import Motion from "../components/motion/Motion";
import styled from "styled-components";

const Login = () => {

  document.title = "Holidaze | Login";

  return (
      <Motion>
        <Container>
          <Heading size="1">Login</Heading>
          <LoginForm />
        </Container>
      </Motion>
    );
};

export default Login;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;