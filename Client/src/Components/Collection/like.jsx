import { Box } from '@chakra-ui/react'
import React from 'react'
import { LIstcomp } from './Listcomp'
import { Gridcomp } from './gridcomp'
 

export const Like = ({ grid }) => {
  
  return (
    <Box>
    
        {
        grid ? <Gridcomp /> : <LIstcomp/>
    
    }
   
    </Box>
  )
}
