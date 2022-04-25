import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";
import TabLink from './TabLink';
import { motion } from "framer-motion";
import Loading from '../loading/Loading';
import CreateMessage from '../common/CreateMessage';
import styled from "styled-components";



const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const http = useAxios();

    useEffect(() => {
        async function getEnquiries() {
            try {
                const response = await http.get("/api/enquiries");
                const json = response.data.data;
                setEnquiries(json);
            } catch (error) {
                console.log(error)
                setError(error.toString());
                setLoading(false);
            } finally {
                setLoading(false); 
            }
        }
        
        getEnquiries();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) return <CreateMessage>{error}</CreateMessage>;

    if (loading) return <Loading />;

    
    return (
            <Container
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: 10, transition: { duration: 2 } }}>
                
                {enquiries?.map((enq, id) =>
                    <TabLink key={id} attributes={enq.attributes}/>
                )}
            </Container> 
    );
};

export default Enquiries;

const Container = styled(motion.div)`
    width: 100%;
    height: auto;
`;
