import {  Box, Divider, Flex, Image, Text, useColorModeValue, } from '@chakra-ui/react'

import React from 'react'
import style from "../Style/Featured.module.css";
import coll2 from "../Utils/cicon1.svg";
import collect from '../Utils/collec.svg';
import { HiOutlineBookmark } from "react-icons/hi";

let coll = [
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },


]
export const CurtedCollection = () => {
    return (
        <div>
            <Box className={style.featured}>
             

                <Box>
                    <Flex textTransform="uppercase"  alignItems="center" mb="20px" gap="5px" mt="20px" fontWeight="600" fontSize="16px"  >  <Text>Curated collections</Text><HiOutlineBookmark size={20}/> </Flex>
                    {
                        coll?.map((el, i) => (
                            <Box key={i}>

                                <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                    <Box className={style.grid_icon}>
                                        <Image   src={el.icon2} />
                                        <Image   src={el.icon} />
                                        <Image  src={el.icon2} />
                                        <Image   src={el.icon} />
                                    </Box>


                                    <Box>

                                        <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>
                                        <Flex alignItems="center" gap="3px" fontSize="10px" fontWeight="400" mt="5px" mb="5px">
                                            <Text >{el.created} </Text>
                                            | <Text color="#3B89B6">{el.tool} tools</Text>
                                        </Flex>
                                        <Text w="90%" fontSize="12px" lineHeight="20px" className={style.desc}>{el.desc} </Text>



                                    </Box>


                                </Flex>

                            </Box>
                        ))
                    }

                    <Divider  border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} />

                </Box>

            </Box>
        </div>
    )
}
