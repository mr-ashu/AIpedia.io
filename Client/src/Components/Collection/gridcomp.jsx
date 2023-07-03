
import React, { useEffect } from 'react'
import chatgpt from "../../Utils/ChatGPT.svg";
import dummy from "../../Utils/dummy.jpeg";
import style from "../../Style/Grid.module.css";

import { Avatar, Box, Button, Flex, Image, Modal, Text } from '@chakra-ui/react';

import { Modalcomp } from '../Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
  
export const Gridcomp = () => {


    let [data, setData] = useState([]);

    const userData = useSelector((state) => state.userReducer.loginData);


    let token = userData.data;
 

    const getData = async () => {


        try {


            const res = await axios.get(
                `http://localhost:9000/data/get/userlikes/data`,

                { headers: { token } }
            );

            setData(res.data.data)

        } catch (err) {


        }
    };
    useEffect(() => {

        getData();

    }, []);

    return (

        <Box mt="30px" className={style.gridbox}>


            {
                data?.map((el ,i) => (


                    <Modalcomp el={el.videoID} i={i} />


                ))
            }


        </Box>


    )
}



