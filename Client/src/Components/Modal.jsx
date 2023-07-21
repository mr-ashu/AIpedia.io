import * as React from 'react';

import { Box, Button, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import style from "../Style/Grid.module.css";
import nocover from "../Utils/NO COVER .png"
import visit from "../Utils/Visit.svg"

import Modal from '@mui/material/Modal';
import { CloseIcon } from '@chakra-ui/icons';
import { Telement } from './Tool/Telement';
import { Link } from 'react-router-dom';
import ShareModel from './Share';
import { MdOutlineVerified } from 'react-icons/md';

import { Likes } from './Likes';
import Save from './Home/Save';
import { FaStar } from 'react-icons/fa';

import excel from "../Utils/Spreadsheet_icon.svg"
import chatgpt from "../Utils/ChatGPT.svg"
import vscode from "../Utils/Vs code.svg"

import figma from "../Utils/Figma.svg"
import github from "../Utils/Github.svg"
import mobile from "../Utils/Mobile app.svg"
import slack from "../Utils/Slack.svg"
import browser from "../Utils/Browser Extension.svg"
import Wordpress from "../Utils/Wordpress.svg"
import sopify from "../Utils/sopify.svg"
import { AiFillDollarCircle, AiFillGift } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';


export const Modalcomp = ({ el, i }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    let url = window.location.href + `tool/${el._id}`;

    return (
        <>



            <Box position="relative" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} borderRadius="3px" textAlign="left">


                <Box position="relative"     >
                    <Box >

                        {
                            el.Cover_image ? <Image w="100%" h="146px" style={{ cursor: "pointer" }} onClick={handleOpen} src={el.Cover_image} alt="img" /> :
                                <Image w="100%" h="146px" style={{ cursor: "pointer" }} onClick={handleOpen} src={nocover} alt="img" />
                        }


                    </Box>

                    {
                        i === 0 || i === 1 || i === 2 ? <Box position="absolute" top="0px" left="0"  >
                            <Text m="9px" textAlign="center" justifyContent="center" w="fit-content" px="5px" py="1px" bg="linear-gradient(134deg, #4283B0 8.39%, #F31F92 70.00%)" borderRadius="3px" fontSize="12px" color="#EEE" lineHight="23px" fontWeight="400">Featured</Text>

                        </Box> : ""

                    }


                    <Flex position="absolute" top="8px" right="8px" gap="5px" w="fit-content">


                        {
                            el.works_with.map((e, i) => (
                                <>
                                    {

                                        e.includes("Spreadsheet") ? <Image w="100%" borderRadius="4px" boxSize="18px" src={excel} /> :
                                            e.includes("Chatgpt") ? <Image boxSize="18px" src={chatgpt} /> :
                                                e.includes("VS Code") ? <Image boxSize="18px" src={vscode} /> :
                                                    e.includes("Github") ? <Image boxSize="18px" src={github} /> :
                                                        e.includes("Mobile app") ? <Image boxSize="18px" src={mobile} /> :
                                                            e.includes("Wordpress") ? <Image boxSize="18px" src={Wordpress} /> :
                                                                e.includes("Figma") ? <Image boxSize="18px" src={figma} /> :
                                                                    e.includes("Browser Extension") ? <Image boxSize="18px" src={browser} /> :
                                                                        e.includes("Shopify") ? <Image boxSize="18px" src={sopify} /> :
                                                                            e.includes("Slack") ? <Image boxSize="18px" src={slack} /> :
                                                                                ""
                                    }

                                </>
                            ))
                        }
                    </Flex>





                    <Box position={"absolute"} bottom="10px" right="13px" bg="white" p="5px 7px" borderRadius="5px" color="black" >

                        <ShareModel url={url} />

                    </Box>



                </Box>



                <Box m="10px"  >
                    <Flex mt="8px" justifyContent="space-between" alignItems="start">
                        <Flex cursor={"pointer"} maxW="60%" onClick={handleOpen} alignItems="center" gap="7px">
                            <Image h="20px" w="20px" src={el.Logo} />
                            <Text className={style.title} fontWeight="bold">{el.Title}</Text>
                        </Flex>

                        <Box alignItems="center" textAlign="center" justifyContent="center" >
                            <Likes el={el} />
                            <Text>{el.likes}</Text>
                        </Box>
                    </Flex>

                    <Flex gap="10px" alignItems="center" mt="5px">
                        <Flex gap="5px">
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar

                                            size={13}
                                            value={givenRating}
                                            color={
                                                givenRating <= el.rating
                                                    ? "#ECBA67"
                                                    : "#E6E6E6"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>

                        <Text lineHeight={"15px"} fontSize="13px">({el.rating})</Text>
                 

                        <Box fontSize="13px" fontWeight="400" lineHeight="16px"  w="fit-content" height="fit-content" borderLeft="1px" borderColor={useColorModeValue("#E6E6E6", "#444")}>
                            {

                                el.Pricing === "Free" ? <Flex gap="7px" pl="8px" alignItems="center"><AiFillGift /><Text>{el.Pricing}</Text></Flex> :
                                    el.Pricing === "Free trial" ? <Flex gap="7px"  pl="8px" alignItems="center"><BsClockHistory /><Text>{el.Pricing}</Text></Flex> :
                                        el.Pricing === "Freemium" ? <Flex gap="7px"  pl="8px" alignItems="center"><MdOutlineVerified /><Text>{el.Pricing}</Text></Flex> :
                                            el.Pricing === "Paid" ? <Flex gap="7px"  pl="8px" alignItems="center"><AiFillDollarCircle /><Text>{el.Pricing}</Text></Flex> : ""

                            }

                        </Box>

                    </Flex>

                    <Text className={style.dec} mt="16px" fontSize="15px" lineHeight="24px" fontWeight="400"  >
                        {el.Description}
                    </Text>
                    <Flex alignItems="center" mt="16px" mb="16px" gap="5px" fontSize="12px" fontWeight="400" lineHeight="20px">


                        <Text textAlign="center" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} px="10px" borderRadius="12px"   >{el.Category[0]}</Text>
                        <Text display={el.Category.length > 1 ? "block" : "none"} fontSize="12px" fontWeight="400" lineHeight="20px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} px="10px" borderRadius="12px">
                            + {el.Category.length - 1}
                        </Text>


                    </Flex>

                    <Flex mt="25px" justifyContent="space-evenly" alignItems="center" mb="15px" w="100%" gap="10px">
                        <Save id={el._id} el={el} />
                        <Link to={el.URL} target="_blank">  <Button color="white" className={style.savebtn} borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" h="29.68px" _hover={{ bg: "" }} bg="#3B89B6"> <Image src={visit} /><Text> Visit</Text></Button></Link>
                    </Flex>
                </Box>


            </Box>


            <Modal

                className={style.modal}

                open={open}
                onClose={handleClose}

            >
                <Box bg={useColorModeValue("var(--landing-page, #FFF)", "#2C2C2C")} overflow="auto" sx={{ width: "fit-content" }}>
                    <Flex justifyContent="space-between" w="90%" alignItems="center" margin="auto" mt="20px" mb="30px">
                        <CloseIcon cursor={"pointer"} onClick={handleClose} />
                        <Link to={`/tool/${el._id}`}><Text cursor={"pointer"} border="1px solid" padding="3px" px={2} borderRadius="5px">Open in new tab</Text></Link>
                    </Flex>


                    <Telement el={el} />

                </Box>
            </Modal>
        </>
    )
}