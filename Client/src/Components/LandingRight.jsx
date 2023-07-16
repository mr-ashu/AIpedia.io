import React from 'react'
import { Featured } from './Featured'
import { TopReview } from './TopReview'
import { CurtedCollection } from './CurtedCollection'
import { Avatar, Box, Divider, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import style from "../Style/Featured.module.css";
import { Tranding } from './Tranding'
import facebook from "../Utils/Facebook-logo.png"
import twitter from "../Utils/twitter.png";
import insta from "../Utils/instagram.png"
import youtube from "../Utils/youtube.webp";
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'


export const LandingRight = () => {
  return (
    <Box className={style.featured} mr="30px">
      <Featured />
      <CurtedCollection />
      <Tranding />
      <TopReview />
      <Box >
        <Divider mt="30px" mb="30px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} />
        <Flex w="85%" justifyContent="space-between">
           

           <Facebook  sx={{fontSize:"28px"}}/>
          <Instagram  sx={{fontSize:"28px"}}/>
          <YouTube  sx={{fontSize:"28px"}}/>
          <Twitter  sx={{fontSize:"28px"}}/>
         
          {/* <Image h="28px" w="28px" src={facebook} />
          <Image h="28px" w="28px" src={insta} />
          <Image h="28px" w="28px" src={youtube} />
          <Image h="28px" w="28px" src={twitter} /> */}

        </Flex>
        <Divider mt="30px" mb="30px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} />
      </Box>
      <Box fontSize="12px" mt="30px" fontWeight="400">
        <Link to="/privacy"><Text >Terms : Privacy and Cookies ·</Text></Link>
        <Text mt="13px" fontSize="10px" lineHeight="normal">© 2023 AI ZOne</Text>
      </Box>
    </Box>
  )
}
