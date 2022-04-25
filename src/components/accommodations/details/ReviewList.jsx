import React from 'react';
import Review from "./Review";
import Heading from '../../common/Heading';
import styled from "styled-components";

const ReviewList = ({ reviews }) => {    
    return (
        <Container>
            <Heading size="2">Reviews (<ReviewCount>{reviews?.length}</ReviewCount>)</Heading>
            <Flex>
                {reviews.length > 0 ?
                    reviews?.map(
                        (rev, i) => {
                            return <Review
                                key={rev.id}
                                attributes={rev.attributes}
                                i={i}/>
                        })
                : <NoReviews>Seems like there's no reviews yet.</NoReviews>}
                 
            </Flex>
        </Container>
    );
};

export default ReviewList;

const Container = styled.div`
    margin-top: 4rem;
    margin-bottom: 7rem;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 1rem 0 4rem 0;
`;

const ReviewCount = styled.span`
    color: #5f5f5f;
    font-size: 1.3rem;
    padding: 0 2px;
`;

const NoReviews = styled.span`
    font-size: 1rem;
    color: #626262;
`;