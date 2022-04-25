import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import FormMessage from '../common/FormMessage';
import CreateMessage from '../common/CreateMessage';
import { motion } from "framer-motion";
import styled from "styled-components";

const SignupForm = () => {

    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState("");


    const { handleSubmit, register, reset, formState } = useForm({ mode: "onChange" });

    const { errors, isValid } = formState;

    async function onSubmit(data) {
        try {
            setSubmitting(true);
            setSent(true);
            setEmail(data)
        } catch (err) {
            console.log(err)
        } finally {
            reset();
            setSubmitting(false);
        }     
    }

  return (
        <Container
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 1.3}}>
            <Text>
              <h4>Not a member?</h4>
              <p>Join now, it's 100% FREE!</p>
              <p>Get access to the Holidaze advantage program.</p>
            </Text>
            {sent && <CreateMessage type="success">Thanks for signing up! Confirmation is sent to {email.email}</CreateMessage>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset disabled={submitting}>
                    <InputContainer>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="eg. holidaze@email.com"
                                {...register("email", { required: true, pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }})}
                            />
                            <SignUpButton type="submit" disabled={!isValid}>Sign up</SignUpButton>
                        </div>
                        {errors.email && <FormMessage>Email must be valid</FormMessage>}
                    </InputContainer>
                </Fieldset>
            </Form>
        </Container>
    )
}

export default SignupForm

const Form = styled.form`
  background: #ffffff;
  border-radius: 15px;
  width: 600px;
  box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
  position: relative;
  margin-top: 2rem;

  &:before{
    position: absolute;
    content:"";
    left: -4px;
    top: -4px;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: rgb(19,100,222);
    background: linear-gradient(49deg, rgba(19,100,222,1) 4%, rgba(83,48,93,1) 95%);  
    z-index: -1;
    padding: 4px;

  }

  @media (max-width: 680px){
    max-width: 100%;
    padding: 1rem 0.5rem;
  }
`;

const Container = styled(motion.div)`
    width: 70%;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 680px){
        width: 100%;
    }
`;

const Text = styled.div`
    text-align: center;
    margin: 1rem 0 2rem 0;

    h4{
        font-size: 1.3rem;
        color: black;
    }

    p{
        color: ${props => props.theme.darkGrey};
        font-size: 1.1rem;
    }
`;


const Input = styled.input`
    width: 80%;
    height: 40px;
    border: none;
    outline: none;
    font-size: 1rem;
    background: none;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    padding: 7px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.1);

    &::placeholder {
        font-size: 0.9rem;
        color: ${(props) => props.theme.lightGrey};
    }

    &:focus{
        border: 2px solid #2c9dd1;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #363636;
`;

const InputContainer = styled.div`
    margin: 0.5rem 0 2rem 0;
    position: relative;
    width: 100%;
    margin: 0 auto;
`;

const Fieldset = styled.fieldset`
    border: none;
    padding: 3rem 1rem;
`;

const SignUpButton = styled.button`
    width: 17%;
    height: 40px;
    border: none;
    margin-left: 0.3rem;
    border-radius: 15px;
    font-size: 1rem;
    background: rgb(19,100,222);
    color: white;
    font-weight: 400;
    transition: all 0.15s ease;

    &:hover{
        cursor: pointer;
        background: ${props => props.theme.seaBlack};
        color: white;
    }

    @media (max-width: 680px){
        width: 18%;
        font-size: 0.9rem;
    }
`;