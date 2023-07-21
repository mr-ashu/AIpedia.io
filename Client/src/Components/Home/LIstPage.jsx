import { Box } from '@mui/material'
import React from 'react'
import { CircularProgress, Stack } from '@chakra-ui/react';
import { ListModal } from '../ListModal';

export const LIstView = ({ data, showLoader }) => {



    return (

        <Stack>
        

            <Box>
                {
                    data?.filter((e)=>e.verify).map((el, i) => (

                        <Box key={i}>
                            <ListModal el={el} i={i} />
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



