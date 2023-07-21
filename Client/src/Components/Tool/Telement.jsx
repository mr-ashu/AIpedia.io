import React, { useState } from 'react'
import tool from "../../Style/Tool.module.css"
import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { BsBoxArrowUpRight, BsClockHistory, BsFillFlagFill, BsFillHeartFill, BsFillMotherboardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { Tabcomp } from './Tab'
import { FaStar, FaToolbox } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'
import { ImageBackground } from '../ImageBackground';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import Collect from './Collect';
import excel from "../../Utils/Spreadsheet_icon.svg"
import chatgpt from "../../Utils/ChatGPT.svg"
import vscode from "../../Utils/Vs code.svg"

import figma from "../../Utils/Figma.svg"
import github from "../../Utils/Github.svg"
import mobile from "../../Utils/Mobile app.svg"
import slack from "../../Utils/Slack.svg"
import browser from "../../Utils/Browser Extension.svg"
import Wordpress from "../../Utils/Wordpress.svg"
import sopify from "../../Utils/sopify.svg"
import { DiOpensource } from 'react-icons/di';
import { AiFillApi, AiFillDollarCircle, AiFillGift } from 'react-icons/ai';





export const Telement = ({ el, id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [review, setreview] = useState("")
    const imageUrl = el.Logo;


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


                            <Box mt="10px" flexDirection="column" fontSize="14px" fontWeight="400" lineHeight="16px" gap="10px">
                                {

                                    el.Pricing === "Free" ? <Flex alignItems="center" gap="10px"><AiFillGift /><Text>{el.Pricing}</Text></Flex> :
                                        el.Pricing === "Free trial" ? <Flex alignItems="center" gap="10px"><BsClockHistory /><Text>{el.Pricing}</Text></Flex> :
                                            el.Pricing === "Freemium" ? <Flex alignItems="center" gap="10px"><MdOutlineVerified /><Text>{el.Pricing}</Text></Flex> :
                                                el.Pricing === "Paid" ? <Flex alignItems="center" gap="10px"><AiFillDollarCircle /><Text>{el.Pricing}</Text></Flex> : ""

                                }
                            </Box>



                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Starting price: </Text>
                            <Text fontSize="13px" lineHeight="24px" fontWeight="600">{el.price_amount}</Text>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Discount code:</Text>

                            <Flex fontSize="14px" lineHeight="15px" alignItems="center" mt="5px" gap="7px">
                                <Text fontWeight="700" >“aipedia10” </Text>
                                <Text>get 10% off</Text>
                            </Flex>


                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Works with:</Text>
                            <Flex mt="10px" flexDirection="column" fontSize="14px" fontWeight="400" lineHeight="16px" gap="10px">
                                {el.works_with.map((e) => (
                                    <Box >
                                        {

                                            e.includes("Spreadsheet") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={excel} /><Text>{e}</Text></Flex> :
                                                e.includes("VS Code") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={vscode} /><Text>{e}</Text></Flex> :
                                                    e.includes("Github") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={github} /><Text>{e}</Text></Flex> :
                                                        e.includes("Mobile app") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={mobile} /><Text>{e}</Text></Flex> :
                                                            e.includes("Wordpress") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={Wordpress} /><Text>{e}</Text></Flex> :
                                                                e.includes("Figma") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={figma} /><Text>{e}</Text></Flex> :
                                                                    e.includes("Browser Extension") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={browser} /><Text>{e}</Text></Flex> :
                                                                        e.includes("Shopify") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={sopify} /><Text>{e}</Text></Flex> :
                                                                            e.includes("Slack") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={slack} /><Text>{e}</Text></Flex> :
                                                                                e.includes("chatGPT(Plugin)") ? <Flex alignItems="center" gap="10px"><img w="15px" height="15px" alt="icon" src={chatgpt} /><Text>{e}</Text></Flex> :
                                                                                    ""
                                        }

                                    </Box>
                                ))}
                            </Flex>

                            <Text mt="30px" fontSize="13px" lineHeight="24px" fontWeight="600">Other features:</Text>
                            <Box mt="5px" gap="5px" fontSize="13px" fontWeight="400">

                                {el.others_features?.map((e) => (
                                    <Box >
                                        {

                                            e.includes("API") ? <Flex gap="10px" alignItems="center"><AiFillApi size={20} /> <Text>API</Text></Flex> :
                                                e.includes("Open Source") ? <Flex gap="10px" alignItems="center"><DiOpensource size={20} /> <Text>Open Source</Text></Flex> :
                                                    ""
                                        }

                                    </Box>
                                ))}

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

                            <Flex cursor="pointer" onClick={onOpen} gap="10px" alignItems="center" mt="27px">
                                <BsFillFlagFill style={{ color: "#CB0000" }} />
                                <Text fontSize="12px" lineHeight="20px" fontWeight="400">
                                    Report this tool
                                </Text>

                            </Flex>


                        </Box>
                    </Box>


                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent color="#444" bg="#D9D9D9" borderRadius="0px">
                            <ModalHeader fontSize="15px" lineHeight="24px" fontWeight="600">Report</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody fontSize="13px" fontWeight="400" lineHeight="16px">
                                <Flex flexDirection="column" gap="10px">
                                    <Text fontSize="13px" lineHeight="24px" fontWeight="400"> We are always looking for ways to make AI Pedia the best possible experience for our customers. Please submit any suggestions you have on how we can improve our service to better suit your needs or problem.</Text>
                                    <Flex gap="10px" alignItems="center" >
                                        <input type="radio" />
                                        <Text>Information provided is not correct </Text>
                                    </Flex>
                                    <Flex gap="10px" alignItems="center" >
                                        <input type="radio" />
                                        <Text>Dubplicate</Text>
                                    </Flex>
                                    <Flex gap="10px" alignItems="center" >
                                        <input type="radio" />
                                        <Text>Harmful</Text>
                                    </Flex>
                                    <Flex gap="10px" alignItems="center" >
                                        <input type="radio" />
                                        <Text>Yes</Text>
                                    </Flex>




                                    <Input mt="10px" borderRadius="3px" bg="#F8F8F8" _placeholder={{ fontSize: "13px", fontWeight: "400", color: "#929292" }} placeholder="  Please be more specific" />


                                </Flex>

                                <Flex mt="20px" mb="10px" textAlign="end" justifyContent="left">
                                    <Button fontSize="15px" lineHeight="24px" fontWeight="600" border="1px solid black" bg="#F8F8F8" padding="3px 10px" borderRadius="3px" >
                                        Submit
                                    </Button>
                                </Flex>

                            </ModalBody>

                        </ModalContent>
                    </Modal>

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
                                <Text fontWeight="700">{review}</Text>
                                <Text>reviews</Text>
                            </Flex>
                        </Flex>


                        <Text mt="24px" mb="20px" fontSize="16px" fontWeight="600" lineHeight="24px" textAlign="justify"  >
                            {el.Tagline}
                        </Text>

                        <Tabcomp el={el} id={id} setreview={setreview} />


                    </Box>



                </Box>





            </Box>





        </Box>
    )
}
