import React from 'react'
import tool from "../../Style/Tool.module.css"
import { Box, Button, Flex, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import star from "../../Utils/Star.svg"
import toolimg from "../../Utils/toolimg.svg"
import vscode from "../../Utils/Vs code.svg"
import { BsBoxArrowUpRight, BsFillHeartFill, BsFillSave2Fill, BsFillSaveFill, BsFillShareFill } from 'react-icons/bs';
import { AiFillApi, AiOutlineShareAlt } from 'react-icons/ai';
import { RiOpenSourceFill } from 'react-icons/ri'
import { ToolBottom } from './ToolBottom';
import { Link } from 'react-router-dom'
import { Tabcomp } from './Tab'
import gana from "../../Utils/gana.svg"
import { FaStar } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'


export const Telement = ({ el, id }) => {

    console.log(el);


    return (
        <Box >



            <Stack  >

                <Box className={tool.toolbox} justifyContent="space-between">


                    <Box className={tool.left} justifyContent="center" textAlign="center" alignItems="center">
                        <Box w="fit-content" padding="20px" border="1px solid #E6E6E6" margin="auto" borderRadius="5px" mt="10px" >
                            <Image boxSize="80px" src={el.Logo} />
                        </Box>
                        <Box mt="20px">
                            <Link to={el.URL} target="_blank">
                                <Button _hover={{ bg: "" }} color="white" borderRadius="5px" fontSize="14px" fontWeight="400" w="150px" gap="7px" alignItems="center" h="36px" bg="#3B89B6">
                                    <BsBoxArrowUpRight /> Visit
                                </Button>
                            </Link>
                        </Box>

                        <Button mt="20px" lineHeight="36px" borderRadius="5px" fontSize="15px" fontWeight="400" gap="5px" w="150px" h="29.68px" background={"transparent"} border="1px solid #E6E6E6"> <BsFillSaveFill /> Save </Button>




                        <Box textAlign="left" w="fit-content" m="auto">










                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">Pricing:</Text>

                            <Flex w="fit-content" gap="3px" border="1px solid #CCCCCC" px={1} py={"2px"} borderRadius="2px" alignItems="center">
                                <MdOutlineVerified />
                                <Text fontSize="13px" fontWeight="400" lineHeight="16px"  >{el.Pricing}</Text>
                            </Flex>

                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">Price amount: </Text>
                            <Flex lineHeight="24px" fontWeight="400" fontSize={"15px"}>
                                <Text  >starting price: </Text><Text fontWeight="700"></Text>

                            </Flex>

                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">Discount code:</Text>
                            <Flex fontSize="12px" lineHeight="15px" alignItems="center" mt="5px" color={useColorModeValue("black", "#464444")} w="fit-content" bg="#CBD0D3" borderRadius="35px" px={3} py={1}>
                                <Text fontWeight="700" >“aipedia10” </Text>
                                <Text>get 10% off</Text>
                            </Flex>


                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">Works with:</Text>
                            <Flex gap="5px"><Image src={vscode} /> <Text> VS Code</Text></Flex>

                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">Other features:</Text>
                            <Flex mt="5px" gap="5px" fontSize="14px" fontWeight="400">
                                <Flex alignItems="center"><AiFillApi /> API</Flex>
                                <Flex alignItems="center"> <RiOpenSourceFill /> Open source</Flex>
                            </Flex>

                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">Category: </Text>

                            <Box>
                            {el.Category.map((e)=><Text  bg="rgba(118, 161, 191, 0.3)" mt="15px" borderRadius={"50px"} w="83px" height="24px" padding="3px" textAlign="center" fontSize="12px" fontWeight="400">{e}</Text>)}
                            </Box>


                            <Text mt="20px" fontSize="14px" lineHeight="24px" fontWeight="600">
                                Tags:
                            </Text>
                            <Text fontStyle="italic" fontWeight="400" fontSize="12px" >Video editing, Upscale, Feee</Text>




                        </Box>

                    </Box>



                    <Box className={tool.right}  >

                        <Box w="90%" m="auto" >
                            <Flex justifyContent="space-between" alignItems="center">
                                <Text fontSize="24px" lineHeight="24px" fontWeight="600">{el.Title}</Text>
                                <Flex gap="10px" alignItems="center"  >
                                    <Text>{el.likes} People liked this</Text>
                                    <Box border="1px solid #E6E6E6" padding="8px" borderRadius="3px" justifyContent="center">
                                        <BsFillHeartFill style={{color:"tomato"}} />
                                    </Box>

                                </Flex>
                            </Flex>

                            <Flex gap="15px" alignItems="center" mt="15px" mb="10px">
                                <Flex gap="7px">
                                    {[...Array(5)].map((item, index) => {
                                        const givenRating = index + 1;
                                        return (
                                            <Box>
                                                <FaStar


                                                    value={givenRating}
                                                    color={
                                                        givenRating <= el.rating
                                                            ? "#3B89B6"
                                                            : "rgb(192,192,192)"
                                                    }
                                                />
                                            </Box>

                                        );
                                    })}
                                </Flex>

                                <Flex alignItems="center" gap="5px" fontSize="15px " lineHeight="24px" fontWeight="400">
                                    <Text fontWeight="700">3k</Text>
                                    <Text>reviews</Text>
                                </Flex>
                            </Flex>


                            <Text mt="20px" fontSize="16px" fontWeight="600" lineHeight="24px"  >
                                {el.Tagline}
                            </Text>

                            <Tabcomp el={el} id={id} />


                        </Box>



                    </Box>





                </Box>



            </Stack>

        </Box>
    )
}
