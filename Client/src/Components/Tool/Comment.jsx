import { StarIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Divider, Flex, Radio, Select, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillLike } from "react-icons/ai"
import dateFormat from 'dateformat'
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import notification from '../Toast';
import moment from 'moment/moment';
import style from "../../Style/Tool.module.css"

let star = [

]



export const Comment = ({ el, id }) => {
    const [rate, setRate] = useState(0);
   const [inputname,setinput]=useState(false)
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
        if (e.keyCode === 13) {
            let payload = { message: e.target.value };
            try {
                let token = userData.data;
                let res = await axios.post(
                    `${process.env.REACT_APP_API}/data/update/${el._id}/add-comment`,
                    payload,
                    { headers: { token } }
                );
                setinput(false)
                setLoader(!loader);
            } catch (err) {
                notification("error", "Something went wrong");
            }
        }
    };


    const handleLike = async (id) => {
        let token = userData.data;

        try {
            let res = await axios.patch(
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
    }, [loader, flag]);



    const handlestar = async (gr) => {

        setRate(gr);

        let payload = { rating: Number(rate) };
        try {
            let token = userData.data;
            let res = await axios.post(
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

            <Box className={style.rating}    w="90%" alignItems="center" m="auto">
                <Flex alignItems="center" gap="70px">
                    <Text>Logo</Text>
                    <Text fontSize="16px" lineHeight={"22px"}>
                        Copy embed code
                    </Text>
                </Flex>

                <Button borderRadius="7px" color="white" padding="14px, 17px, 14px, 17px" bg="#3B89B6" _hover={{ bg: "none" }}>Advertise this tool</Button>

            </Box>


            <Divider mt="40px" border="1px solid #CCCCCC" />
            <Box border="1px solid #CCCCCC" mt="20px" px={8} py={2} borderRadius="5px">
                <Box className={style.rating}   alignItems="center">
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
                                        onClick={() => handlestar(givenRating)}

                                        value={givenRating}
                                        color={
                                            givenRating < rate || givenRating === rate
                                                ? "#3B89B6"
                                                : "rgb(192,192,192)"
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
                            594 reviews
                        </Text>
                    </Flex>

                        <Box>
                            <Flex gap="7px" mt="5px">
                                {[...Array(5)].map((item, index) => {
                                    const givenRating = index +1;
                                    return (
                                        <Box>
                                            <FaStar
                                                size={12}
                                                value={givenRating}
                                                color={
                                                    givenRating <= 5  
                                                        ? "#3B89B6"
                                                        : "rgb(192,192,192)"
                                                }
                                            />
                                        </Box>

                                    );
                                })}
                            </Flex>
                            <Flex gap="7px" mt="5px">
                                {[...Array(5)].map((item, index) => {
                                    const givenRating = index +1;
                                    return (
                                        <Box>
                                            <FaStar
                                            size={12}
                                                value={givenRating}
                                                color={
                                                    givenRating <= 4  
                                                        ? "#3B89B6"
                                                        : "rgb(192,192,192)"
                                                }
                                            />
                                        </Box>

                                    );
                                })}
                            </Flex>
                            <Flex gap="7px" mt="5px">
                                {[...Array(5)].map((item, index) => {
                                    const givenRating = index +1;
                                    return (
                                        <Box>
                                            <FaStar
                                            size={12}
                                                value={givenRating}
                                                color={
                                                    givenRating <= 3  
                                                        ? "#3B89B6"
                                                        : "rgb(192,192,192)"
                                                }
                                            />
                                        </Box>

                                    );
                                })}
                            </Flex>
                            <Flex gap="7px" mt="5px">
                                {[...Array(5)].map((item, index) => {
                                    const givenRating = index +1;
                                    return (
                                        <Box>
                                            <FaStar
                                            size={12}
                                                value={givenRating}
                                                color={
                                                     givenRating  <= 2
                                                        ? "#3B89B6"
                                                        : "rgb(192,192,192)"
                                                }
                                            />
                                        </Box>

                                    );
                                })}
                            </Flex>
                            <Flex gap="7px" mt="5px">
                                {[...Array(5)].map((item, index) => {
                                    const givenRating = index +1;
                                    return (
                                        <Box>
                                            <FaStar
                                            size={12}
                                                value={givenRating}
                                                color={
                                                      givenRating === 1
                                                        ? "#3B89B6"
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



            <Box bg="#F3F5FA" padding="25px" paddingBottom="50px" borderRadius="5px" color="black">
                <Flex alignItems="center" justifyContent="end">


                {/* {
                    !inputname?(<Button onClick={()=>setinput(true)} w="140px" h="45px" color="white" bg="#3B89B6" borderRadius="4px" _hover={{ bg: "" }}>Leave a review</Button>):( <Textarea
                    mr="30px"
                    type="text"
                    placeholder="Write a review"
                    onKeyDown={handleEnter}
                />)
                } */}
                    
            

               
                    <Flex gap="10px">
                        <Select border="1px solid #B8B7B7" color="#B8B7B7" w="111px" h="29px" placeholder="Most recent "> </Select>
                        <Select border="1px solid #B8B7B7" color="#B8B7B7" w="111px" h="29px" placeholder="Any rating "> </Select>
                    </Flex>
                </Flex>

                <Text mt="20px" mb="20px" fontSize="23px" lineHeight="32px" fontWeight="700">{reviewData.length} Reviews</Text>
              

                {/* maping----------------------------- */}
                <Box>

                    {
                        reviewData?.map((el) => (
                            <Box mt="30px">
                                <Flex justifyContent="space-between" alignItems="center">
                                    <Flex alignItems="center" gap="10px">
                                        <Avatar />

                                        <Box>
                                            <Text fontSize="16px" fontWeight="600" lineHeight="24px">Aleksandra</Text>
                                            <Text fontSize="14px" fontWeight="400" lineHeight="24px">@aleksandra14</Text>
                                        </Box>
                                    </Flex>
                                    <Flex alignItems="center" gap="10px">
                                        <Text fontSize="20px">{el.likes}</Text>
                                        <AiFillLike size={24} onClick={() => handleLike(el._id)} />
                                    </Flex>
                                </Flex>

                                <Flex mt="15px" mb="10px" gap="7px">
                                    {[...Array(5)].map((item, index) => {
                                        const givenRating = index + 1;
                                        return (
                                            <Box>
                                                <FaStar



                                                    color={
                                                        givenRating < 4 || givenRating === 4
                                                            ? "#3B89B6"
                                                            : "rgb(192,192,192)"
                                                    }
                                                />
                                            </Box>

                                        );
                                    })}
                                </Flex>

                                <Text fontSize="15px" fontWeight="400" lineHeight="28px" >{el.message} </Text>
                                <Flex alignItems="center" gap="60px" fontSize="12px" lineHeight="20px" fontWeight="400">
                                    <Text>{moment(el.createdAt).format("MMM Do")}</Text>
                                    <Text>...</Text>
                                </Flex>
                            </Box>
                        ))
                    }



                </Box>

            </Box>


        </Box>
    )
}
