import * as React from 'react';
import chatgpt from "../Utils/ChatGPT.svg";
import { Box, Button, Flex, Image, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import style from "../Style/List.module.css";
import { BsBoxArrowUpRight, BsFillShareFill } from 'react-icons/bs';
import visit from "../Utils/Visit.svg"
import star from "../Utils/Star.svg"
import collection from "../Utils/Collection.svg"
import Modal from '@mui/material/Modal';
import { CloseIcon } from '@chakra-ui/icons';
import { Telement } from './Tool/Telement';
import { Link } from 'react-router-dom';
import ShareModel from './Share';
import { Likes } from './Likes';
import { MdOutlineVerified } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import Save from './Home/Save';


export const ListModal = ({ el }) => {

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

            <Box border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} borderRadius="3px" textAlign="left" mb="30px" py="10px" >
                <Flex ml="20px" gap="10px" alignItems="center" height="100%">
                    <Image cursor={"pointer"} onClick={handleOpen} boxSize="80px" borderRadius="5px" src={el.Logo} />
                    <Stack w="100%" m="10px">
                        <Flex justifyContent="space-between" alignItems="center">
                            <Text fontWeight="bold" cursor={"pointer"} onClick={handleOpen}>{el.Title}</Text>

                            <Box className={style.shide}>
                                <Flex mr="30px" h="fit-content" w="fit-content" justifyContent="space-between" gap="70px" alignItems="center">

                                    <Box mr="5px" >
                                        <ShareModel url={url} />

                                    </Box>
                                    <Link to={el.URL} target={'_blank'}>
                                        <Button _hover={{ bg: "" }} color="white" className={style.savebtn} borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" h="29.68px" bg="#3B89B6">
                                            <Image src={visit} /><Text> Visit</Text>
                                        </Button>
                                    </Link>

                                </Flex>
                            </Box>

                        </Flex>

                        <Box className={style.shide}>
                            <Flex gap="10px" alignItems="center">
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
                                <Text lineHeight={"15px"} fontSize="13px">({el.rating})</Text>
                                <Flex gap="7px" borderLeft="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} pl="8px" alignItems="center">
                                    <MdOutlineVerified />
                                    <Text fontSize="13px" fontWeight="400" lineHeight="16px"  >{el.Pricing}</Text>
                                </Flex>
                            </Flex>
                        </Box>

                        <Text className={style.dec} fontSize="15px" textAlign="left" fontWeight="400"    >
                            {el.Tagline}
                        </Text>



                        <Box className={style.lhide}>
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
                        </Box>
                        <Flex justifyContent="space-between" alignItems="center" w="100%" mt="15px">
                            <Flex alignItems="center"   gap="5px" fontSize="12px" fontWeight="400" lineHeight="20px">


                                <Text textAlign="center" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} px="10px" borderRadius="12px"   >{el.Category[0]}</Text>
                                <Text display={el.Category.length > 1 ? "block" : "none"} fontSize="12px" fontWeight="400" lineHeight="20px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} px="10px" borderRadius="12px">
                                    + {el.Category.length - 1}
                                </Text>


                            </Flex>

                            <Box className={style.shide}>
                                <Flex mr="30px" justifyContent="space-between" alignItems="center" w="fit-content" gap="70px"  >
                                    <Save el={el} />
                                    <Flex alignItems="center" gap="7px"> <Likes el={el} /> {el.likes}</Flex>
                                </Flex>
                            </Box>


                        </Flex>

                    </Stack>



                    <Box className={style.lhide} borderLeft="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} justifyContent="center" alignItems="center">

                        <Flex height="160px" flexDirection="column" justifyContent="space-evenly" ml="30px" mr="30px">
                            <BsBoxArrowUpRight />
                            <BsFillShareFill />
                        </Flex>

                    </Box>



                </Flex>






            </Box>

            <Modal

                className={style.modal}

                open={open}
                onClose={handleClose}

            >
                <Box overflow="auto" sx={{ width: "fit-content" }}>
                    <Flex justifyContent="space-between" w="90%" alignItems="center" margin="auto" mt="20px" mb={"20px"}>
                        <CloseIcon cursor={"pointer"} onClick={handleClose} />
                        <Link to={`/tool/${el._id}`}><Text cursor={"pointer"} border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} padding="3px" px={2} borderRadius="5px">Open in new tab</Text></Link>
                    </Flex>


                    <Telement el={el} />

                </Box>
            </Modal>
        </>
    )
}