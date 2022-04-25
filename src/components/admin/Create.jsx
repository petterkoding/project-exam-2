import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { BASE_URL } from '../../constants/API';
import { useForm } from 'react-hook-form';
import Heading from '../common/Heading';
import facility from "./facility.json"
import FormMessage from '../common/FormMessage';
import CreateMessage from '../common/CreateMessage';
import styled from "styled-components";

const Create = () => {
    const [published, setPublished] = useState(false);
    const [publishError, setPublishError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);
    const [id, setId] = useState("");
    
    const facilities = facility;

    const { handleSubmit, register, reset, formState } = useForm({ mode: "onChange" });

    const { errors, isValid } = formState;

    const url = `${BASE_URL}/api/establishments`;

    const formData = new FormData();

    async function onSubmit({ title, address, description, short_description, type, rating, beds, facilities, img }) {
        setSubmitting(true);
        setPublishError(null);
        const data = JSON.stringify({ title, address, description, short_description, type, rating, beds, facilities})        
        formData.append("data", data);
        formData.append('files.img', img[0]);
        const options = {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${auth.jwt}`,
            }
        }
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setPublished(true);
                setId(json.data.id); 
            }            
        } catch (error) {
            console.log(error)
            setPublishError(error.toString());
            setPublished(false);
        } finally {
            setSubmitting(false)
            reset();
        }
    }

    
    return (
        <>
            <Heading size="1">Start creating</Heading>
            {publishError && <CreateMessage type="error">{publishError}</CreateMessage>}
            {published && <CreateMessage type="success">New establishment created! <a href={`/accommodations/${id}`}>View it here <i className="fas fa-link"></i></a></CreateMessage>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset disabled={submitting}>
                    <InputField>
                    <Label htmlFor="title">Title:</Label>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Title"
                            {...register("title", {required: true, minLength: 3, maxLength:12})}/>
                            {errors.title && <FormMessage>Title must be between 3-12 characters</FormMessage>}
                    </InputField>
                    
                    <InputField>
                        <Label htmlFor="address">Address:</Label>
                        <Input
                            type="text"
                            name="address"
                            placeholder="Address"
                            {...register("address", {required: true, minLength: 8})}/>
                            {errors.address && <FormMessage>Address is required</FormMessage>}
                    </InputField>
                    
                    <InputField>
                        <Label htmlFor="description">Description:</Label>
                        <HelperText>(Describe the accommodation)</HelperText>
                        <TextArea
                            type="text"
                            name="description"
                            placeholder="start writing..."
                            {...register("description", {required: true, minLength: 10})}/>
                        {errors.description && <FormMessage>Description is too short</FormMessage>}
                    </InputField>

                    <InputField>
                        <Label htmlFor="short_description">Short Description:</Label>
                        <HelperText>(This will be the first thing they read, make it enticing!)</HelperText>
                        <SmallTextArea
                            type="text"
                            name="short_description"
                            placeholder="start writing..."
                            {...register("short_description", {required: true, minLength: 8})}/>
                        {errors.short_description && <FormMessage>Description is too short</FormMessage>}
                    </InputField>

                    <Flex>
                        <InputField style={{flex:3}}>
                            <Label htmlFor="title">Type:</Label>
                            <HelperText>(Please choose one)</HelperText>
                            <SmallSelect
                                type="text"
                                name="type"
                                {...register("type", { required: true, minLength: 1 })}>
                                <option value="">Please select</option>
                                <option value="apt">Apartment</option>
                                <option value="bnb">BnB</option>
                                <option value="hotel">Hotel</option>
                                <option value="guesthouse">Guesthouse</option>
                                <option value="house">House</option>
                            </SmallSelect>
                            {errors.type && <FormMessage>Type is required</FormMessage>}
                        </InputField>
                        <InputField style={{flex:2}}>
                            <Label htmlFor="beds">Beds:</Label>
                            <HelperText>(Minimum 1)</HelperText>
                            <Input
                                type="number"
                                name="beds"
                                placeholder="Beds"
                                {...register("beds", { required: true, min: 1, max: 80})} />
                            {errors.beds && <FormMessage>min. 1 max. 80</FormMessage>}
                        </InputField>

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
                    </Flex>

                    <InputField>
                        <Label htmlFor="facilities">Add Facilities</Label>
                        <CheckboxFlex>
                            {facilities.map((el) => {
                                return (
                                    <CheckboxContainer key={el.id} className="checkbox">
                                        <Label htmlFor={el.name}>{el.name}</Label>
                                        <input
                                            type="checkbox"
                                            name="facilities"
                                            value={el.id}
                                            {...register("facilities", {required: true})}/>
                                    </CheckboxContainer>
                                );
                               
                            })}
                        </CheckboxFlex>
                    </InputField>

                    <InputField >
                        <Label htmlFor="img">Image</Label>
                        <Input
                            type="file"
                            name="img"
                            accept="images/jpg, images/png"
                            {...register("img", {required: true})}/>
                        {errors.img && <p>Image is required</p>}
                    </InputField>

                    <Button type="submit" disabled={!isValid}>
                        {submitting ? "Publishing..." : "Publish"}
                    </Button>

                </Fieldset>
            </Form>
        </>
    );
};

export default Create;

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

const CheckboxFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0 2 0;
`;

const CheckboxContainer = styled.div`
    width: auto;
    text-align: center;
    padding: 5px 10px;
    background: #e4e4e4;
    background:#eeeeee;
    border-radius: 10px;
    
    label{
        white-space: nowrap;
        font-weight: 400;
        margin-bottom: 0.2rem;
        font-size: 0.8rem;
    }
        input{
            width: 30px;
            height: 30px;
            

            &:hover{
                cursor: pointer;
            }
        }
    &:hover{
        background: #d4d4d4;
    }  
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

const SmallSelect = styled.select`
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
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  height: 170px;
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

const SmallTextArea = styled(TextArea)`
    height: 120px;
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