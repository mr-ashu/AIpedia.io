import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import chatgpt from "../Utils/ChatGPT.svg";
import dummy from "../Utils/dummy.jpeg";
import style from "../Style/Grid.module.css";
import { BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import visit from "../Utils/Visit.svg"
import star from "../Utils/Star.svg"
import collection from "../Utils/Collection.svg"
import { Avatar, Button, Flex, Image, Text } from '@chakra-ui/react';
let data = [
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },
    {
        img: dummy,
        logo: chatgpt,
        title: "ChatGPT",
        type: "Freemium",
        desc: "We've trained a model called ChatGPT which interacts in a conversational way.",
        rating: 3,
        cate: "video editing",
        like: 447

    },

]
export const GridPage = () => {


    useEffect(() => {

    }, [])

    return (

        <Box className={style.grid} position="relative" textAlign="center" justifyContent="center" width={"90%"}      >

            <div className={style.gridbox}>


                {
                    data.map((el, i) => (
                        <Box border="1px solid #CCCCCC " borderRadius="3px" textAlign="left">
                            <Box color="black">
                                <Image   w="100%" src={el.img} />
                                <Box className={style.icon}>
                                    <Flex width="100%" justifyContent="space-between" alignItems="center">
                                        <Avatar src={el.logo} />
                                        <BsFillShareFill color="black" />
                                    </Flex>
                                </Box>
                            </Box>

                            <Box px={1} py={1} w="100%">
                                <Flex mt="-50px" justifyContent="space-between" alignItems="center">
                                    <Text color="black" fontWeight="bold">{el.title}</Text>
                                    <Flex alignItems="center" gap="7px"> <AiOutlineHeart /> {el.like}</Flex>
                                </Flex>

                                <Flex mt="15px" gap="10px" alignItems="center">
                                    <Image src={star} />
                                    <Text lineHeight={"15px"} fontSize="13px">{el.rating}</Text>
                                    <Text backgroundColor="gray" fontSize="13px" fontWeight="400" px={1} lineHeight="16px" border={"1px solid"} borderRadius="2px">{el.type}</Text>
                                </Flex>

                                <Text mt="15px" fontSize="15px" lineHeight="24px" width="100%" textAlign="justify" fontWeight="400"  >
                                    {el.desc}
                                </Text>
                                <Button borderRadius={"50px"}   w="fit-content" px={5} height={"20px"} fontSize="12px" lineHeight="24px" mt="15px" fontWeight="400">
                                    {el.cate}
                                </Button>
                                <Flex w="80%" margin="auto" mt="25px" justifyContent="space-between" alignItems="center" mb="15px" >
                                    <Button lineHeight="31px" borderRadius="5px" border="1px solid #CCCCCC" fontSize="14px" fontWeight="400" gap="5px" py={-1} px={7} background={"transparent"}><Image src={collection} />Save</Button>
                                    <Button lineHeight="31px" borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" py={-1} px={7} backgroundColor="#3B89B6"> <Image src={visit} /><Text> Visit</Text></Button>
                                </Flex>
                            </Box>


                        </Box>
                    ))
                }


            </div>


            <Box height="400px" w="100%">

            </Box>

        </Box>

    )
}
