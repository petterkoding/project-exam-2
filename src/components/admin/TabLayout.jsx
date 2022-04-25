import React from 'react';
import { NavLink, Outlet, useLocation} from 'react-router-dom';
import Heading from '../common/Heading';
import styled from "styled-components";

const TabLayout = () => {
    
    const {pathname} = useLocation();
    let activeStyle;
    if (pathname === "/admin") {
        activeStyle = {
            background: "#DBD9EC",
            color: "#474747",
            transform: "translateY(0)",
            transition: "transform .1s ease"
        }
    }

    return (
    <Wrapper>
        <Heading size="2">Inbox</Heading>
        <CardContainer>
            <Tab to="/admin/?messages" style={activeStyle}>Messages</Tab>
            <Tab to="enquiries">Enquiries</Tab>
            <Card>
                <InnerContainer>
                    <Outlet />        
                </InnerContainer>
            </Card>
        </CardContainer>
    </Wrapper>
    );
};

export default TabLayout;

const Wrapper = styled.div`
    margin: 5rem 0 4rem 0;
`;

const InnerContainer = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
`;

const CardContainer = styled.div`
   margin: 2rem 0 .5rem 0;
`;

const Card = styled.div`
    width: 100%;
    height: auto;
    background: #DBD9EC;
    border-radius: 0 15px 15px 15px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    position: relative;
`;


const Tab = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 1.2rem;
    height: 40px;
    background: #ececec;
    color: #818181;
    border-radius: 15px 15px 0 0;
    padding: 0.5rem 1rem 2.7rem 1rem;
    transform: translateY(10px);
    transition: transform .25s ease;

        &:nth-child(2){
            margin-left:1rem;
        }

        &.active{
            background: #DBD9EC;
            transform: translateY(0);
            color: #1a1a1a;
            transition: transform 2s ease;
            font-weight: 600;
        }

        &:hover{
            cursor: pointer;
            background: #DBD9EC;
            color: #474747;
            transform: translateY(0);
            transition: transform .3s ease;
        }
`;

