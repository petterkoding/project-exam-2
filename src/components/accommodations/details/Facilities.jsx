import React from 'react';
import styled from "styled-components";
import Heading from '../../common/Heading';

const Facilities = ({ list, beds }) => {

    return (
        <Container>
            <Heading size="2">What you get</Heading>
            <List>
               { beds && <ListItem>{beds} beds</ListItem>}
                {list.map(el => {
                    return (
                        <ListItem key={el.id}>{el.attributes.name}</ListItem>
                    )
                })}
            </List>
        </Container>
   );
};

export default Facilities;


const Container = styled.div`
    margin: 4rem 0;
`;

const List = styled.ul`
    list-style: none;
    margin: 0.5rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    padding: 0.7rem 1rem;
    margin: .5rem 0.3rem .5rem 0;
    background: ${props=>props.theme.clouds};
`;