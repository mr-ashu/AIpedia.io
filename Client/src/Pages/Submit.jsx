import React, { useState } from 'react'
import Multistep from '../Components/Submit/Mulistepfrom'
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import notification from '../Components/Toast';
 

export const Submit = () => {

  const [integration, setIntegration] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userTool, setUserTool] = useState({
    full_name: "",
    email: "",
    tool_name: "",
    websile_url: "",
    tool_description: "",
    tool_own: "",
    price: "",
  });
  const userData = useSelector((state) => state.userReducer.loginData);
 
  const [error, setError] = useState("");

  const submitToolInput = (e) => {
    setUserTool({
      ...userTool,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitTool = async () => {
    try {
      let payload = {
        ...userTool,
        integration,
        categories,
        tool_own: userTool == "yes" ? true : false,
      };
      const token = userData.data;

      const { data: res } = await axios.post(
        `${process.env.REACT_APP_APP_API}/submit/add`,
        payload,
        { headers: { token } }
      );

      notification("success", res.msg);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);

        notification("error", error.response.data.message);
      }
    }
  };
  return (
    <Box paddingTop="30px">
     <Stack w="80%" m="auto" padding="30px"    border="1px solid #E6E6E6" >
        
        <Box w="100%">
              <Text fontSize="32px" fontWeight="600" lineHeight="24px">Submit a tool</Text>
                  
            <Text mt="10px" fontSize="14px" fontWeight="400" textAlign="justify" lineHeight="24px">We're always looking for innovative tools to add to our collection, and we welcome submissions from anyone who has developed or come across a useful AI tool. Share your creation with the world and help expand the field of AI. Best of all, submitting your tool to AI ZONE is 100% free!</Text>
               
            <Box  py={3} px={4} borderRadius="3px" bg="#384955" mt="10px" fontSize="16px" fontWeight="400" textAlign="justify" lineHeight="24px" color="white">
              <Text w="80%"> For creators: Stay Logged in with your Official Domain Registered Email ID! It will save time in verification and help you quickly gain access to the Creators Portal.</Text>
            </Box>
    
    
            <Multistep/>
    
        </Box>
    
        
    
        
        
        </Stack>
    </Box>
  
  )
}
