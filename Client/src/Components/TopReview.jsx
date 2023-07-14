import { Box, Divider, Flex, Image, Text, useColorModeValue, } from '@chakra-ui/react'

import React from 'react'
import style from "../Style/Featured.module.css";

import fimg from "../Utils/micon.svg";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';


let triview = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",
        rating: "3"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",
        rating: "3"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",
        rating: "3"
    }

]
export const TopReview = () => {
    return (
        <div>
            <Box className={style.featured}>


                <Box>
                    <Text textTransform="uppercase" mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Top Reviewed</Text>
                    {
                        triview.map((el, i) => (
                            <Box key={i} >

                                <Flex   gap="10px" paddingBottom="20px"  >
                                    <Image mt="2px" boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex alignItems="center" w="90%" justifyContent="space-between" mt="0px">
                                            <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>
                                            <RiShareBoxFill size={14}/>
                                        </Flex>
                                        <Text className={style.desc} w="80%" fontSize="12px" lineHeight="20px" mt="5px" mb="5px">{el.desc}</Text>
                                        <Flex gap="5px" mt="5px">
                                            {[...Array(5)].map((item, index) => {
                                                const givenRating = index + 1;
                                                return (
                                                    <Box>
                                                        <FaStar

                                                            size={14}
                                                            value={givenRating}
                                                            color={
                                                                givenRating <= el.rating
                                                                    ? "orange"
                                                                    : "rgb(192,192,192)"
                                                            }
                                                        />
                                                    </Box>

                                                );
                                            })}
                                        </Flex>


                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                   

                </Box>


            </Box>
        </div>
    )
}
