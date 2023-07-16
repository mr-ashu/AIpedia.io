import { Box, Button, Flex, Image, ListItem,  Text, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import style from "../../Style/Tool.module.css"
import { useSnapCarousel } from 'react-snap-carousel'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious  } from 'react-icons/gr'

export const Overview = ({ el, id }) => {
    const { scrollRef,   next, prev,  } = useSnapCarousel();
     const p=el.Cover_image


    let data=[p,p,p,p,p]
    


    return (
        <Box>

           <Flex alignItems="center" gap="5px" w="85%"  m="auto" mb="30px">
          
           <GrFormPrevious cursor={"pointer"} size={24} onClick={() => prev(1)}/> 
        
                <Flex   width="100%" pr="10%"    borderRadius="5px" ref={scrollRef} overflow="auto" className={style.imagescroll}   gap="15px"     
                >
                    
                    {
                        data?.map((e,i)=>(

                           
                                e.includes("mp4")?<video autoPlay  src={e}/>:<Image w="100%" src={e}/>
                           
                            
                        ))
                    }
                  
                </Flex>
              
         
            <MdNavigateNext cursor={"pointer"} size={24} onClick={() => next(1)} /> 
           </Flex>
           



            <Text fontSize="16px" lineHeight="24px" fontWeight="600" mt="20px">
                What is {el.Title} ?

            </Text>

            <Text fontSize="15px" textAlign="justify" fontWeight="400" lineHeight="24px" mt="5px">
                {el.Description}
            </Text>

            <Box mt="20px">
                <Text fontSize="16px" fontWeight="600" lineHeight="24px">
                    Features

                </Text>


                <UnorderedList mt="17px" className={style.list}   fontSize="15px" fontWeight="400" lineHeight="30px" >
                    {
                        el.key_features?.map((e) => (

                            <ListItem  >{e}</ListItem>

                        ))
                    }
                </UnorderedList>

            </Box>


        </Box>
    )
}
