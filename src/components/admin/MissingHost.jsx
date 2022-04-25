import React, { useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import Heading from "../common/Heading";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const MissingHost = ({ id }) => {
  
  const [auth, setAuth] = useContext(AuthContext);

  return (
        <Container>
      {auth ? <StyledLink to={`/admin/add-host/${id}`}> <i className="fas fa-user-plus"></i>Add host</StyledLink>
        : <Wrapper>
            <Heading size="4">Host</Heading>
            <NoHost>No host added yet</NoHost>
          </Wrapper>
        }
        </Container>
  )
}

export default MissingHost

const Wrapper = styled.div`
  text-align: center;

  
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.seaWater};
    border-radius: 22px;

    @media (max-width: 980px) {
    display: none;
  }
`;

const NoHost = styled.p`
  padding: 0.2rem 1rem;
  background:${props => props.theme.clouds};
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.seaWater};
  display: flex;
  flex-direction: column;
  align-items: center;
`;