import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import style from "../../Style/Featured.module.css";
import coll2 from "../../Utils/cicon1.svg";
import fimg from "../../Utils/micon.svg";
import { BsBoxArrowUpRight, BsFacebook, BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs';
import collect from '../../Utils/collec.svg'
 
import { RigtBar } from '../CommonRightbar';
let fdata = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
]


let triview = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",
        rating: "3"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",
        rating: "3"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",
        rating: "3"
    }

]

let coll = [
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },


]
export const Featured = () => {
    return (
        <Box>
            <RigtBar fdata={fdata} triview={triview} coll={coll}/>
        </Box>
    )
}
