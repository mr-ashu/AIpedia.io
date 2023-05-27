import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import chatgpt from "../Utils/ChatGPT.svg";
import dummy from "../Utils/dummy.jpeg";
import style from "../Style/List.module.css";
import { BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import visit from "../Utils/Visit.svg"
import star from "../Utils/Star.svg"
import collection from "../Utils/Collection.svg"
import { Avatar, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
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
export const ListView = () => {


    useEffect(() => {

    }, [])

    return (

        <Box className={style.grid} position="relative" textAlign="center" justifyContent="center" width={"100%"}      >

            <Box className={style.gridbox}>


                {
                    data.map((el, i) => (
                        <Box border="1px solid #CCCCCC" borderRadius="3px" w="80%" mt="15px" py={1} px={1} textAlign="left">

                            <Flex justifyContent="space-between" w="100%" alignItems="center" gap="20px">
                                <Image boxSize='100px' src={el.logo} m="auto" />

                                <Stack width="80%" margin="auto">
                                    <Text   fontWeight="bold">{el.title}</Text>
                                    <Flex alignItems="center" justifyContent="space-between" w="100%">
                                        <Flex mt="15px" gap="10px" alignItems="center">
                                            <Image src={star} />
                                            <Text lineHeight={"15px"} fontSize="13px">({el.rating})</Text>
                                            <Text w="fit-content" backgroundColor="gray" fontSize="13px" fontWeight="400" px={1} lineHeight="16px" border={"1px solid"} borderRadius="2px">{el.type}</Text>
                                        </Flex>
                                        <Flex alignItems="center" gap={"50px"}>
                                            <BsFillShareFill color="black" />
                                            <Button lineHeight="31px" borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" py={-1} px={7} backgroundColor="#3B89B6"> <Image src={visit} /><Text> Visit</Text></Button>
                                        </Flex>
                                    </Flex>
                                    <Text mt="15px" fontSize="15px" lineHeight="24px" width="100%" textAlign="justify" fontWeight="400"  >
                                        {el.desc}
                                    </Text>
                                    <Flex alignItems="center" justifyContent="space-between">
                                        <Button borderRadius={"50px"} w="fit-content" px={5} height={"20px"} fontSize="12px" lineHeight="24px" mt="15px" fontWeight="400">
                                            {el.cate}
                                        </Button>
                                        <Flex alignItems="center" gap="50px">
                                            <Button lineHeight="31px" borderRadius="5px" fontSize="14px" fontWeight="400" gap="5px" py={-1} px={7} background={"transparent"}><Image src={collection} />Save</Button>
                                            <Flex alignItems="center" gap="7px"> <AiOutlineHeart /> {el.like}</Flex>
                                        </Flex>
                                    </Flex>
                                </Stack>
                            </Flex>
                        </Box>
                    ))
                }


            </Box>


            <Box height="400px" w="100%">

            </Box>

        </Box>

    )
}
