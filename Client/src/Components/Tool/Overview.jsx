import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { ToolBottom } from './ToolBottom'

export const Overview = ({el,id}) => {
    return (
        <Box>
            <Image width="80%" m="auto" borderRadius="5px"   src={el.Cover_image} />

            <ToolBottom el={el} id={id}/>


        </Box>
    )
}
