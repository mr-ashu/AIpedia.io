import React from 'react'

import { Flex, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import style from "../Style/Landing.module.css"
import { Leftbar } from '../Components/Home/LeftBar'

import { LIstView } from '../Components/Home/LIstPage'
import { GridPage } from '../Components/Home/GridPage'
import { Box } from '@mui/material'
import Slideshow from '../Components/Home/Crousel'

import { LandingRight } from '../Components/LandingRight'


export const LandingPage = ({ setCount, list, open, setUserInfo, setPageName, setFilterLoader, data, showLoader, setDeleteLoading, userinfo }) => {


  return (
    <Stack  w="100%">

      <Flex color={useColorModeValue("#444444", "#CCCCCC")} justifyContent="space-between">
        <Stack w="fit-content"  >
          <Leftbar open={open}
            setUserInfo={setUserInfo}
            setPageName={setPageName}
            setFilterLoader={setFilterLoader}
            setCount={setCount}
          />
        </Stack>



        <Stack className={open ? style.openslide : style.closeslide} w="100%"   >
           <Stack w="92%" m="auto" mt="50px">
            <Box className={style.slide}>
              <Slideshow />
            </Box>


            {
              list ? <LIstView data={data} showLoader={showLoader} setDeleteLoading={setDeleteLoading} open={open} /> : <GridPage open={open} data={data} showLoader={showLoader} setDeleteLoading={setDeleteLoading} />
            }

          </Stack>
         </Stack>

        <Box mt="50px">
          <LandingRight />
        </Box>

       </Flex>
    </Stack>
  )
}
