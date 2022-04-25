import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constants/API';
import { useForm } from 'react-hook-form';
import FormMessage from '../common/FormMessage';
import CreateMessage from '../common/CreateMessage';
import styled from "styled-components";

const HostForm = () => {
    const [added, setAdded] = useState(false);
    const [publishError, setPublishError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);

    const { handleSubmit, register, reset, formState } = useForm({ mode: "onChange" });

    const { errors, isValid } = formState;

    const url = `${BASE_URL}/api/hosts`;

    const formData = new FormData();

    const { id } = useParams();

    const idToNum = parseInt(id);
    
    async function onSubmit({ name, description, email, phone, rating, picture, establishment }) {
        setSubmitting(true);
        setPublishError(null);
        const data = JSON.stringify({ name, description, email, phone, rating, establishment});
        formData.append("data", data);
        formData.append('files.picture', picture[0]);
        const options = {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${auth.jwt}`,
            }
        }
        try {
            const response = await fetch(url, options);
            console.log(response)
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setAdded(true);
            }            
        } catch (error) {
            console.log(error)
            setPublishError(error.toString());
            setAdded(false);
        } finally {
            setSubmitting(false)
            // reset();
        }
    }

    
    
    return (
        <>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
            {publishError && <CreateMessage type="error">{publishError}</CreateMessage>}
            {added && <CreateMessage type="success">New host added! <a href={`/accommodations/${id}`}>View it here <i className="fas fa-link"></i></a></CreateMessage>}
                <Fieldset disabled={submitting}>
                    <InputField>
                    <Label htmlFor="name">Name:</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            {...register("name", {required: true, minLength: 3, maxLength:15})}/>
                            {errors.name && <FormMessage>Name must be between 3-15 characters</FormMessage>}
                    </InputField>

                    <InputField>
                        <Label htmlFor="description">Description:</Label>
                        <HelperText>(Describe the host)</HelperText>
                        <TextArea
                            type="text"
                            name="description"
                            placeholder="start writing..."
                            {...register("description", {required: true, minLength: 10})}/>
                        {errors.description && <FormMessage>Description is too short</FormMessage>}
                    </InputField>
                    
                    <InputField>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            {...register("email", {
                                required: true, pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }})}/>
                            {errors.email && <FormMessage>Email must be valid</FormMessage>}
                    </InputField>

                    <InputField>
                        <Label htmlFor="phone">Phone:</Label>
                        <Input
                            type="number"
                            name="phone"
                            placeholder="Phone number"
                            {...register("phone", {
                                required: true, maxLength: 10})}/>
                            {errors.phone && <FormMessage>Phone number is required</FormMessage>}
                    </InputField>
                    
                

                    <Flex>
                        <InputField style={{flex:1}}>
                            <Label htmlFor="rating">Rating:</Label>
                            <HelperText>(1-10)</HelperText>
                            <Input
                                type="number"
                                name="rating"
                                defaultValue="1"
                                min="1"
                                max="10"
                                placeholder="1-10"
                                style={{width: "80px"}}
                                {...register("rating", { required: true, min: 1, max: 10 })} />
                            {errors.rating && <FormMessage>Must be a number 1-10</FormMessage>}
                        </InputField>
                        
                        <InputField style={{flex:2}}>
                            <Label htmlFor="picture">Picture:</Label>
                            <HelperText>(Profile picture)</HelperText>
                            <Input
                                type="file"
                                name="picture"
                                // accept="images/jpg, images/png"
                                {...register("picture", { required: true})} />
                            {errors.picture && <FormMessage>Picture is required</FormMessage>}
                        </InputField>
                    </Flex>

                   
                    <input
                        hidden
                        type="number"
                        name="establishment"
                        value={idToNum}
                        {...register("establishment", {required: true})}/>
                                   

                    <Button type="submit" disabled={!isValid}>
                        {submitting ? "Add..." : "Adding"}
                    </Button>

                </Fieldset>
            </Form>
        </>
    );
};

export default HostForm;

const Form = styled.form`
    padding: 2rem 3rem;
    background: #ffffff;
    border-radius: 15px;
    width: 100%;
    max-width: 700px;
    box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
    position: relative;
    margin: 2rem 0 5rem 0;

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

    @media (max-width: 680px){
        max-width: 100%;
        padding: 1.5rem 2rem;
    }
`;

const InputField = styled.div`
    margin: 0.8rem 0 1.3rem 0;
    position: relative;
    width: 100%;
`;

const Fieldset = styled.fieldset`
    border: none;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.8rem;
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


const TextArea = styled.textarea`
  border: none;
  outline: none;
  height: 130px;
  width: 100%;
  resize: none;
  background: none;
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
  padding: 1rem 2rem;
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

const HelperText = styled.span`
    display: block;
    font-size: 0.8rem;
    color: #6b6b6b;
    font-weight: 400;
    padding-left: 3px;
`;