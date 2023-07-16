import { Box, Divider, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import tool from "../../Style/Tool.module.css"
import fimg from "../../Utils/micon.svg";

import { BsBoxArrowUpRight } from 'react-icons/bs';
import { RiShareBoxFill } from 'react-icons/ri';



let data = [
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
export const Alternative = () => {
    return (
        <>

            <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} mt="20px" />
            <Box>
                <Box w="100%" m="auto" borderRadius="3px">
                    <Text textTransform="uppercase" mb="20px" mt="20px" fontWeight="600" fontSize="14px" lineHeight="20px">Related AI Tools</Text>



                    <Box className={tool.rtool} w="100%" m="auto">

                        {
                            data.map((ele) => (
                                <Box>

                                    <Flex alignItems="center" gap="10px"  >
                                        <Image boxSize="50px" height="40px" src={fimg} />

                                        <Box>

                                            <Flex alignItems="center"  justifyContent="space-between">
                                            <Text fontSize="13px" fontWeight="600" color="#22222" >{ele.title}</Text> 
                                            <RiShareBoxFill size={14}/>
                                             </Flex>
                                            <Text w="90%" fontSize="12px" lineHeight="20px">{ele.desc}</Text>



                                        </Box>


                                    </Flex>

                                </Box>
                            ))
                        }

                    </Box>

                </Box>
            </Box>





            <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} mt="20px" />

        </>
    )
}
