import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const IconandPrivacy = () => {
    return (
        <Box>


            <Flex w="85%" justifyContent="space-between">


                <Facebook sx={{ fontSize: "28px" }} />
                <Instagram sx={{ fontSize: "28px" }} />
                <YouTube sx={{ fontSize: "28px" }} />
                <Twitter sx={{ fontSize: "28px" }} />
            </Flex>
            <Divider mt="30px" mb="30px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} />

            <Box fontSize="12px" mt="30px" fontWeight="400">

                <Link to="/privacy"><Text >Terms : Privacy and Cookies ·</Text></Link>
                <Text textTransform="uppercase" mt="13px" fontSize="10px" lineHeight="normal">© 2023 AI ZOnes</Text>
            </Box>


        </Box>
    )
}
