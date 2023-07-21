import { Box } from '@mui/material'
import React from 'react'
 
import style from "../../Style/Grid.module.css";

import {   CircularProgress   } from '@chakra-ui/react';

 
import { Modalcomp } from '../Modal';
 





export const GridPage = ({data,showLoader}) => {




    return (

     <>   

            <Box className={style.gridbox}>


                {
                    data?.filter((e)=>e.verify).map((el,i) => (

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

            </>

    )
}



