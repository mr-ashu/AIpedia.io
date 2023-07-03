import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'
import coll2 from "../../Utils/collec (2).svg";
import React from 'react'
import style from "../../Style/Featured.module.css";
import fimg from "../../Utils/micon.svg";
import { BsBoxArrowUpRight, BsFacebook, BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs';
import collect from '../../Utils/collec.svg'

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

export const Rightbar = () => {
    return (
        <div>
            <Box className={style.featured}>
            <Box>
                    <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Last week top reviewed</Text>
                    {
                        fdata?.map((el, i) => (
                            <Box key={i} >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex alignItems="center"  justifyContent="space-between">

                                        <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text> 
                                         <BsBoxArrowUpRight size={12} />
                                         
                                         </Flex>
                                        <Text w="80%" fontSize="12px" lineHeight="20px">{el.desc}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1.2px solid #CCCCCC" />

                </Box>

           
                <Box>
                    <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Curated collections</Text>
                    {
                        coll.map((el, i) => (
                            <Box>

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Box className={style.grid_icon}>
                                        <Image   src={el.icon2} />
                                        <Image   src={el.icon} />
                                        <Image  src={el.icon2} />
                                        <Image   src={el.icon} />
                                    </Box>


                                    <Box>

                                        <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>
                                        <Flex alignItems="center" gap="3px" fontSize="10px" fontWeight="400">
                                            <Text>{el.created} </Text>
                                            | <Text color="#3B89B6">{el.tool} tools</Text>
                                        </Flex>
                                        <Text w="90%" fontSize="12px" lineHeight="20px">{el.desc} </Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1.2px solid #CCCCCC" />

                </Box>

            </Box>
        </div>
    )
}
