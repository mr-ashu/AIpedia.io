import { Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, Tabs, Text, useDisclosure, } from '@chakra-ui/react'
import React from 'react'
import { Overview } from './Overview'
import ShareModel from '../Share'
import style from "../../Style/Tool.module.css"
import { Link } from "react-scroll"
import { Alternative } from './Alternative'
import { Comment } from './Comment'
import { Embed } from './Embed'

export const Tabcomp = ({setreview, el, id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (


        <Box>

            <Tabs  >
                <TabList>
                    <Flex justifyContent="space-between" w="100%" alignItems="center">
                        <Box overflow="auto" whiteSpace="nowrap" className={style.tscroll}>
                            <Flex className={style.tnav} gap="10px">
                                <Link

                                    activeClass="active"
                                    to="Overview"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Overview</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Alternative"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Alternative tools</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Embed"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Embed</Tab>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="Reviews"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                >
                                    <Tab fontSize="14px" fontWeight="600" lineHeight="24px">Reviews</Tab>
                                </Link>

                                <Tab onClick={onOpen} fontSize="14px" fontWeight="600" lineHeight="24px">Request access</Tab>





                            </Flex>
                        </Box>

                        <ShareModel />

                    </Flex>


                </TabList>
            </Tabs>





            <Box mt="50px"   >

                <section id="Overview">

                    <Overview el={el} id={id} />

                </section>


                <section id="Alternative">

                    <Alternative id={id} el={el} />
                </section>


                <section id="Embed">
                    <Embed />
                </section>


                <section id="Reviews">
                    <Comment setreview={setreview} el={el} id={id} />
                </section>

            </Box>






            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent color="#444" bg="#D9D9D9" borderRadius="0px">
                    <ModalHeader fontSize="15px" lineHeight="24px" fontWeight="600">Request Access</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection="column" gap="10px">
                            <Text mt="5px" fontSize="15px" lineHeight="24px" fontWeight="400">Are you an official member of this tool?</Text>
                            <Flex gap="10px" alignItems="center">
                                <input type="radio" />
                                <Text>Yes</Text>
                            </Flex>
                            <Text fontSize="13px" lineHeight="24px" fontWeight="400">Kindly provide us with your official domain registered email ID for verification purposes. Our dedicated team will carefully review your request and grant you access to the Creators Portal, where you can efficiently manage your tool. Please note that the verification process may take a few days as we ensure the utmost security and authenticity of each request. We appreciate your patience and look forward to assisting you in optimizing your tool management experience. Thank you for choosing our platform.</Text>
                            <Input borderRadius="3px" bg="#F8F8F8" _placeholder={{ fontSize: "13px", fontWeight: "400", color: "#929292" }} placeholder="Official domain registered Email ID" />


                            <Flex mt="20px" gap="10px" alignItems="center">
                                <input type="radio" />
                                <Text>No</Text>
                            </Flex>
                            <Text fontSize="13px" lineHeight="24px" fontWeight="400">
                                Attention: This message is intended for official members of our tool only. If you are not an authorized member, kindly refrain from proceeding further. For any inquiries or requests, please reach out to our support team. Thank you for your understanding.

                            </Text>
                        </Flex>

                        <Flex mt="50px" mb="30px" textAlign="end" justifyContent="right">
                            <Button fontSize="15px" lineHeight="24px" fontWeight="600" border="1px solid black" bg="#F8F8F8" padding="3px 10px" borderRadius="3px" >
                               Submit
                            </Button>
                        </Flex>

                    </ModalBody>

                </ModalContent>
            </Modal>



        </Box>
    )
}
