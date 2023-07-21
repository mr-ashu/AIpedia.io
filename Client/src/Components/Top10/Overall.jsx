import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "../../Style/List.module.css";
import { Flex, Text } from '@chakra-ui/react';
import { ImageBackground  } from '../ListModal';
import axios from 'axios';
import { BsCaretUpSquare } from 'react-icons/bs';


 
export const Overall = () => {
 

    const [deleteLoading, setDeleteLoading] = useState(false);
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);

    const [Category, setcat] = useState([]);

    const [pageName, setPageName] = useState("");
    const [FilterLoader, setFilterLoader] = useState(false);
    const [sort, setSort] = useState("");
    const [sortLoader, setSortLoader] = useState();

    const [showLoader, setShowLoader] = useState(false);


    const [userinfo, setUserInfo] = useState({
        works_with: [],
        Pricing: [],
        others_features: [],

    });



    const getData = async (page) => {
        setShowLoader(true);
        let payload = {};

        if (userinfo.Pricing.length > 0) {
            payload.Pricing = userinfo.Pricing;
        }
        if (userinfo.works_with.length > 0) {
            payload.works_with = userinfo.works_with;
        }
        if (userinfo.others_features.length > 0) {
            payload.others_features = userinfo.others_features;
        }
        if (Category.length > 0) {
            payload.Category = Category;
        }

        try {
            let res = await axios.post(
                `${process.env.REACT_APP_API}/data/get?sort=${sort}&page=${page}&limit=9`,
                payload
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
        <>
            {
                data?.splice(0, 10).map((el, i) => (
                    <Flex mt="40px" justifyContent="space-between" alignItems="center">

                        <Flex gap="19px" alignItems="center">
                            <Text fontWeight="600" lineHeight="20px" fontSize="16px" mr="20px">#{i+1}</Text>
 
                            <Box>
                                <ImageBackground imageUrl={el.Logo} />
                            </Box>
                            <Box>
                                <Text fontSize="15px" lineHeight="24px" fontWeight="600" >{el.Title}</Text>
                                <Text mt="10px" w="80%" fontSize="15px" lineHeight="20px" className={style.dec}>{el.Tagline}</Text>
                            </Box>
                        </Flex>




                        <Box mt="40px">
                            <BsCaretUpSquare size={19} />
                        </Box>


                    </Flex>

                ))
            }
        </>



    )
}
