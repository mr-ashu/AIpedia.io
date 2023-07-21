
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';

import React, { useEffect, useState } from 'react'

import { MdOutlineCategory } from 'react-icons/md';

export const BCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
 

  const [cat, setcat] = useState([])

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API}/cat/get`)
      .then((res) => {
        setcat(res.data)

      })


  }, [])

 


  return (



    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("#F8F8F8", "#2C2C2C")}>

          <DrawerHeader h="45px" borderBottom="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} bg={useColorModeValue("#F8F8F8", "#2C2C2C")}  >

            <Flex textTransform="uppercase" w="100%" m="auto" alignItems="center" gap="5px" fontSize="14px" lineHeight="24px" textAlign="left"   >

              <MdOutlineCategory /> Category
            </Flex>
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Box>



              <Tabs bgScheme="" display="flex" justifyContent="space-between" w="100%" border="none" >
                <TabList display="flex" fontWeight="600" flexDirection="column" gap="20px" w="100%" border="none" >
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Image</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Audio</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Writing</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Business</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">3D</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Video</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Developer tools</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">AI Bot</Tab>
                  <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Other</Tab>
                </TabList>

                <TabPanels display="flex" justifyContent="end">
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="25px" flexDirection="column" >

                    {
                      cat?.filter((e) => e.Title === "Image").map((el) => (




                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="25px" flexDirection="column" >

                    {
                      cat?.filter((e) => e.Title === "Audio & Music").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "Writing").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>

                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "Business").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>

                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "3D").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "Video").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "Developer Tools").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "AI Bot").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>
                  <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                    {
                      cat?.filter((e) => e.Title === "Miscellaneous").map((el) => (

                        <Flex m="auto" w="90%" justifyContent="space-between" alignItems="center">
                          <Text fontSize="13px" fontWeight="400">{el.Category}</Text>

                          <input type="checkbox" />


                        </Flex>



                      ))
                    }

                  </TabPanel>


                </TabPanels>
              </Tabs>







            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>




      <Flex alignItems="center" w="50%" onClick={onOpen} gap="5px" fontSize="14px" lineHeight="24px" textAlign="center" justifyContent="center" >

        <MdOutlineCategory /> Category
      </Flex>


    </>

  )
}
