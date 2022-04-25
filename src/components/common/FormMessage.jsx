import React from 'react'
import styled from "styled-components";

const FormMessage = ({children }) => {
    return (
        <Message>
            {children} <i className="fas fa-exclamation-triangle"></i> 
        </Message>
    );
}

export default FormMessage;


const Message = styled.div`
    font-size: 0.9rem;
    padding: 0.5rem 0.4rem;
    color: red;
`;