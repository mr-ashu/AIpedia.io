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
import { Link} from 'react-router-dom';
import ShareModel from './Share';
import { Likes } from './Likes';
import { MdOutlineVerified } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';


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

            <Box border="1px solid #CFCDCD" borderRadius="3px" textAlign="left" mb="30px"  >
                <Flex ml="20px" gap="10px" alignItems="center" height="100%">
                    <Image cursor={"pointer"}  onClick={handleOpen} width="80px" height="78px" src={chatgpt} />
                    <Stack w="100%" m="10px">
                        <Flex justifyContent="space-between" alignItems="center">
                            <Text fontWeight="bold" cursor={"pointer"} onClick={handleOpen}>{el.title}</Text>

                            <Box className={style.shide}>
                                <Flex mr="30px" h="fit-content" w="fit-content" justifyContent="space-between" gap="80px" alignItems="center">

                                    <Box mr="5px"  >
                                        <ShareModel url={url} />

                                    </Box>
                                    <Link to={el.links} target={'_blank'}>
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
                                            givenRating < 3 || givenRating === 3
                                                ? "#3B89B6"
                                                : "rgb(192,192,192)"
                                        }
                                    />
                                </Box>

                            );
                        })}
                    </Flex>
                                <Text lineHeight={"15px"} fontSize="13px">(3)</Text>
                                <Flex gap="3px" border="1px solid #CCCCCC" px={1} py={"2px"} borderRadius="2px" alignItems="center">
                                    <MdOutlineVerified />
                                    <Text fontSize="13px" fontWeight="400" lineHeight="16px"  >{el.price}</Text>
                                </Flex>
                            </Flex>
                        </Box>

                        <Text w="90%" className={style.dec} fontSize="15px" textAlign="left" fontWeight="400"  >
                            {el.description}
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
                                            givenRating < 3 || givenRating === 3
                                                ? "#3B89B6"
                                                : "rgb(192,192,192)"
                                        }
                                    />
                                </Box>

                            );
                        })}
                    </Flex>
                         </Box>
                        <Flex justifyContent="space-between" alignItems="center" w="100%">
                            <Flex alignItems="center" lineHeight="24px" fontSize="12px" mt="10px" gap="5px">
                                <Text fontWeight="600">
                                    Tags:
                                </Text>
                                <Text fontStyle="italic" fontWeight="400">Video editing, Upscale, Feee</Text>
                            </Flex>

                            <Box className={style.shide}>
                                <Flex mr="30px" justifyContent="space-between" alignItems="center" w="fit-content" gap="80px"  >
                                    <Button className={style.savebtn} borderRadius="5px" border="1px solid #CCCCCC" fontSize="14px" fontWeight="400" gap="5px" h="29.68px" background={"transparent"}><Image src={collection} />Save</Button>
                                    <Flex alignItems="center" gap="7px"> <Likes el={el} /> {el.likes}</Flex>
                                </Flex>
                            </Box>


                        </Flex>

                    </Stack>



                    <Box className={style.lhide} borderLeft="1px solid #CCCCCC " justifyContent="center" alignItems="center">

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
                <Box bg={useColorModeValue("white", "#464444")} overflow="auto" sx={{ width: "fit-content" }}>
                    <Flex justifyContent="space-between" w="90%" alignItems="center" margin="auto" mt="20px" mb={"20px"}>
                        <CloseIcon cursor={"pointer"} onClick={handleClose} />
                        <Link   to={`/tool/${el._id}`}><Text cursor={"pointer"}  border="1px solid" padding="3px" px={2} borderRadius="5px">Open in new tab</Text></Link>
                    </Flex>


                    <Telement el={el} />

                </Box>
            </Modal>
        </>
    )
}