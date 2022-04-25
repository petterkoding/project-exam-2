import React, {useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../constants/API";
import CreateMessage from "../common/CreateMessage";
import FormMessage from "../common/FormMessage";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";

const AddReview = ({id}) => {

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [sent, setSent] = useState(false);  
  
    const { handleSubmit, register, reset, formState } = useForm({ mode: "onChange" });
  
    const { errors, isValid, isDirty } = formState;
  
    async function onSubmit(data) {
      setSubmitting(true);
      setError(null);
      console.log(data)
      try {
        const response = await axios.post( `${BASE_URL}/api/reviews`, {
          data: data,
        });

        if (response.status === 200) {
          setSent(true);
        }
        console.log(response);
      } catch (error) {
        setError(error.toString());
      } finally {
        setSubmitting(false)
        reset();
      }
    }
  return (
    <Wrapper>
      <StyledHeading size="3">Add a Review</StyledHeading>
      <Paragraph>We appreciate your feedback.</Paragraph>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error && <CreateMessage type="error">{error}</CreateMessage>}
        {sent && !isDirty && <CreateMessage type="success">You've posted a Review!</CreateMessage>}
        <StyledField disabled={submitting}>
          
          <InputContainer>
              <Label htmlFor="subject">Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                {...register("title", {required: true, minLength: 5})}
              />
              {errors.title && <FormMessage>Required: min. 5 characters</FormMessage>}
          </InputContainer>
              
          <InputContainer>
              <Label htmlFor="review_text">Review</Label>
              <TextArea
                type="textarea"
                name="review_text"
                placeholder="Start writing here"
                {...register("review_text", {required:true, minLength: 15})}
              />
              {errors.review_text && <FormMessage>Review should be atleast 15 characters</FormMessage>}
          </InputContainer>
                
          <Flex>
            <InputContainer style={{flex: 1}}>
                <Label htmlFor="rating">Rating</Label>
                <Input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  defaultValue="1"
                  {...register("rating", {
                    required: true, min: 1, max: 10 })}
                    />
                {errors.rating && <FormMessage>Add rating number between 1-10</FormMessage>}
            </InputContainer>

            <InputContainer style={{flex: 3}}>
                <Label htmlFor="name">Your name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name", {required: true, minLength: 1})}
                  />
                {errors.name && <FormMessage>Name is required</FormMessage>}
            </InputContainer>
            
          </Flex>
          <InputContainer>
          <Input
              hidden
              style={{width: "40px"}}
              type="number"
              name="establishment"
              value={id}
            {...register("establishment", {required: true, min: 1})}/>
          </InputContainer>
          
          <Button type="submit" disabled={!isValid}>
            {submitting ? "Sending..." : "Send"}
          </Button>
          
        </StyledField>
      </Form>
    </Wrapper>
  )
}

export default AddReview

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const StyledHeading = styled.h3`
  color: black;
  font-size: 1.5rem;
`;

const Form = styled.form`
  padding: 2rem 3rem;
  background: #f0efef;
  border-radius: 15px;
  max-width: calc(800px + 2rem);
  height: auto;
  box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
  margin: 1rem 0 5rem 0;
  border: 1px solid black;

 
  @media (max-width: 680px){
    max-width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledField = styled.fieldset`
  border: none;
`;

const InputContainer = styled.div`
  margin: 0.3rem 0 1rem 0;
  position: relative;
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
  font-size: 1rem;
  background: white;
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

const TextArea = styled.textarea`
  border: none;
  outline: none;
  height: 130px;
  width: 100%;
  resize: none;
  background: white;
  font-size: 1rem;
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

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 0.6rem 1.6rem;
  border-radius: 15px;
  background: ${props => props.theme.seaBlack};
  color: white;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:disabled{
    background: ${props=>props.theme.disabledBg};
    color: ${props=>props.theme.disabledColor};
    &:hover{
        cursor: default;
    }
  }

  &:hover{
      cursor: pointer;
  }

  @media (max-width: 680px){
    padding: 1rem 2rem;
  }
`;

