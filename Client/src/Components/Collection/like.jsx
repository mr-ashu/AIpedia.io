import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { LIstcomp } from './Listcomp'
import { Gridcomp } from './gridcomp'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const Like = ({ grid }) => {
  
  return (
    <Box>
    
        {
        grid ? <Gridcomp   /> : <LIstcomp  />
    
    }
   
    </Box>
  )
}
