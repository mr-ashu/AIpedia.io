import { Avatar, Box, Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { Rightbar } from '../Components/Top10/Rghtbar'
import { LIstcomp } from '../Components/Collection/Listcomp'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { AiOutlineHeart } from 'react-icons/ai'
import { ListModal } from '../Components/ListModal'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'


const getData = ({id,token}) => {
    return axios.get(`${process.env.REACT_APP_API}/myspace/get/${id}`,
    {
        headers: { token },
    }
    )

};
export const MycollectionSingle = () => {

    let { id } = useParams()

    const userData = useSelector((state) => state.userReducer.loginData);
    const [loading, setloading] = useState(true)
    let [data, setdata] = useState([])
    let token =userData.data


    useEffect(() => {

        getData({ id,token })
            .then((res) => {
               setdata(res.data.data)
            
                setloading(false)
            })

   

    }, [id,token])


 
  
 

    return (
        <>
            <Stack >
                <Flex>

                    <Stack justifyContent="center">
                        <Box width="90%" m="auto" mt="0px" >
                            <Text fontSize="12px" lineHeight="20px" mt="50px" fontWeight="400">Home <ArrowForwardIcon /> Curted collection <ArrowForwardIcon /> 10 developer to add your stack</Text>
                            <Flex mt="40px" justifyContent="space-between">
                                <Text fontSize="32px" fontWeight="600" lineHeight="24px">{data[0]?.spaceID.space_name }</Text>

                                <Button alignItems="center" gap="4px" color="white" bg="#3B89B6" fontWeight="600" fontSize="14px" lineHeight="24px"><AiOutlineHeart /> Like</Button>
                            </Flex>

                            <Box borderBottom="1px solid #737373" py={1}>
                                <Flex mt="10px" gap="5px" alignItems="center">
                                    <Avatar size="sm"  src={data[0]?.userID.image}/>
                                    <Text>{data[0]?.userID.name}</Text>
                                </Flex>

                                <Text mt="30px" fontSize="15px" lineHeight="24px" fontWeight="400" textAlign="justify">
                                    Looking to give your terminal a much needed upgrade or simply want a faster way to make beautiful
                                    documentation? Here are 10 developer tools as voted by you in the Golden Kitties bound to make your code
                                    senses tingle
                                </Text>
                            </Box>

                            <Stack>

                            <Box mt="25px">
                        {
                            data?.map((el,i)=>(
                                <Box key={i}>
                                    <ListModal el={el.videoID}/>
                                </Box>
                            ))
                        }
                       </Box>

               

                            </Stack>
                        </Box>
                    </Stack>


                    <Stack>
                        <Rightbar />
                    </Stack>

                </Flex>

            </Stack>
        </>
    )
}
