import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react'
 
import React from 'react'
import { CgSortAz } from 'react-icons/cg'

export const Sort = ({ setSort, setPageName, setSortLoader }) => {
   
    const mostLikeHandler = () => {
        setSort("mostlike");
        setPageName("sort")
        setSortLoader((prev) => !prev)
      }
      const aTozhandler = () => {
        setSort("a-z");
        setPageName("sort")
        setSortLoader((prev) => !prev)
      }
      const newDatahandler = () => {
        setSort("newdataadd");
        setPageName("sort")
        setSortLoader((prev) => !prev)
      }
   
   
    return (
        <Box>

            <Menu>
                <MenuButton   _hover={{ bg: "transparent", }} border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} borderRadius="2px" size="xs"  >
                  <Flex borderRadius="3px" alignItems="center" gap="5px" px="5px">  Sort <CgSortAz fontSize={20} fontWeight="bold" /></Flex>
                </MenuButton>

                
                <MenuList>
                    <MenuItem onClick={newDatahandler}>Newest</MenuItem>
                    <MenuItem onClick={aTozhandler}>Top rated</MenuItem>
                    <MenuItem onClick={mostLikeHandler}>Trending</MenuItem>
                </MenuList>
            </Menu>

        </Box>
    )
}
