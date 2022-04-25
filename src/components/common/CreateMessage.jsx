import React from 'react'
import styled from "styled-components";

const CreateMessage = ({ type, children }) => {
    return (
        <Message className={type}>
            {children}
        </Message>
    );
}

export default CreateMessage;


const Message = styled.div`
    margin-top: 5px;
    font-size: 1rem;
    padding: 0.5rem 0.7rem;
    color: black;
    text-align: center;
    border-radius: 22px;

    &.error{
        color: red;
        border: 1px solid red;
    }

    &.success{
        color: green;
        border: 1px solid green;
    }

    a{
        display: block;
        margin-top: 0.5rem;
        color: #0d3a8f;
        text-decoration: none;
        background: #ececf3;
        border: 1px solid #0d3a8f;
        padding: 2px 5px;
        border-radius: 15px;
    }
`;