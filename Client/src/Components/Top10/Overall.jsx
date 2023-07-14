import { Box } from '@mui/material'
import React from 'react'
import chatgpt from "../../Utils/ChatGPT.svg";
import dummy from "../../Utils/dummy.jpeg";
import style from "../../Style/List.module.css";
import star from "../../Utils/Star.svg"
import icon from "../../Utils/Polygon 6.svg"
import {  Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Rightbar } from './Rghtbar';
import { Toplist } from './toplistList';


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
export const Overall = () => {
  return (
    <>
    <Toplist data={data}/>
     </>


 
  )
}
