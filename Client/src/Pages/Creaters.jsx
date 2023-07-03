import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Createform from '../Components/Creators/Form'

export const Creaters = () => {
  return (
    <Box paddingTop="30px">
    <Stack w="80%" m="auto" padding="30px"    border="1px solid #E6E6E6" >
       
       <Box w="100%">
             <Text fontSize="32px" fontWeight="600" lineHeight="24px">Creator's portal</Text>
                 
           <Text mt="10px" fontSize="14px" fontWeight="400" textAlign="justify" lineHeight="24px">Welcome to our creator's portal, a private access area for creators to manage and update their AI tools information. Our creator's portal makes it easy for creators to keep their tool data up-to-date and accurate, ensuring that users have the most current and relevant information available.</Text>
           


       <Createform/>



       </Box>
   
       
   
       
       
       </Stack>
   </Box>
  )
}
