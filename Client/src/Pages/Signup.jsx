import React from 'react'
import SignupForm from '../Components/Signup/Form'
import { Box, useColorModeValue } from '@chakra-ui/react'

export const Signup = () => {
  return (
    <Box   py="50px" bg={useColorModeValue("white","#2C2C2C")}> 
    
    <SignupForm/>
    
    </Box>
  )
}
