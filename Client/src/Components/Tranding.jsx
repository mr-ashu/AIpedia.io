import { Avatar, Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import style from "../Style/Featured.module.css";
import fimg from "../Utils/micon.svg";
 
import { RiShareBoxFill } from 'react-icons/ri';
import axios from 'axios';

 
let tranding = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
]
 


export const Tranding = () => {
  
    const [deleteLoading, setDeleteLoading] = useState(false);
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);
   
    const [pageName, setPageName] = useState("");
    const [FilterLoader, setFilterLoader] = useState(false);
    const [sort, setSort] = useState("mostlike");
    const [sortLoader, setSortLoader] = useState();
   
    const [showLoader, setShowLoader] = useState(false);
  
 
  
   
  
    const getData = async (page) => {
      setShowLoader(true);
    
  
      try {
        let res = await axios.post(
          `${process.env.REACT_APP_API}/data/get?limit=3`
          
        );
   
        setData(res.data.data);
        setShowLoader(false);
      } catch (err) {
        setShowLoader(false);
        console.log(err);
      }
    };
  
 
 
  useEffect(()=>{
  


    getData()


      console.log(data);
  },[])
 
   
  
 
 
  
   
    // const mostLikeHandler = () => {
    //     setSort("mostlike");
    //     setPageName("sort")
    //     setSortLoader((prev) => !prev)
    //   }
    //   const aTozhandler = () => {
    //     setSort("a-z");
    //     setPageName("sort")
    //     setSortLoader((prev) => !prev)
    //   }
    //   const newDatahandler = () => {
    //     setSort("newdataadd");
    //     setPageName("sort")
    //     setSortLoader((prev) => !prev)
    //   }
  
  
    return (
        <div>
            <Box className={style.featured}>
                <Box>
                    <Text textTransform="uppercase" mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Tranding</Text>
                    {
                        tranding.map((el, i) => (
                            <Box  >

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Image boxSize="50px" height="40px" src={el.icon} />

                                    <Box>

                                        <Flex w="90%" alignItems="center"  justifyContent="space-between">
                                        <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text> 
                                        <RiShareBoxFill size={14}/>
                                         </Flex>
                                        <Text mt="5px" w="80%" fontSize="12px" lineHeight="20px" className={style.desc}>{el.desc}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} />

                </Box>
 

            </Box>
        </div>
    )
}
