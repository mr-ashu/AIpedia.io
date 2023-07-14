import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import style from "../Style/Featured.module.css";
 
import fimg from "../Utils/micon.svg";
 
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { RiShareBoxFill } from 'react-icons/ri';
 
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





export const Featured = () => {
    return (
        <Box>
             <Box className={style.featured}>
            <Box>
                    <Text textTransform="uppercase" mb="20px" mt="20px" fontWeight="600" fontSize="16px">Highlighted tools</Text>
                    {
                        fdata?.map((el, i) => (
                            <Box key={i} >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex w="90%" alignItems="center" gap={"20px"} justifyContent="space-between">
                                        <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text> 
                                        <RiShareBoxFill size={14}/>
                                         </Flex>
                                        <Text mt="5px" w="80%" fontSize="12px" lineHeight="20px" className={style.desc}>{el.desc}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} />

                </Box>

                <Text w="95%" fontSize="14px" fontWeight="600" mt="10">Stay up-to-date with latest and greatest AI tools with our exclusive newsletter</Text>

                <Box mr="40px">
                   
                    <Input mt="15px" placeholder='Your email' border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} />
                    <Button w="100%" bg="#3B89B6" color="white" fontSize="14px" fontWeight="600" mt="15px">Subscribe to the newsletter</Button>

                    <Text mt="10px" fontSize="12px" fontWeight="400" >Read the latest issue <ArrowForwardIcon m="auto" /> </Text>

                </Box>
 
            </Box>
        </Box>
    )
}
