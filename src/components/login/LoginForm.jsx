import React, {useState, useContext} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import CreateMessage from "../common/CreateMessage";
import FormMessage from "../common/FormMessage";
import styled from "styled-components";

const LoginForm = () => {

  const [auth, setAuth] = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { handleSubmit, register, formState } = useForm({ mode: "onChange" });

  const { errors, isValid } = formState;

  const history = useNavigate();

  const URL = `${BASE_URL}/api/auth/local/`;

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    try {
      const response = await axios.post(URL, data);
      setAuth(response.data);
      history("/admin")
    } catch (error) {
      setLoginError( error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <CreateMessage type="error">{loginError}</CreateMessage>}
      <StyledField disabled={submitting}>
        
        <InputContainer>
          <Label htmlFor="identifier">Username</Label>
          <Input
            type="text"
            name="identifier"
            placeholder="Username"
            {...register("identifier", {required: true, minLength: 3})}
          />
          {errors.username && <FormMessage>Username must be atleast 3 characters</FormMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password", {required: true, minLength: 5})}
          />
          {errors.password && <FormMessage>Password must be atleast 5 characters</FormMessage>}
        </InputContainer>

        <Button type="submit" disabled={!isValid}>
          {submitting ? "Logging in" : "Log in"}
        </Button>
      </StyledField>
    </Form>
  );
};

const Form = styled.form`
  padding: 2rem 3rem;
  background: white;
  border-radius: 15px;
  width: 100%;
  max-width: 440px;
  box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
  position: relative;
  margin-top: 2rem;

  &:before{
    position: absolute;
    content:"";
    left: -7px;
    top: -7px;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: rgb(19,100,222);
    background: linear-gradient(49deg, rgba(19,100,222,1) 4%, rgba(83,48,93,1) 95%);  
    z-index: -1;
    padding: 7px;

}
`;

const StyledField = styled.fieldset`
  border: none;
`;

const InputContainer = styled.div`
  margin: 0.5rem 0 2rem 0;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #363636;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 7px;
  font-size: 1.1rem;
  background: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
`;

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  background: ${props => props.theme.seaWater};
  color: white;

    &:disabled{
      background: ${props => props.theme.lightGrey};
    }
    &:hover{
      cursor: pointer;
    }

    @media (max-width: 680px){
    padding: 1rem 2rem;
  }
`;

export default LoginForm;
