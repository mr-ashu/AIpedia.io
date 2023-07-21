import {  Box, Button, Divider, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import style from "../Style/Featured.module.css";
import { RiShareBoxFill } from 'react-icons/ri';
import axios from 'axios';
import { Link } from 'react-router-dom';
 





export const Featured = () => {
    
    
    let [data, setData] = useState([]);
   
   
    const getData = async (page) => {
       


        try {
            let res = await axios.post(
                `${process.env.REACT_APP_API}/data/get`,

            );

            setData(res.data.data);
       
        } catch (err) {
         
            console.log(err);
        }
    };

 

    useEffect(() => {
           getData();
      

    }, []);

 
    

  
    return (
    
             <Box className={style.featured} mt="30px">
            <Box>
                    <Text textTransform="uppercase"     fontWeight="600" lineHeight="20px" fontSize="12px">Highlighted tools</Text>
                    {
                        data?.filter((e)=>e.highlighted).map((el, i) => (
                            <Box key={i} mt="30px" >

                                <Flex alignItems="center" gap="10px"  >
                                    <Image borderRadius="5px" boxSize="40px"   src={el.Logo} />

                                    <Box>

                                        <Flex w="100%" alignItems="center" gap={"20px"} justifyContent="space-between">
                                       <Link to={`/tool/${el._id}`}> <Text fontSize="13px" fontWeight="600" color="#22222" lineHeight="24px">{el.Title}</Text> </Link>
                                        <Link to={el.URL}><RiShareBoxFill size={14}/></Link>
                                         </Flex>
                                        <Text mt="5px" w="90%" fontSize="12px" lineHeight="20px" className={style.desc1} >{el.Tagline}</Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} mt="30px" />

                </Box>

                <Text w="95%" fontSize="13px" lineHeight="24px" fontWeight="600" mt="30">Stay up-to-date with latest and greatest AI tools with our exclusive newsletter</Text>

                <Box mr="40px">
                   
                    <Input mt="15px" fontSize="13px" placeholder='Your email' border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} />
                    <Button mt="15px" w="100%" bg="#3B89B6" color="#F8F8F8" fontSize="14px" fontWeight="600"  >Subscribe to the newsletter</Button>
 

                </Box>
                <Divider border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} mt="30px" />
            </Box>
    
    )
}
