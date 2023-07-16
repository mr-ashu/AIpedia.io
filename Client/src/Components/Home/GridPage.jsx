import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

import dummy from "../../Utils/dummy.jpeg";
import style from "../../Style/Grid.module.css";

import { Avatar, Button, CircularProgress, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { Featured } from '../Featured';
import { Link } from 'react-router-dom';
import Slideshow from './Crousel';
import { Modalcomp } from '../Modal';
import { useSelector } from 'react-redux';
import axios from 'axios';





export const GridPage = ({data,showLoader}) => {




    return (

     <Stack>   

            <Box className={style.gridbox}>


                {
                    data?.map((el,i) => (

                        <Box key={i}>
                            <Modalcomp el={el} i={i}/>
                        </Box>

                    ))
                }


            </Box>

            {showLoader ? (
                <Box
                    height="100px"
                    w="100%"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <CircularProgress />
                </Box>
            ) : null}

            </Stack>

    )
}



