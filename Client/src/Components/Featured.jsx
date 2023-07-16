import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import style from "../Style/Featured.module.css";
 
import fimg from "../Utils/micon.svg";
 
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { RiShareBoxFill } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
let fdata = [
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
    }
 
]





export const Featured = () => {
    
    const [deleteLoading, setDeleteLoading] = useState(false);
    let [data, setData] = useState([]);

    let [page, setPage] = useState(1);
    let [higligeted, sethigligeted] = useState([]);

    const [pageName, setPageName] = useState("");
    const [FilterLoader, setFilterLoader] = useState(false);
    const [sort, setSort] = useState("");
    const [sortLoader, setSortLoader] = useState();

    const [showLoader, setShowLoader] = useState(false);

 



    const getData = async (page) => {
        setShowLoader(true);


        try {
            let res = await axios.post(
                `${process.env.REACT_APP_API}/data/get?sort=${sort}&page=${page}`,

            );

            setData((prev) => [...prev, ...res.data.data]);
            setShowLoader(false);
        } catch (err) {
            setShowLoader(false);
            console.log(err);
        }
    };



 




    useEffect(() => {
       
        if (pageName === "filter") {
            setData([]);
            setPageName("");
        }
        if (pageName === "sort") {
            setData([]);
            setPageName("");
        }

        if (deleteLoading) {
            setDeleteLoading(false);
            window.location.reload();
        }

        if (pageName === "") {

            getData(page);
        }

 
       

    }, [page, pageName, deleteLoading, FilterLoader, sortLoader]);

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
    
             <Box className={style.featured} mt="30px">
            <Box>
                    <Text textTransform="uppercase"     fontWeight="600" lineHeight="20px" fontSize="12px">Highlighted tools</Text>
                    {
                        data?.filter((e)=>e.highlighted===true).map((el, i) => (
                            <Box key={i} mt="30px" >

                                <Flex alignItems="center" gap="10px"  >
                                    <Image borderRadius="5px" boxSize="40px"   src={el.Logo} />

                                    <Box>

                                        <Flex w="90%" alignItems="center" gap={"20px"} justifyContent="space-between">
                                       <Link to={`/tool/${el._id}`}> <Text fontSize="13px" fontWeight="600" color="#22222" lineHeight="24px">{el.Title}</Text> </Link>
                                        <Link to={el.URL}><RiShareBoxFill size={14}/></Link>
                                         </Flex>
                                        <Text mt="5px" w="90%" fontSize="12px" lineHeight="20px" className={style.desc1} >{el.Tagline}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} mt="30px" />

                </Box>

                <Text w="95%" fontSize="13px" lineHeight="24px" fontWeight="600" mt="30">Stay up-to-date with latest and greatest AI tools with our exclusive newsletter</Text>

                <Box mr="40px">
                   
                    <Input mt="15px" fontSize="13px" placeholder='Your email' border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} />
                    <Button mt="15px" w="100%" bg="#3B89B6" color="#F8F8F8" fontSize="14px" fontWeight="600"  >Subscribe to the newsletter</Button>

                    <Text mt="15px" fontSize="12px" fontWeight="400" >Read the latest issue <ArrowForwardIcon m="auto" /> </Text>

                </Box>
                <Divider border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} mt="30px" />
            </Box>
    
    )
}
