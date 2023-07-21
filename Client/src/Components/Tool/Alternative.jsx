import { Box, Divider, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import tool from "../../Style/Tool.module.css"
import style from "../../Style/Featured.module.css"
import { RiShareBoxFill } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';



export const Alternative = ({ el }) => {
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    let [loading, setLoading] = useState(false);
    let [hasMore, setHasMore] = useState(true);

    const getData = async (page) => {
        if (loading || !hasMore) return;

        setLoading(true);
        const payload = {
            Category: el.Category,
        };

        try {
            let res = await axios.post(
                `${process.env.REACT_APP_API}/data/get?page=${page}`,
                payload
            );

            if (res.data.data.length === 0) {
                setHasMore(false);
            } else {
                setData(res.data.data);
            }

            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        getData(page);
        // Add cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", infinitScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    const infinitScroll = () => {
        if (
            !loading &&
            hasMore &&
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", infinitScroll);
    }, [page]); // Add 'page' to the dependency array


    console.log(data);

    return (
        <>

            <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} mt="20px" />
            <Box>
                <Box w="100%" m="auto" borderRadius="3px">
                    <Text textTransform="uppercase" mb="20px" mt="20px" fontWeight="600" fontSize="14px" lineHeight="20px">Alternative tools</Text>



                    <Box className={tool.rtool} w="100%" m="auto">

                        {
                            data?.map((ele) => (
                                <Box>

                                    <Flex alignItems="center" gap="10px"  >
                                        <Image boxSize="50px" height="40px" src={ele.Logo} />

                                        <Box>

                                            <Flex alignItems="center" justifyContent="space-between">
                                                <Link to={`/tool/${ele._id}`}  >
                                                    <Text fontSize="13px" fontWeight="600" color="#22222" >{ele.Title}</Text>

                                                </Link>
                                                <Link t={el.URL} target="_blank">
                                                    <RiShareBoxFill size={14} />
                                                </Link>

                                            </Flex>
                                            <Text w="90%" fontSize="12px" lineHeight="20px" className={style.desc}>{ele.Tagline}</Text>



                                        </Box>


                                    </Flex>

                                </Box>
                            ))
                        }

                    </Box>

                </Box>
            </Box>





            <Divider border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} mt="20px" />

        </>
    )
}
