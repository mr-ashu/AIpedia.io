import * as React from 'react';


import style from "../../Style/Footer.module.css"
import { Box, Divider, Flex, useColorModeValue  } from '@chakra-ui/react';
import { BCategory } from './Bcategory';
import { BFilter } from './Bfilter';

export const Footer = ({   setCount, setUserInfo, setPageName, setFilterLoader }) => {
 

  return (
    <>




      <Box borderTop="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} className={style.footer} bg={useColorModeValue("#F8F8F8", "#2C2C2C")}  >

        <Flex fontWeight="600" justifyContent="space-evenly" h="45px" alignItems="center" textTransform="uppercase" fontSize="18px" letterSpacing="1px">


          <BFilter   setCount={setCount}  setUserInfo={setUserInfo} setPageName={setPageName} setFilterLoader={setFilterLoader}  />

          <Divider orientation="vertical" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} h="100%" />
          <BCategory />
        </Flex>





      </Box>
    </>
  )
}
