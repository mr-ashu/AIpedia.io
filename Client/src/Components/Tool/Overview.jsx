import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { ToolBottom } from './ToolBottom'

export const Overview = ({el,id}) => {
    return (
        <Box>
            <Image width="70%" m="auto" borderRadius="5px"   src={el.image} />

            <ToolBottom el={el} id={id}/>


        </Box>
    )
}