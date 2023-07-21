import React from 'react'
import { Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import style from "../Style/Landing.module.css"
import { Leftbar } from '../Components/Home/LeftBar'
import { LIstView } from '../Components/Home/LIstPage'
import { GridPage } from '../Components/Home/GridPage'
import { Box } from '@mui/material'
import Slideshow from '../Components/Home/Crousel'
import { LandingRight } from '../Components/LandingRight'
import { Footer } from '../Components/Home/Footer'


export const LandingPage = ({ setCount, list, open, setUserInfo, setPageName, setFilterLoader, data, showLoader, setDeleteLoading, userinfo }) => {


  return (
    <Stack w="100%">

      <Flex color={useColorModeValue("#444444", "#CCCCCC")} justifyContent="space-between">
        <Stack w="fit-content"  >
          <Leftbar
            open={open}
            setUserInfo={setUserInfo}
            setPageName={setPageName}
            setFilterLoader={setFilterLoader}
            setCount={setCount}
          />
        </Stack>



        <Stack className={open ? style.openslide : style.closeslide} w="100%"   >
          <Stack w="92%" className={style.landingbox} >
            <Box className={style.slide} w="100%">
              <Slideshow />
            </Box>

            <Box w="100%">
              {
                list ? <LIstView data={data} showLoader={showLoader} setDeleteLoading={setDeleteLoading} open={open} /> : <GridPage open={open} data={data} showLoader={showLoader} setDeleteLoading={setDeleteLoading} />
              }
              <Footer  
                setUserInfo={setUserInfo}
                setPageName={setPageName}
                setFilterLoader={setFilterLoader}
                setCount={setCount}

                />
            </Box>

          </Stack>
        </Stack>

        <Box mt="50px">
          <LandingRight />
        </Box>

      </Flex>
    </Stack>
  )
}
