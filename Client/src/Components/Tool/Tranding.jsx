import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import style from "../../Style/Featured.module.css";

import { BsBoxArrowUpRight, BsFacebook, BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs';

 

 


export const Tranding = ({ tranding, top3, collection }) => {
    return (
        <div>
            <Box className={style.featured}>
                <Box>
                    <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Tranding</Text>
                    {
                        tranding.map((el, i) => (
                            <Box  >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex alignItems="center" gap={"20px"}><Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>  <BsBoxArrowUpRight /></Flex>
                                        <Text w="80%" fontSize="12px" lineHeight="20px">{el.desc}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1.2px solid #CCCCCC" />

                </Box>


                <Box>

                    <Flex alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center" gap="5px" fontSize="14px" fontWeight="600">
                            <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px">TOP 3 </Text>
                            <Text color="#3B89B6">#IMAGE</Text>
                            <Text>Tool</Text>


                        </Flex>
                        <Text mr="10px" alignItems="baseline" fontWeight="600" fontSize="16px" color="#3B89B6">View all</Text>
                    </Flex>



                    {
                        top3.map((el, i) => (
                            <Box  >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex alignItems="center" gap={"20px"}><Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>  <BsBoxArrowUpRight /></Flex>
                                        <Text w="80%" fontSize="12px" lineHeight="20px">{el.desc}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1.2px solid #CCCCCC" />

                </Box>

                <Box>

                    <Flex alignItems="center" justifyContent="space-between"  >
                        <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Curated collections</Text>
                        <Text mr="10px" alignItems="baseline" fontWeight="600" fontSize="16px" color="#3B89B6">View all</Text>


                    </Flex>


                    {
                        collection.map((el, i) => (
                            <Box>

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Box className={style.grid_icon}>
                                        <Image src={el.icon2} />
                                        <Image src={el.icon} />
                                        <Image src={el.icon2} />
                                        <Image src={el.icon} />
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
