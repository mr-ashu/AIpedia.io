import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import chatgpt from "../../Utils/ChatGPT.svg";
import dummy from "../../Utils/dummy.jpeg";
import style from "../../Style/List.module.css";
import { BsArrowBarUp, BsBoxArrowUpRight, BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import visit from "../../Utils/Visit.svg"
import star from "../../Utils/Star.svg"
import icon from "../../Utils/Polygon 6.svg"
import { Avatar, Button, Flex, Image, List, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
 
import { Link } from 'react-router-dom';
import { Rightbar } from './Rghtbar';


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
export const Toplist = ({ open }) => {


    useEffect(() => {

    }, [])

    return (

        <Box width="100%">

            <Flex textAlign="center" justifyContent="space-between" gap="40px"  >




                <Stack>



                    <Box>

                         <Text textAlign="justify" fontSize="15px" lineHeight="24px" fontWeight="400">
                         Our Top 10 Page showcases the most coveted and influential AI tools, carefully curated by our advanced algorithm. Utilizing a comprehensive calculation based on factors such as views, likes, reviews, and more, we present you with a definitive list of the industry's top-performing AI tools.
                         </Text>
                        {
                            data?.map((el, i) => (

                                <Flex key={i} alignItems="center" mt="40px">
                                    <Text fontSize={"16px"} fontWeight={"600"}>#{i + 1}</Text>
                                    <Box borderRadius="3px" textAlign="left"  >
                                        <Flex ml="20px" gap="10px" alignItems="center" height="100%">
                                            <img width="80px" height="78px" src={el.logo} />
                                            <Stack w="90%" m="10px">

                                                <Text fontWeight="bold">{el.title}</Text>





                                                <Box className={style.shide}>
                                                    <Flex gap="10px" alignItems="center">
                                                        <img width="13%" src={star} />
                                                        <Text lineHeight={"15px"} fontSize="13px">({el.rating})</Text>
                                                        <Text backgroundColor="" fontSize="13px" fontWeight="400" lineHeight="16px" border="1px solid #CCCCCC" px={1} borderRadius="2px">{el.type}</Text>
                                                    </Flex>
                                                </Box>

                                                <Text className={style.dec} fontSize="15px" textAlign="left" fontWeight="400"  >
                                                    {el.desc}
                                                </Text>

                                                <img className={style.lhide} width="50%" src={star} />

                                                <Button bg="rgba(118, 161, 191, 0.3)" borderRadius={"50px"} w="83px" height="24px" padding="3px" textAlign="center" fontSize="12px" fontWeight="400">
                                                    {el.cate}
                                                </Button>





                                            </Stack>


                                            <Image mt="20px" border="1px solid " src={icon} />



                                        </Flex>


                                    </Box>
                                </Flex>

                            ))
                        }


                    </Box>

                </Stack>


 
                    <Rightbar/>
             


            </Flex>



        </Box>

    )
}



