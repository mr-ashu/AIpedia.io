import React, { useEffect, useState } from 'react'
import { SubNavbar } from '../Components/Home/SubNavbar'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import style from "../Style/Landing.module.css"
import { Leftbar } from '../Components/Home/LeftBar'
import { Featured } from '../Components/Home/Featured'
import { LIstView, ListView } from '../Components/Home/LIstPage'
import { GridPage } from '../Components/Home/GridPage'
import { Box } from '@mui/material'
import Slideshow from '../Components/Home/Crousel'
import { useSelector } from 'react-redux'
import axios from 'axios'


export const LandingPage = ({ list, open,setUserInfo,setPageName,setFilterLoader,data,showLoader,setDeleteLoading }) => {

 
  return (
    <Stack className={style.landingpage} w="99%" m="auto">

      <Flex color={useColorModeValue("#444444", "#CCCCCC")} justifyContent="space-between">
        <Stack w="fit-content"  >
          <Leftbar open={open}
            setUserInfo={setUserInfo}
            setPageName={setPageName}
            setFilterLoader={setFilterLoader} />
        </Stack>



        <Stack    className={open ? style.openslide : style.closeslide} w="100%"   >




          <Stack   w="92%" m="auto" mt="50px">
           <Box  className={style.slide}>
               <Slideshow />
           </Box>


            {
              list ? <LIstView data={data} showLoader={showLoader} setDeleteLoading={setDeleteLoading} open={open} /> : <GridPage open={open} data={data} showLoader={showLoader} setDeleteLoading={setDeleteLoading} />
            }

          </Stack>





        </Stack>

        <Stack>
          <Box mt="50px">
            <Featured />
          </Box>
        </Stack>






      </Flex>
    </Stack>
  )
}
