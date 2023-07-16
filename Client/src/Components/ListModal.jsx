import * as React from 'react';
import chatgpt from "../Utils/ChatGPT.svg";
import { Box, Button, Flex, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import style from "../Style/List.module.css";
import { BsBoxArrowUpRight, BsFillShareFill } from 'react-icons/bs';
import visit from "../Utils/Visit.svg"
 
import Modal from '@mui/material/Modal';
import { CloseIcon } from '@chakra-ui/icons';
import { Telement } from './Tool/Telement';
import { Link } from 'react-router-dom';
import ShareModel from './Share';
import { Likes } from './Likes';
import { MdOutlineVerified } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import Save from './Home/Save';
import excel from "../Utils/Spreadsheet_icon.svg"
import sopify from "../Utils/sopify.svg"
import vscode from "../Utils/Vs code.svg"
import figma from "../Utils/Figma.svg"
import github from "../Utils/Github.svg"
import mobile from "../Utils/Mobile app.svg"
import slack from "../Utils/Slack.svg"
import browser from "../Utils/Browser Extension.svg"
import Wordpress from "../Utils/Wordpress.svg"


const ImageBackground = ({ imageUrl }) => {

    const [dominantColor, setDominantColor] = React.useState('');

    React.useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
            const colorCounts = {};
            let maxCount = 0;
            let dominantColor = '';


            for (let i = 0; i < imageData.length; i += 4) {
                const color = `${imageData[i]}, ${imageData[i + 1]}, ${imageData[i + 2]}`;
                colorCounts[color] = (colorCounts[color] || 0) + 1;
                if (colorCounts[color] > maxCount) {
                    maxCount = colorCounts[color];
                    dominantColor = `rgb(${color},.5)`;
                }
            }

            setDominantColor(dominantColor);
        };

        img.src = imageUrl;
    }, [imageUrl]);



    return (
        <Box display="flex" backgroundColor={dominantColor} h="80px" w="80px" borderRadius="5px" justifyContent="center" alignItems="center"   >
            <img style={{ margin: "auto", display: "block", borderRadius: "5px" }} width="35px" height="35px" src={imageUrl} alt="Logo" />

        </Box>

    );
};

export const ListModal = ({ el, i }) => {

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

            <Box position="relative" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} borderRadius="3px" textAlign="left" mb="30px" py="10px" w="100%" >



      
                    <Flex ml="20px" w="100%" gap="10px" alignItems="center" height="100%" >



                        <ImageBackground cursor={"pointer"} onClick={handleOpen} imageUrl={el.Logo} />

                        <Stack w="100%" m="10px">
                            <Flex justifyContent="space-between" alignItems="center">
                                <Flex alignItems="center">
                                    <Text fontWeight="bold" cursor={"pointer"} onClick={handleOpen}>{el.Title}</Text>
                                    {
                                        i === 0 || i === 1 || i === 2 && el.featured ?
                                            <Text m="9px" textAlign="center" justifyContent="center" w="fit-content" px="5px" py="1px" bg="linear-gradient(134deg, #4283B0 8.39%, #F31F92 70.00%)" borderRadius="3px" fontSize="12px" color="#EEE" lineHight="23px" fontWeight="400">Featured</Text>

                                            : ""

                                    }
                                </Flex>


                                <Box className={style.shide}>
                                    <Flex mr="30px" h="fit-content" w="fit-content" justifyContent="space-between" gap="70px" alignItems="center">

                                        <Box mr="5px" >
                                            <ShareModel url={url} />

                                        </Box>
                                        <Link to={el.URL} target={'_blank'}>
                                            <Button _hover={{ bg: "" }} color="white" className={style.savebtn} borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" h="29.68px" bg="#3B89B6">
                                                <img src={visit} alt="visit" /><Text> Visit</Text>
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

                                    <Flex gap="7px" borderLeft="1px" borderRight="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} pl="8px" pr="8px" alignItems="center">
                                        <MdOutlineVerified />
                                        <Text fontSize="13px" fontWeight="400" lineHeight="16px"  >{el.Pricing}</Text>
                                    </Flex>

                                    <Flex gap="7px" w="fit-content">


                                        {
                                            el.works_with.map((e, i) => (
                                                <>
                                                    {

                                                        e.includes("Spreadsheet") ? <img alt="icon" borderRadius="4px" boxSize="15px" src={excel} /> :
                                                            e.includes("Chatgpt") ? <img alt="icon" boxSize="15px" src={chatgpt} /> :
                                                                e.includes("VS Code") ? <img alt="icon" boxSize="15px" src={vscode} /> :
                                                                    e.includes("Github") ? <img alt="icon" boxSize="15px" src={github} /> :
                                                                        e.includes("Mobile app") ? <img alt="icon" boxSize="15px" src={mobile} /> :
                                                                            e.includes("Wordpress") ? <img alt="icon" boxSize="15px" src={Wordpress} /> :
                                                                                e.includes("Figma") ? <img alt="icon" boxSize="15px" src={figma} /> :
                                                                                    e.includes("Browser Extension") ? <img alt="icon" boxSize="15px" src={browser} /> :
                                                                                        e.includes("Slack") ? <img alt="icon" boxSize="15px" src={slack} /> :
                                                                                        e.includes("Shopify") ? <img alt="icon" boxSize="15px" src={sopify} /> :
                                                                                            ""
                                                    }

                                                </>
                                            ))
                                        }
                                    </Flex>
                                </Flex>
                            </Box>

                            <Text className={style.dec} fontSize="15px" lineHeight="24px" textAlign="left" fontWeight="400"    >
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
                                <Flex alignItems="center" gap="5px" fontSize="12px" fontWeight="400" lineHeight="20px">


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
                <Box bg={useColorModeValue("var(--landing-page, #FFF)", "#2C2C2C")} overflow="auto" sx={{ width: "fit-content" }}>
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