import React from 'react'
import { Featured } from './Featured'
import { TopReview } from './TopReview'
import { CurtedCollection } from './CurtedCollection'
import { Avatar, Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import style from "../Style/Featured.module.css";
import { Tranding } from './Tranding'
import facebook from "../Utils/Facebook-logo.png"
import twitter from "../Utils/twitter.png";
import insta from "../Utils/instagram.png"
import youtube from "../Utils/youtube.webp";


export const LandingRight = () => {
  return (
    <Box className={style.featured}>
      <Featured />
      <CurtedCollection />
      <Tranding />
      <TopReview />
      <Box mt="20px">
        <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} />
        <Flex mt="30px" mb="30px" mr="20px" justifyContent="space-between">
          <Avatar size={"sm"} src={facebook} />
          <Avatar size={"sm"} src={insta} />
          <Avatar size={"sm"} src={youtube} />
          <Avatar size={"sm"} src={twitter} />

        </Flex>
        <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} />
      </Box>
      <Box fontSize="12px" mt="20px" fontWeight="400">
        <Link to="/privacy"><Text>Terms : Privacy and Cookies ·</Text></Link>
        <Text mt="5px">© 2023 AI ZOne</Text>
      </Box>
    </Box>
  )
}
