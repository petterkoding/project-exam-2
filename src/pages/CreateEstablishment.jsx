import React from 'react'
import Create from '../components/admin/Create';
import Motion from '../components/motion/Motion';
import styled from 'styled-components';

const CreateEstablishment = () => {

    document.title = "Holidaze | Create new establishment";

    return (
        <Motion>
            <Container>
                <Create/>
            </Container>
        </Motion>
    )
}

export default CreateEstablishment

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;