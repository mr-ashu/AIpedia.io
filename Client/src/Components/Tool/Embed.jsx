import { Box, Button, Divider, Flex, Image } from '@chakra-ui/react'
import React from 'react'

import style from "../../Style/Tool.module.css"
import logo from "../../Utils/LOGO.svg"
export const Embed = () => {
    return (
        <>
            <Box  className={style.rating} w="90%" alignItems="center" m="auto" mt="40px">
                <Flex alignItems="center" gap="70px">
                    <Image src={logo} />

                </Flex>

                <Button borderRadius="7px" color="white" padding="14px, 17px, 14px, 17px" bg="#3B89B6" _hover={{ bg: "none" }}>Advertise this tool</Button>

            </Box>


            <Divider mt="40px" border="1px solid #CCCCCC" />

        </>
    )
}
