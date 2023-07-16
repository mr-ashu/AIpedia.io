import React from 'react'
import tool from "../../Style/Tool.module.css"
import { Box, Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import vscode from "../../Utils/Vs code.svg"
import { BsBoxArrowUpRight, BsFillHeartFill, BsFillSaveFill } from 'react-icons/bs';
import { AiFillApi, } from 'react-icons/ai';
import { RiOpenSourceFill } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import { Tabcomp } from './Tab'

import { FaStar } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'
import { ImageBackground } from '../ImageBackground';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import Save from '../Home/Save';
import Collect from './Collect';



export const Telement = ({ el, id }) => {

    const imageUrl = el.Logo;

    console.log(el);

    return (
        <Box bg={useColorModeValue("var(--landing-page, #FFF)", "#2C2C2C")}>

            <Box className={tool.toolbox}  >


                <Stack className={tool.left} alignItems="center" textAlign="center" >
                    <Box>
                        <Box m="auto" w="fit-content" >
                            <ImageBackground imageUrl={imageUrl} />
                        </Box>

                        <Flex flexDirection="column">
                            <Link to={el.URL} target="_blank">
                                <Button m="auto" mt="31px" _hover={{ bg: "" }} color="white" borderRadius="5px" fontSize="13px" fontWeight="400" w="194px" gap="7px" alignItems="center" h="36px" bg="#3B89B6">
                                    <BsBoxArrowUpRight /> Visit
                                </Button>
                            </Link>

                            <Collect el={el} id={id} />
                        </Flex>














                        <Box textAlign="left" w="fit-content"  >


                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Pricing:</Text>

                            <Flex w="fit-content" gap="7px" mt="5px" px={1} py={"2px"} borderRadius="2px" alignItems="center">
                                <MdOutlineVerified />
                                <Text fontSize="14px" fontWeight="400" lineHeight="16px"  >{el.Pricing}</Text>
                            </Flex>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Starting price: </Text>
                            <Text fontSize="13px" lineHeight="24px" fontWeight="600"> $90/mo</Text>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Discount code:</Text>

                            <Flex fontSize="14px" lineHeight="15px" alignItems="center" mt="5px" gap="7px">
                                <Text fontWeight="700" >“aipedia10” </Text>
                                <Text>get 10% off</Text>
                            </Flex>


                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Works with:</Text>
                            <Box>
                                {el.works_with.map((e) => (
                                    <Text mt="5px" fontSize="14px">{e}</Text>
                                ))}
                            </Box>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Other features:</Text>
                            <Box mt="5px" gap="5px" fontSize="13px" fontWeight="400">
                                <Flex alignItems="center" gap="5px" fontSize="14px"><AiFillApi /> API</Flex>
                                <Flex mt="5px" alignItems="center" gap="5px" fontSize="14px"> <RiOpenSourceFill /> Open source</Flex>
                            </Box>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Category: </Text>

                            <Flex alignItems="center" mt="7px" gap="5px" fontSize="12px" fontWeight="400" lineHeight="20px">

                                <Text textAlign="center" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} px="10px" borderRadius="12px"   >{el.Category[0]}</Text>
                                <Text display={el.Category.length > 1 ? "block" : "none"} fontSize="12px" fontWeight="400" lineHeight="20px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} px="10px" borderRadius="12px">
                                    {el.Category[1]}
                                </Text>


                            </Flex>


                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">
                                Tags:
                            </Text>
                            <Box fontStyle="italic" fontWeight="400" fontSize="12px" >

                                {el.Tags.map((e) => (
                                    <Text mt="5px" fontSize="14px">{e}</Text>
                                ))}

                            </Box>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">
                                Social media:
                            </Text>
                            <Flex mt="5px" gap="5px" fontStyle="italic" fontWeight="400" fontSize="12px" >


                                {
                                    el.social_media.map((e, i) => (
                                        <>
                                            {e.includes("facebook") ?
                                                <Link to={e} target="_blank"><Facebook /></Link> :
                                                e.includes("twitter") ?
                                                    <Link to={e} target="_blank">
                                                        <Twitter />
                                                    </Link>
                                                    :

                                                    e.includes("linkdin") ? <Link to={e} target="_blank">
                                                        <LinkedIn />
                                                    </Link> :
                                                        e.includes("linkedin") ? <Link to={e} target="_blank">
                                                            <LinkedIn />
                                                        </Link> :
                                                            e.includes("youtube") ? <Link to={e} target="_blank">
                                                                <YouTube />
                                                            </Link> : ""


                                            }
                                        </>
                                    ))
                                }




                            </Flex>



                            <Text mt="27px" fontSize="12px" lineHeight="20px" fontWeight="400">
                                Report this tool
                            </Text>


                        </Box>
                    </Box>

                </Stack>



                <Box className={tool.right}   >

                    <Box >
                        <Flex justifyContent="space-between" alignItems="center" className={tool.riviewfilter}>
                            <Text fontSize="24px" lineHeight="24px" fontWeight="600">{el.Title}</Text>
                            <Flex gap="10px" alignItems="center" fontStyle="16px" fontWeight="400" lineHeight="24px" >
                                <Text>{el.likes} People liked this</Text>
                                <Box border="1px solid #E6E6E6" padding="8px" borderRadius="9px" justifyContent="center">
                                    <BsFillHeartFill style={{ color: "tomato" }} />
                                </Box>

                            </Flex>
                        </Flex>

                        <Flex gap="18px" alignItems="center" mt="15px" mb="10px">
                            <Flex gap="4px">
                                {[...Array(5)].map((item, index) => {
                                    const givenRating = index + 1;
                                    return (
                                        <Box>
                                            <FaStar

                                                size={14}
                                                value={givenRating}
                                                color={
                                                    givenRating <= el.rating
                                                        ? "#ECBA67"
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


                        <Text mt="24px" mb="20px" fontSize="16px" fontWeight="600" lineHeight="24px" textAlign="justify"  >
                            {el.Tagline}
                        </Text>

                        <Tabcomp el={el} id={id} />


                    </Box>



                </Box>





            </Box>





        </Box>
    )
}
