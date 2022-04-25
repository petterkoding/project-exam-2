import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";
import TabLink from './TabLink';
import { motion } from "framer-motion";
import Loading from '../loading/Loading';
import CreateMessage from '../common/CreateMessage';
import styled from "styled-components";


const Messages = () => {

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const http = useAxios();

    useEffect(() => {
        async function getData() {
            try {
                const response = await http.get("/api/messages");
                const json = response.data.data;
                setMessages(json);
            } catch (error) {
                console.log(error)
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        
        getData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) return <CreateMessage>{error}</CreateMessage>;

    if (loading) return <Loading />;
    
    return (
        <Container
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>            
            {messages?.map((msg, id) =>
                <TabLink key={id} attributes={msg.attributes}/>
            )}
        </Container>
    );
};

export default Messages;

const Container = styled(motion.div)`
    width: 100%;
    height: auto;
`;
