import { Box, Flex, Image, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import style from "../Style/Featured.module.css";

import { FaStar } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';



export const TopReview = () => {
 
    let [data, setData] = useState([]);

    let [page, setPage] = useState(1);
 
    const getData = async (page) => {
    


        try {
            let res = await axios.post(
                `${process.env.REACT_APP_API}/data/get?sort=mostlike&page=${page}`,

            );

            setData((prev) => [...prev, ...res.data.data]);
         
        } catch (err) {
          
            console.log(err);
        }
    };








    useEffect(() => {
       getData(page);
  
    }, [page]);

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
        <div>
            <Box className={style.featured}>


                <Box>
                    <Text textTransform="uppercase" mt="30px" fontWeight="600" fontSize="12px" lineHeight="20px">Top Reviewed</Text>
                    {
                        data?.slice(12, 15).map((el, i) => (
                            <Box key={i} mt="30px">

                                <Flex gap="10px"    >
                                    <Image borderRadius="4px" boxSize="40px" src={el.Logo} />

                                    <Box>

                                        <Flex alignItems="center" w="100%" justifyContent="space-between" mt="0px">
                                            <Link to={`/tool/${el._id}`}><Text fontSize="13px" fontWeight="600" color="#22222" lineHeight="24px" >{el.Title}</Text> </Link>

                                            <Link to={el.URL}> <RiShareBoxFill size={14} /></Link>
                                        </Flex>
                                        <Text className={style.desc} w="90%" fontSize="12px" lineHeight="20px" mb="5px">{el.Tagline}</Text>
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
