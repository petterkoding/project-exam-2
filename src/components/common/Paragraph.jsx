import React from 'react';
import styled from "styled-components";

const Paragraph = ({children}) => {
    return <StyledP>{children}</StyledP>;
};

export default Paragraph;

const StyledP = styled.p`
    color: ${props => props.theme.darkGrey};
    font-size: 1.1rem;
    max-width: 660px;
    margin: 0.5rem 0;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;
