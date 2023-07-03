import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import style from "../Style/Featured.module.css";
import coll2 from "../Utils/collec (2).svg";
import fimg from "../Utils/micon.svg";
import { BsBoxArrowUpRight, BsFacebook, BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs';
import collect from '../Utils/collec.svg'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import facebook from "../Utils/Facebook-logo.png"
import twitter from "../Utils/twitter.png";
import insta from "../Utils/instagram.png"
import youtube from "../Utils/youtube.webp";
 

 
export const RigtBar = ({coll,triview,fdata}) => {
    return (
        <div>
            <Box className={style.featured}>
            <Box>
                    <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Top review</Text>
                    {
                        fdata?.map((el, i) => (
                            <Box key={i} >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex w="90%" alignItems="center" gap={"20px"} justifyContent="space-between">
                                        <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text> 
                                         <BsBoxArrowUpRight size={14} />
                                         </Flex>
                                        <Text w="80%" fontSize="12px" lineHeight="20px">{el.desc}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1.2px solid #CCCCCC" />

                </Box>

                <Text w="95%" fontSize="14px" fontWeight="600" mt="10">Stay up-to-date with latest and greatest AI tools with our exclusive newsletter</Text>

                <Box mr="40px">
                   
                    <Input mt="15px" placeholder='Your email' border="1px solid " />
                    <Button w="100%" bg="#3B89B6" color="white" fontSize="14px" fontWeight="600" mt="15px">Subscribe to the newsletter</Button>

                    <Text mt="10px" fontSize="12px" fontWeight="400" >Read the latest issue <ArrowForwardIcon m="auto" /> </Text>

                </Box>

                <Box mt="20px">
                    <Divider border="1.2px solid #CCCCCC" />
                    <Flex mt="30px" mb="30px" mr="20px" justifyContent="space-between">
                        <Avatar size={"sm"} src={facebook} />
                        <Avatar size={"sm"} src={insta} />
                        <Avatar size={"sm"} src={youtube} />
                        <Avatar size={"sm"} src={twitter} />

                    </Flex>
                    <Divider border="1.2px solid #CCCCCC" />
                </Box>

                <Box>
                    <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Top review</Text>
                    {
                        triview.map((el, i) => (
                            <Box key={i} >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex alignItems="center" w="90%" justifyContent="space-between">
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
                            <Box key={i}>

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
