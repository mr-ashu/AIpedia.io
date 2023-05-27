import React, { useRef, useState } from 'react'
import { BsGrid } from 'react-icons/bs';
import { CgSortAz } from 'react-icons/cg'
import { ImList2 } from 'react-icons/im'
import style from "../Style/Subnav.module.css"
import { Box, Button, Flex, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import filter from "../Utils/Filter.svg"
import { Leftbar } from './LeftBar';
import { GridPage } from './GridPage';
import { Featured } from './Featured';
import { ListView } from './LIstView';






export const SubNavbar = () => {
  const [list,setlist]=useState(false);
  const status=useRef(list)
  const [open, setopen] = useState(false)
  let data = [
    <Text fontWeight="bold">Image</Text>,
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",

    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    <Text fontWeight="bold">Video</Text>,
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",
    "Image editing",

  ]



  return (
    <div  >

      <Box bg={useColorModeValue("#FFFFFF", "#383838")} className={style.subnav} >


        <Flex justifyContent="space-between" alignItems="center"  >
          <Flex alignItems="center" gap="20px">

            <Flex alignItems="center" justifyContent="space-between" w={open ? "180px" : ""}>
              <Image cursor="pointer" onClick={() => setopen(true)} src={filter} />
              {
                open ? <Flex alignItems="center" gap="10px" ><Text display="block">Filter</Text> <ChevronLeftIcon cursor="pointer" onClick={() => setopen(false)} /></Flex>: ""
              }
            </Flex>



            <Box>
              <Menu bg={useColorModeValue("white", "#464444")}>
                <MenuButton
                  px={4}
                  py={1}

                  borderRadius='2px'
                  borderWidth='1px'
                  _hover={{ bg: useColorModeValue("white", "#464444"), borderColor: "grey" }}
                  _expanded={{ color: "white" }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  Catecory <ChevronDownIcon />
                </MenuButton>
                <MenuList bg={useColorModeValue("white", "#464444")} w="100%" overflow="auto">
                  <div >


                    <Box className={style.menugrid} >
                      {

                        data.map((el) => (
                          <Box   >



                            <MenuItem>{el}</MenuItem>

                          </Box>

                        ))

                      }
                    </Box>


                  </div>






                </MenuList>
              </Menu>
            </Box>
          </Flex>

          <Flex gap="20px" alignItems="center">
            <ImList2 cursor="pointer" onClick={()=>setlist(true)} fontWeight="300" />
            <BsGrid cursor="pointer" onClick={()=>setlist(false)} />
            <Button bg={useColorModeValue("white", "#464444")} _hover={{ bg:"transparent", }}border="1px solid #CCCCCC " borderRadius="2px" size="xs"  >
              Sort <CgSortAz fontSize={20} fontWeight="bold" />
            </Button>
          </Flex>
        </Flex>

      </Box>

      <Flex gap="10px"  bg={useColorModeValue("white","#383838")} color={useColorModeValue("#444444","#CCCCCC")}>
        <Leftbar open={open} />
       
       {
        list?<ListView/>: <GridPage />
       }
       
       
        <Featured/>
      </Flex>



    </div>

  )
}
