import * as React from 'react';
import chatgpt from "../Utils/ChatGPT.svg";
import { Box, Button, Flex, Image, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import style from "../Style/Grid.module.css";
 
import visit from "../Utils/Visit.svg"
import star from "../Utils/Star.svg"
import collection from "../Utils/Collection.svg"
 
import Modal from '@mui/material/Modal';
import { CloseIcon } from '@chakra-ui/icons';
import { Telement } from './Tool/Telement';
import { Link, useNavigate } from 'react-router-dom';
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
            <Box border="1px solid #CFCDCD " borderRadius="3px" textAlign="left">
                <Box >
                    <img style={{cursor:"pointer"}} onClick={handleOpen} className={style.image} src={el.image}  alt="img"/>
                    <Box className={style.icon}>
                        <Flex h="fit-content" width="100%" justifyContent="flex-end"  >
                           
                            <Box mr="10px" bg="white" p="4px" borderRadius="4px" >

                               <ShareModel url={url}/>

                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box m="10px"  >
                    <Flex mt="-25px" justifyContent="space-between" alignItems="start">
                       <Flex cursor={"pointer"} maxW="60%" onClick={handleOpen} alignItems="center" gap="7px">
                       <Image h="20px" w="20px" src={chatgpt} />
                       <Text className={style.title}  fontWeight="bold">{ el.title}</Text>
                       </Flex>
                       
                        <Box  alignItems="center" textAlign="center"  > 
                        <Likes el={el}/> 
                        <Text>{el.likes}</Text>
                        </Box>
                    </Flex>

                    <Flex   gap="10px" alignItems="center">
                    <Flex gap="5px">
                        {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;
                            return (
                                <Box>
                                    <FaStar
                                     
                                       size={14}
                                        value={givenRating}
                                        color={
                                            givenRating <= 3
                                                ? "orange"
                                                : "rgb(192,192,192)"
                                        }
                                    />
                                </Box>

                            );
                        })}
                    </Flex>

                        <Text lineHeight={"15px"} fontSize="13px">(3)</Text>
                        <Flex gap="3px" border="1px solid #CCCCCC" px={1} py={"2px"} borderRadius="2px" alignItems="center">
                         <MdOutlineVerified/>
                        <Text   fontSize="13px" fontWeight="400" lineHeight="16px"  >{el.price}</Text>
                        </Flex>
                    </Flex>

                    <Text className={style.dec} mt="10px" fontSize="15px" lineHeight="24px" fontWeight="400"  >
                        {el.description}
                    </Text>
                    <Flex alignItems="center" lineHeight="24px" fontSize="12px" mt="10px" gap="5px">
                        <Text  fontWeight="600">
                            Tags:
                        </Text>
                        <Text fontStyle="italic" fontWeight="400">Video editing, Upscale, Feee</Text>
                    </Flex>

                    <Flex mt="25px" justifyContent="space-evenly" alignItems="center" mb="15px" w="100%" gap="10px">
                         <Save id={el._id}/>
                        <Link to={el.links} target="_blank">  <Button color="white" className={style.savebtn} borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" h="29.68px" _hover={{ bg: "" }} bg="#3B89B6"> <Image src={visit} /><Text> Visit</Text></Button></Link>
                    </Flex>
                </Box>


            </Box>


            <Modal

                className={style.modal}

                open={open}
                onClose={handleClose}

            >
                <Box bg={useColorModeValue("white", "#464444")} overflow="auto" sx={{ width: "fit-content" }}>
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