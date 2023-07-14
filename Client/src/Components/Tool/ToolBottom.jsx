import { Avatar, Box, Divider, Flex, Image, ListItem, Stack, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import fb from '../../Utils/Facebook-logo.png';
import insta from '../../Utils/instagram.png';
import youtube from '../../Utils/youtube.webp';
import discord from '../../Utils/Discord.svg';
import tool from "../../Style/Tool.module.css"
import fimg from "../../Utils/micon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useSnapCarousel } from 'react-snap-carousel';
import Slider from 'react-slick';
import { Comment } from './Comment';


let imge = [
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
    {
        img: "https://media.istockphoto.com/id/1488642935/photo/broken-lens-filter-in-hand-cracked-photo-filter.webp?s=170667a&w=0&k=20&c=RWpRoAMEmZNdV81-ajhW7cEDGqyUAMz3-8nBb2W9quA=",

    },
]


let data = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
]
export const ToolBottom = ({ el, id }) => {


    return (
        <Box mt="20px" mb="50px" >



            <Text fontSize="16px" lineHeight="24px" fontWeight="600" mt="20px">
                What is {el.Title} ?

            </Text>

            <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                {el.Description}
            </Text>

            {/* --------------------------------------- */}

            <Stack border="1px solid" w="80%" m="auto" mt="20px">





                <Box  >

                </Box>






            </Stack>



            {/* <Stack w="60%"  >
                <Text mt="15px" fontSize="16px" fontWeight="600" lineHeight="24px">
                    Features

                </Text>

                <Box  ml="20px" fontSize="16px" fontWeight="400" lineHeight="24px">

                    <UnorderedList w="40%">
                        {
                            el.key_features?.map((e) => (

                                <ListItem>{e}</ListItem>

                            ))
                        }
                    </UnorderedList>

                </Box>
            </Stack> */}
            <Divider border="1px solid #E6E6E6" mt="20px" />
            <Box>
                <Box w="100%" m="auto" borderRadius="3px">
                    <Text textTransform="uppercase" mb="20px" mt="20px" fontWeight="600" fontSize="14px" lineHeight="20px">Related AI Tools</Text>



                    <Box className={tool.rtool} w="100%" m="auto">

                        {
                            data.map((ele) => (
                                <Box>

                                    <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                        <Image boxSize="50px" height="40px" src={fimg} />

                                        <Box>

                                            <Flex alignItems="center" gap={"20px"}><Text fontSize="14px" fontWeight="600" color="#22222" >{ele.title}</Text>  <BsBoxArrowUpRight size={12} /></Flex>
                                            <Text w="80%" fontSize="12px" lineHeight="20px">{ele.desc}</Text>



                                        </Box>


                                    </Flex>

                                </Box>
                            ))
                        }

                    </Box>

                </Box>
            </Box>





            <Divider border="1px solid #CCCCCC" mt="20px" />

            <Comment el={el} id={id} />
        </Box>
    )
}
