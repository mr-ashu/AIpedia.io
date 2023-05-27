import { Avatar, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { Box } from '@mui/material'
import React from 'react'
import style from "../Style/Featured.module.css";
import visit from "../Utils/Visit.svg";
import fimg from "../Utils/dummy.jpeg";
let fdata=[
    {
        icon:fimg,
        title:"The Collect Button",
        desc:"Transform anything on your website intCXXCX"
    },
    {
        icon:fimg,
        title:"The Collect Button",
        desc:"Transform anything on your website intCXXCX"
    },
    {
        icon:fimg,
        title:"The Collect Button",
        desc:"Transform anything on your website intCXXCX"
    },
    {
        icon:fimg,
        title:"The Collect Button",
        desc:"Transform anything on your website intCXXCX"
    },
    {
        icon:fimg,
        title:"The Collect Button",
        desc:"Transform anything on your website intCXXCX"
    },
]


let triview=[
    {
    icon:fimg,
    title:"The Collect Button",
    desc:"Transform anything on your website intCXXCX",
    rating:"3"
},
{
    icon:fimg,
    title:"The Collect Button",
    desc:"Transform anything on your website intCXXCX",
    rating:"3"
},
{
    icon:fimg,
    title:"The Collect Button",
    desc:"Transform anything on your website intCXXCX",
    rating:"3"
}

]
export const Featured = () => {
  return (
    <Box className={style.featured}>
       <Text>Featured</Text>
           {
            fdata.map((el)=>(
                <Box mt="10px">
                    <Flex alignItem="center" gap="10px">
                        <Image boxSize="50px" height="40px" m="auto" src={el.icon}/>
                        <Box >
                            <Text  fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>
                            <Text fontSize="12px" lineHeight="20px">{el.desc}</Text>
                        </Box>
                        
                        <Image color="black" src={visit}/>
                    </Flex>
                </Box>
            ))
           }
    </Box>
  )
}
