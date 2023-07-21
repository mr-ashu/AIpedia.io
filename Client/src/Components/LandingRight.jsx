import React from 'react'
import { Featured } from './Featured'
import { TopReview } from './TopReview'
import { CurtedCollection } from './CurtedCollection'
import {  Box, Divider,   useColorModeValue } from '@chakra-ui/react'
 
import style from "../Style/Featured.module.css";
import { Tranding } from './Tranding'
import { IconandPrivacy } from './IconandPrivact'


export const LandingRight = () => {
  return (
    <Box className={style.featured} mr="30px">
      <Featured />
      <CurtedCollection />
      <Tranding />
      <TopReview />
      <Divider mt="30px" mb="30px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} />
       <IconandPrivacy/>
     
    </Box>
  )
}
