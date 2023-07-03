import { Box, Modal } from '@mui/material'
import React, { useEffect } from 'react'

import style from "../../Style/List.module.css";

import { CircularProgress, Stack } from '@chakra-ui/react';

import { ListModal } from '../ListModal';

export const LIstView = ({ data, showLoader }) => {



    return (

        <Stack   >

              <Box className={style.listbox}   >




                {
                    data?.map((el,i) => (

                        <Box key={i}>
                            <ListModal el={el} />
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



