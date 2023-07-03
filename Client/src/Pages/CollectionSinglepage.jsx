import React, { useEffect, useState } from 'react'
 
import { LIstcomp } from '../Components/Collection/Listcomp'
import { Box } from '@mui/material'
import { Avatar, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Rightbar } from '../Components/Top10/Rghtbar'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ListModal } from '../Components/ListModal'
import { ElderlySharp } from '@mui/icons-material'

const getData = ({id}) => {
    return axios.get(`${process.env.REACT_APP_API}/myspace/public/get/${id}`)

};
export const CollectionSinglepage = () => {
   
    let { id } = useParams()


    const [loading, setloading] = useState(true)
    let [data, setdata] = useState([])



    useEffect(() => {

        getData({ id })
            .then((res) => {
                setdata(res.data.data)
                setloading(false)
            })



    }, [id])
  
 console.log(data);
    return (
        <Stack w="99%"> 
        <Flex>

            <Stack justifyContent="center">
                <Box width="90%" m="auto" mt="0px" >
                    <Text fontSize="12px" lineHeight="20px" mt="50px" fontWeight="400">Home <ArrowForwardIcon/> Curted collection <ArrowForwardIcon/> 10 developer to add your stack</Text>
                    <Flex mt="40px" justifyContent="space-between">
                    <Text  fontSize="32px" fontWeight="600" lineHeight="24px">{data[0]?.spaceID.space_name}</Text>

                    <Button color="white" bg="#3B89B6" fontWeight="600" fontSize="14px" lineHeight="24px"><AiOutlineHeart/> Like</Button>
                    </Flex>

                    <Box borderBottom="1px solid #737373" py={1} paddingBottom="15px">
                        <Flex mt="10px" gap="5px" alignItems="center">
                            <Avatar size="" src={data[0]?.userID.image}/>
                            <Text>{data[0]?.userID.name}</Text>
                        </Flex>

                        <Text mt="30px" fontSize="15px" lineHeight="24px" fontWeight="400" textAlign="justify">
                            Looking to give your terminal a much needed upgrade or simply want a faster way to make beautiful
                            documentation? Here are 10 developer tools as voted by you in the Golden Kitties bound to make your code
                            senses tingle
                        </Text>
                    </Box>

                       <Box mt="25px">
                        {
                            data?.map((el,i)=>(
                                <Box key={i}>
                                    <ListModal el={el.videoID}/>
                                </Box>
                            ))
                        }
                       </Box>
                </Box>
            </Stack>


            <Stack>
                  <Rightbar/>
            </Stack>

        </Flex>

        </Stack>
    )
}
