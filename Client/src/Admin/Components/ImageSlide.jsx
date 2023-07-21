import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  AiOutlineDelete } from 'react-icons/ai';
import style from "../../Style/Tool.module.css"


export const ImageSlideBox = () => {
 
    let [data, setData] = useState([])
    let [img, setimage] = useState("")
    let [url, setUrl] = useState("")
    
    

    const addData = async () => {

        const payload = {
            img: img,
            url: url
        }
 
        try {
            await axios.post(
                `${process.env.REACT_APP_API}/carousel/add`, payload

            ).then((res) => {
                getData()
                alert(res);
            })

        } catch (err) {

            console.log(err);

        }

    }



    const getData = async () => {

        try {
            await axios.get(
                `${process.env.REACT_APP_API}/carousel/get`,

            ).then((res) => {
                console.log(res);
                setData(res.data.data);
            })

        } catch (err) {

            console.log(err);
        }
    };

  

    const deleteData = async (id) => {


        try {
            await axios.delete(
                `${process.env.REACT_APP_API}/carousel/delete/${id}`

            ).then((res) => {
                getData()
                alert(res);
            })

        } catch (err) {

            console.log(err);

        }

    }
    useEffect(() => {

        getData()


    }, [])


    return (
        <Box py="40px" w="80%" m="auto" justifyContent="center">

            <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px">
                <FormControl>
                    <FormLabel mt="10px">Image</FormLabel>
                    <Input onChange={(e) => setimage(e.target.value)} value={img} placeholder='Image url' />

                    <FormLabel mt="10px">URL</FormLabel>
                    <Input onChange={(e) => setUrl(e.target.value)} value={url} placeholder='Link' />

                    <Button onClick={addData} borderRadius="4px" mt="10px">Add</Button>
                </FormControl>
            </Box>

            <Flex flexDirection="column" gap="25px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" mt="20px">

                {
                    data?.map((el, i) => (
                        <Box position="relative" w="100%">

                            <Image h="206px" w="100%" src={el.img} />


                            <Box position="absolute" top="10px" left="10px" bg="white" px="5px" borderRadius="5px">{i + 1}.</Box>

                            <Flex position="absolute" alignItems="baseline" bottom="10px" w="100%" justifyContent="space-between" px="10px">
                                <Flex  maxWidth="50%" px="5px" overflow="auto" whiteSpace="nowrap" bg="white" borderRadius="2px" className={style.imagescroll}  >

                                    <Text color="tomato"> URL: </Text>

                                    <Text ml="10px">{el.url}</Text>

                                </Flex>



                            
                                     
                                    <Button p="0" onClick={() => deleteData(el._id)}><AiOutlineDelete /></Button>
                          

                            </Flex>
                        </Box>

                    ))
                }


            </Flex>

 
    

        </Box>
    )
}
