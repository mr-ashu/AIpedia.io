import { Avatar, Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { ListModal } from '../Components/ListModal'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { LandingRight } from '../Components/LandingRight'
import notification from '../Components/Toast'
import ShareModel from '../Components/Share'


const getData = ({ id, token }) => {
    return axios.get(`${process.env.REACT_APP_API}/myspace/get/${id}`,
        {
            headers: { token },
        }
    )

};
export const MycollectionSingle = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    let [data, setdata] = useState([])
    const navigate = useNavigate()

    let n = data[0]?.spaceID?.space_name
    let d = data[0]?.spaceID?.description
    let s = data[0]?.spaceID.status
    let { id } = useParams()
    const [desc, setDesc] = useState(d)
    const [name, setName] = useState(n)
    const [status, setStatus] = useState(s)
    const tool = data[0]?.spaceID.tool

    const userData = useSelector((state) => state.userReducer.loginData);


    let token = userData.data
    const spacePayload = {
        space_name: name,
        status: status,
        tool: tool,


        description: desc,
    };

    console.log(spacePayload);

    const handleUpdate = async (lid) => {
        try {


            const url = `${process.env.REACT_APP_API}/space/update/${lid}`;
            const { data: spaceRes } = await axios.patch(url, spacePayload, {
                headers: { token },
            });


            onClose()

            notification("success", spaceRes.msg);
        } catch (err) {
            notification("error", err.response.data.errors);
        }
    };


    const handledelete = async (lid) => {
        try {


            const url = `${process.env.REACT_APP_API}/space/delete/${lid}`;
            const { data: spaceRes } = await axios.delete(url, {
                headers: { token },
            });
            onClose()
            navigate("/collection")
            notification("success", spaceRes.msg);
        } catch (err) {
            notification("error", err.response.data.errors);
        }


    };

    useEffect(() => {

        getData({ id, token })
            .then((res) => {
                setdata(res.data.data)

            })



    }, [id, token])


    console.log(data);

    let url = window.location.href + `tool/${id}`;


    return (
        <>

            <Box w="100%">
                <Flex justifyContent="space-between">

                    <Stack w="100%" justifyContent="center">
                        <Box width="90%" m="auto" mt="0px" >
                            <Text fontSize="12px" lineHeight="20px" mt="50px" fontWeight="400">Home <ArrowForwardIcon /> Curted collection <ArrowForwardIcon /> 10 developer to add your stack</Text>
                            <Flex mt="40px" justifyContent="space-between">
                                <Box>
                                    <Text fontSize="32px" fontWeight="600" lineHeight="24px">{data[0]?.spaceID.space_name}</Text>

                                    <Box mt="20px" borderBottom="1px solid #737373" py={1}>
                                        <Flex mt="10px" gap="5px" alignItems="center">
                                            <Avatar size="sm" src={data[0]?.userID.image} />
                                            <Text>{data[0]?.userID.name}</Text>
                                        </Flex>

                                        <Text mt="30px" fontSize="15px" lineHeight="24px" fontWeight="400" textAlign="justify">
                                            {data[0]?.spaceID.description}
                                        </Text>



                                    </Box>
                                </Box>


                                <Flex flexDirection="column" textAlign="right" justifyContent="right" gap="20px">
                                    <Button onClick={onOpen} alignItems="center" gap="4px" color="white" bg="#3B89B6" fontWeight="600" fontSize="14px" lineHeight="24px"> Edit</Button>

                                    <Box>
                                        {
                                            data[0]?.spaceID.status ? "Public" : "privete"
                                        }
                                    </Box>

                                    <Box w="fit-content" m="auto">
                                        <ShareModel url={url} />
                                    </Box>

                                </Flex>

                            </Flex>

                            <Stack>

                                <Box mt="25px">
                                    {
                                        data?.map((el, i) => (
                                            <Box key={i}>
                                                <ListModal el={el.videoID} />
                                            </Box>
                                        ))
                                    }
                                </Box>

                                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent color="#444" bg="#D9D9D9" borderRadius="0px">
                                        <ModalHeader fontSize="15px" lineHeight="24px" fontWeight="600">Edit collection</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Flex flexDirection="column" gap="10px">
                                                <Text mt="5px" fontSize="16px" lineHeight="24px" fontWeight="700">Name</Text>

                                                <Input value={name} onChange={(e) => setName(e.target.value)} _placeholder={{ fontSize: "normal", lineHeigh: "22px" }} placeholder="10 developer tools to add to your stack" />


                                                <Text>Description</Text>
                                                <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} row={5} borderRadius="3px" bg="#F8F8F8" />


                                            </Flex>

                                            <Flex alignItems="center" mt="50px" mb="30px" textAlign="end" justifyContent="space-between">
                                                <Flex gap="9px" alignItems="center">
                                                    <input onChange={(e) => {
                                                        console.log(status)
                                                        
                                                        setStatus(!(e.target.checked))
                                                    }





                                                    }

                                                        type="checkbox" />
                                                    <Text>
                                                        {
                                                            s ? "Private" : "Public"
                                                        }

                                                    </Text>
                                                </Flex>

                                                <Flex gap="15px">
                                                    <Button onClick={() => handledelete(id)} fontSize="15px" lineHeight="24px" fontWeight="600" border="1px solid black" bg="#F8F8F8" padding="3px 10px" borderRadius="3px" >
                                                        Delete
                                                    </Button>

                                                    <Button onClick={() => handleUpdate(id)} fontSize="15px" lineHeight="24px" fontWeight="600" border="1px solid black" bg="#F8F8F8" padding="3px 10px" borderRadius="3px" >
                                                        Submit
                                                    </Button>
                                                </Flex>

                                            </Flex>

                                        </ModalBody>

                                    </ModalContent>
                                </Modal>

                            </Stack>
                        </Box>
                    </Stack>


                    <LandingRight />

                </Flex>
            </Box>



        </>
    )
}
