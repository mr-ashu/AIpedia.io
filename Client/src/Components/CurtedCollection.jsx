import { Box, Divider, Flex, Image, Text, useColorModeValue, } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import style from "../Style/Featured.module.css";

import { HiOutlineBookmark } from "react-icons/hi";
import axios from 'axios';
import excel from "../Utils/Spreadsheet_icon.svg"
import chatgpt from "../Utils/ChatGPT.svg"
import vscode from "../Utils/Vs code.svg"

import figma from "../Utils/Figma.svg"
import github from "../Utils/Github.svg"
import mobile from "../Utils/Mobile app.svg"
import slack from "../Utils/Slack.svg"
import browser from "../Utils/Browser Extension.svg"
import Wordpress from "../Utils/Wordpress.svg"
import sopify from "../Utils/sopify.svg"
import { FaToolbox } from 'react-icons/fa';
import moment from 'moment';
import { Link } from 'react-router-dom';


export const CurtedCollection = () => {
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);

    const getData = async (page) => {
        try {


            const res = await axios.get(
                `${process.env.REACT_APP_API}/space/get/All`,

            );

            setData(res.data.data.space);
        } catch (err) { }
    };




    useEffect(() => {

        getData(page);
    }, [page]);


    ;


    const infinitScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", infinitScroll);
        return () => window.removeEventListener("scroll", infinitScroll);
    }, []);




    return (
        <div>
            <Box className={style.featured}>


                <Box w="100%">
                    <Flex textTransform="uppercase" alignItems="center" gap="8px" mt="30px" fontWeight="600" fontSize="13px" lineHeight="20px"  >
                        <Text>Curated collections</Text><HiOutlineBookmark size={15} /> </Flex>
                    {
                        data?.map((el, i) => (
                            <Box mt="30px" key={i} w="100%">
                                <Link to={`/collection/${el._id}`}>
                                    <Flex alignItems="center" gap="10px" w="100%" h="100%">

                                        {
                                            el.userID.isAdmin ? <Text width="fit-content" fontSize="10px" fontWeight="600" color="#3B89B6">| By AI Zones </Text> : ""
                                        }



                                        <Box className={style.grid_icon} minH="100%">

                                            {
                                                el.tool?.filter((ele) => ele !== "").map((e, i) => (
                                                    <Box h="100%"  >
                                                        {

                                                            i === 0 ? <Image borderRadius="5px" boxSize="25px" src={e} /> :
                                                                i === 1 ? <Image borderRadius="5px" boxSize="25px" src={e} /> :
                                                                    i === 2 ? <Image borderRadius="5px" boxSize="25px" src={e} /> :
                                                                        i === 3 ? <Image borderRadius="5px" boxSize="25px" src={e} /> :
                                                                        ""

                                                        }

                                                    </Box>
                                                ))
                                            }
                                        </Box>


                                        <Box>

                                            <Text fontSize="13px" fontWeight="600" color="#22222" lineHeight="24px" >{el.space_name}</Text>
                                            <Flex alignItems="center" gap="3px" fontSize="10px" fontWeight="400" lineHeight="20px">
                                                <Text >Updated  {moment(el.updatedAt).format("MMM Do")} </Text>
                                                | <Text color="#3B89B6">{el.tool.length} tools</Text>

                                                {
                                                    el.userID.isAdmin ? <Text width="fit-content" fontSize="10px" fontWeight="600" color="#3B89B6">| By AI Zones </Text> : ""
                                                }

                                            </Flex>
                                            <Text w="90%" fontSize="12px" lineHeight="20px" className={style.desc}>{el.description} </Text>



                                        </Box>


                                    </Flex>
                                </Link>
                            </Box>
                        ))
                    }

                    <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} mt="30px" />

                </Box>

            </Box>
        </div>
    )
}
