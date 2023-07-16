import { Avatar, Box, Button, Divider, Flex, FormLabel, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Radio, Select, Text, Textarea, css, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillLike } from "react-icons/ai"
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import notification from '../Toast';
import moment from 'moment/moment';
import style from "../../Style/Tool.module.css"




export const Comment = ({ el, id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rate, setRate] = useState(0);
    const [inputvalue, setinput] = useState("")
    let [reviewData, setReviewData] = useState([]);
    const userData = useSelector((state) => state.userReducer.loginData);
    const [loader, setLoader] = useState(true);
    let [flag, setFlag] = useState(true);


    const getReview = async () => {
        try {
            let res = await axios.get(
                `${process.env.REACT_APP_API}/data/get/comment/${el._id}`
            );
            setReviewData(res.data.comment);
        } catch (error) {
            console.log(error);
        }
    };
    const handleEnter = async (e) => {

        let payload = {
            message: inputvalue,
            rating: rate

        };
        try {
            let token = userData.data;
            if (token) {
                axios.post(
                    `${process.env.REACT_APP_API}/data/update/${el._id}/add-comment`,
                    payload,
                    { headers: { token } }
                ).then((res) => {
                    setLoader(!loader);
                    getReview()
                    onClose();
                })
            }
            else {
                notification("error", "Login first!");
            }

        } catch (err) {
            notification("error", "Something went wrong");
        }



    };

    console.log(reviewData);

    const handleLike = async (id) => {
        let token = userData.data;


        try {
            await axios.patch(
                `${process.env.REACT_APP_API}/data/update/${id}/add-like/comment`,
                null,
                { headers: { token } }
            );
            setFlag((prev) => !prev);

        } catch (error) {
            notification("error", "You have to login first");
        }
    };


    useEffect(() => {
        getReview();
    }, []);



    const handlestar = async (gr) => {

        setRate(gr);

        let payload = { rating: Number(rate) };
        try {
            let token = userData.data;
            await axios.post(
                `${process.env.REACT_APP_API}/data/rating`,
                payload,
                { headers: { token } }
            );
            setLoader(!loader);
        } catch (err) {
            notification("error", "Something went wrong");
        }

    };


    return (
        <Box mt="40px">


            <Box border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} mt="20px" px={"20px"} py={"14px"} borderRadius="10px">
                <Box className={style.rating} alignItems="center">
                    <Box>
                        <Text fontSize="16px" fontWeight="600" >What do you think about The Collect Button?</Text>
                        <Text fontSize="13px" lineHeight="24px">Leave a rating or review </Text>
                    </Box>
                    <Flex gap="7px">
                        {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;
                            return (
                                <Box>
                                    <FaStar
                                        onClick={() => {
                                            handlestar(givenRating)
                                            onOpen()
                                        }



                                        }

                                        value={givenRating}
                                        color={
                                            givenRating < rate || givenRating === rate
                                                ? "#ECBA67"
                                                : "#E6E6E6"
                                        }
                                    />
                                </Box>

                            );
                        })}
                    </Flex>



                </Box>
            </Box>

            <Box>
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="baseline">
                        <Text fontSize="110px" fontWeight="600" color="#3B89B6">
                            {el.rating}/5
                        </Text>

                        <Text fontSize="14px" fontWeight="400" lineHeight="24px">
                            {reviewData.length} reviews
                        </Text>
                    </Flex>

                    <Box>
                        <Flex gap="7px" mt="5px">
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar
                                            size={12}
                                            value={givenRating}
                                            color={
                                                givenRating <= 5
                                                    ? "#ECBA67"
                                                    : "#E6E6E6"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>
                        <Flex gap="7px" mt="5px">
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar
                                            size={12}
                                            value={givenRating}
                                            color={
                                                givenRating <= 4
                                                    ? "#ECBA67"
                                                    : "#E6E6E6"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>
                        <Flex gap="7px" mt="5px">
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar
                                            size={12}
                                            value={givenRating}
                                            color={
                                                givenRating <= 3
                                                    ? "#ECBA67"
                                                    : "#E6E6E6"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>
                        <Flex gap="7px" mt="5px">
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar
                                            size={12}
                                            value={givenRating}
                                            color={
                                                givenRating <= 2
                                                    ? "#ECBA67"
                                                    : "#E6E6E6"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>
                        <Flex gap="7px" mt="5px">
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar
                                            size={12}
                                            value={givenRating}
                                            color={
                                                givenRating === 1
                                                    ? "#ECBA67"
                                                    : "#E6E6E6"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>
                    </Box>

                </Flex>
            </Box>


            <Modal isCentered blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p="20px">
                    <ModalHeader>Your review!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >

                        <Flex gap="7px" >
                            {[...Array(5)].map((item, index) => {
                                const givenRating = index + 1;
                                return (
                                    <Box>
                                        <FaStar
                                            cursor="pointer"
                                            size={25}
                                            onClick={() => {
                                                handlestar(givenRating)
                                                onOpen()
                                            }



                                            }

                                            value={givenRating}
                                            color={
                                                givenRating < rate || givenRating === rate
                                                    ? "orange"
                                                    : "rgb(192,192,192)"
                                            }
                                        />
                                    </Box>

                                );
                            })}
                        </Flex>

                        <Textarea
                            rows={5}
                            m="auto"
                            mt="35px"
                            type="text"
                            placeholder="Write a review"
                            onChange={(e) => setinput(e.target.value)}
                        />
                        <Flex justifyContent="end">
                            <Button onClick={handleEnter} w="140px" h="45px" color="white" bg="#3B89B6" borderRadius="4px" _hover={{ bg: "" }} mt="20px">Leave a review</Button>

                        </Flex>



                    </ModalBody>

                </ModalContent>
            </Modal>



            <Box 
                m="auto"
                border="1px"
                borderColor={useColorModeValue("#E6E6E6", "#444")}
                bg={useColorModeValue("rgba(248, 248, 248, 0.97)", "transparent")}
                px="33px"
                py="20px"
                paddingBottom="50px"
                borderRadius="10px"
                mt="50px"  
                >
                <Flex className={style.riviewfilter} mt="20px" mb="20px" alignItems="center" justifyContent="space-between">

                    <Text fontSize="23px" lineHeight="32px" fontWeight="700">{reviewData.length} Reviews</Text>





                    <Flex gap="13px">
                        <Select border="1px solid #B8B7B7" color="#B8B7B7" w="111px" h="29px" placeholder="Most recent "> </Select>
                        <Select border="1px solid #B8B7B7" color="#B8B7B7" w="111px" h="29px" placeholder="Any rating "> </Select>
                    </Flex>
                </Flex>




                {/* maping----------------------------- */}
                <Box mt="25px">

                    {
                        reviewData?.map((ele) => (
                            <Box mt="30px">
                                <Flex justifyContent="space-between" alignItems="center">
                                    <Flex alignItems="center" gap="10px">
                                        <Avatar src={ele.userID?.image} />

                                        <Box>
                                            <Text fontSize="15px" fontWeight="600" lineHeight="24px">{ele.userID?.name}</Text>
                                            <Text fontSize="15px" fontWeight="400" lineHeight="24px">@aleksandra14</Text>
                                        </Box>
                                    </Flex>

                                    <AiFillLike size={23} onClick={() => handleLike(ele._id)} />

                                </Flex>

                                <Flex mt="15px" mb="10px" gap="7px">
                                    {[...Array(5)].map((item, index) => {
                                        const givenRating = index + 1;
                                        return (
                                            <Box>
                                                <FaStar



                                                    color={
                                                        givenRating <= ele.rating
                                                            ? "#ECBA67"
                                                            : "#E6E6E6"
                                                    }
                                                />
                                            </Box>

                                        );
                                    })}
                                </Flex>

                                <Text fontSize="15px" fontWeight="400" lineHeight="28px" mt="15px" >{ele.message} </Text>
                                <Flex alignItems="center" gap="153px" fontSize="12px" lineHeight="20px" fontWeight="400">
                                    <Text>{moment(el.createdAt).format("MMM Do")}</Text>
                                    <Text fontSize="15px" letterSpacing="2px" fontWeight="bold">...</Text>
                                </Flex>
                            </Box>
                        ))
                    }



                </Box>

            </Box>


        </Box>
    )
}
