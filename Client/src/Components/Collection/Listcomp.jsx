import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import chatgpt from "../../Utils/ChatGPT.svg";
import dummy from "../../Utils/dummy.jpeg";
import style from "../../Style/List.module.css";
import { BsArrowBarUp, BsBoxArrowUpRight, BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import visit from "../../Utils/Visit.svg"
import star from "../../Utils/Star.svg"
import collection from "../../Utils/Collection.svg"
import { Avatar, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Crousel } from '../Home/Crousel';
import { Featured } from '../Featured';
import { Link } from 'react-router-dom';
import { ListModal } from '../ListModal';
import { useSelector } from 'react-redux';
import axios from 'axios';
 
export const LIstcomp = () => {


 
    let [data, setData] = useState([]);
 
    const userData = useSelector((state) => state.userReducer.loginData);

  
    let token = userData.data;
 

    const getData = async () => {
      

        try {
        
         
            const res = await axios.get(
              `http://localhost:9000/data/get/userlikes/data`,
             
              { headers: { token } }
            );

            setData(res.data.data)

            console.log(res.data.data);

            
          
        } catch (err) {
           
          
        }
    };
    useEffect(() => {
        
            getData();
      
    }, []);

   

    return (

      



                    <Box  >
                       

                        {
                            data?.map((el,i) => (

                                <Box mt="30px" key={i}>
                                    <ListModal el={el.videoID}/>
                                </Box>

                            ))
                        }


                    </Box>

              

    )
}



