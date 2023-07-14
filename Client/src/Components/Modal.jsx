import * as React from 'react';

import { Box, Button, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import style from "../Style/Grid.module.css";

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


export const Modalcomp = ({ el }) => {
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
            <Box border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} borderRadius="3px" textAlign="left">
                <Box >
                    <img style={{ cursor: "pointer" }} onClick={handleOpen} className={style.image} src={el.Cover_image} alt="img" />
                    <Box className={style.icon}>
                        <Flex h="fit-content" width="100%" justifyContent="flex-end"  >

                            <Box mr="10px" bg="white" p="4px" borderRadius="4px" color="black" >

                                <ShareModel url={url} />

                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box m="10px"  >
                    <Flex mt="-25px" justifyContent="space-between" alignItems="start">
                        <Flex cursor={"pointer"} maxW="60%" onClick={handleOpen} alignItems="center" gap="7px">
                            <Image h="20px" w="20px" src={el.Logo} />
                            <Text className={style.title} fontWeight="bold">{el.Title}</Text>
                        </Flex>

                        <Box alignItems="center" textAlign="center"  >
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

                                            size={14}
                                            value={givenRating}
                                            color={
                                                givenRating <= el.rating
                                                    ? "orange"
                                                    : "rgb(192,192,192)"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>

                        <Text lineHeight={"15px"} fontSize="13px">({el.rating})</Text>
                        <Flex gap="7px" borderLeft="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} pl="8px" alignItems="center">
                            <MdOutlineVerified />
                            <Text fontSize="13px" fontWeight="400" lineHeight="16px"  >{el.Pricing}</Text>
                        </Flex>
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
                <Box overflow="auto" sx={{ width: "fit-content" }}>
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