import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineCategory } from 'react-icons/md';
import excel from "../../Utils/Spreadsheet_icon.svg"
import chatgpt from "../../Utils/ChatGPT.svg"
import vscode from "../../Utils/Vs code.svg"

import figma from "../../Utils/Figma.svg"
import github from "../../Utils/Github.svg"
import mobile from "../../Utils/Mobile app.svg"
import slack from "../../Utils/Slack.svg"
import browser from "../../Utils/Browser Extension.svg"
import Wordpress from "../../Utils/Wordpress.svg"
import sopify from "../../Utils/sopify.svg"

import { MdDeleteOutline, MdOutlineVerified } from 'react-icons/md';
import { AiFillApi, AiFillDollarCircle, AiFillGift } from 'react-icons/ai';
import { DiOpensource } from 'react-icons/di';
import { BsClockHistory, BsTagFill } from 'react-icons/bs';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';



const data = [
    {
        logo: excel,
        name: "Sheet/Excel"
    },
    {
        logo: chatgpt,
        name: "ChatGPT (Plugins)"
    },
    {
        logo: vscode,
        name: "VS Code"
    },
    {
        logo: github,
        name: "Github"
    },
    {
        logo: slack,
        name: "Slack"
    },
    {
        logo: mobile,
        name: "Mobile app"
    },
    {
        logo: Wordpress,
        name: "Wordpress"
    },
    {
        logo: figma,
        name: "Figma"
    },
    {
        logo: browser,
        name: "Browser Extension"
    },
    {
        logo: sopify,
        name: "Shopify"
    },

]

let price = [
    {
        logo: <AiFillGift size={13} />,
        name: "Free"
    },
    {
        logo: <BsClockHistory size={13} />,
        name: "Free trial"
    }
    ,
    {
        logo: <MdOutlineVerified size={13} />,
        name: "Freemium"
    },
    {
        logo: <AiFillDollarCircle size={13} />,
        name: "Paid"
    }

]

let other = [
    {
        logo: <AiFillApi size={15} />,
        name: "API"
    },
    {
        logo: <DiOpensource size={15} />,
        name: "Open Source"
    }


]
export const BFilter = ({ open, setCount, setUserInfo, setPageName, setFilterLoader }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleFilterchange = (e) => {

        let { value, checked, name } = e.target;
    
        if (checked && value) {
          setCount((pre) => pre + 1)
        }
        if (!checked) {
          setCount((pre) => pre - 1)
        }
    
    
        if (checked && name === "works_with") {
    
          setUserInfo((prev) => {
    
            return {
    
              ...prev,
              works_with: [...prev.works_with, value]
            }
          })
        }
        else if (checked && name === "Pricing") {
    
          setUserInfo((prev) => {
            return {
              ...prev,
              Pricing: [...prev.Pricing, value]
            }
          })
        }
    
        else if (checked && name === "others_features") {
    
          setUserInfo((prev) => {
            return {
              ...prev,
              others_features: [...prev.others_features, value]
            }
          })
        }
        else {
    
          setUserInfo((prev) => {
            return {
              works_with: prev.works_with.filter((ele) => ele !== value),
              others_features: prev.others_features.filter((ele) => ele !== value),
              Pricing: prev.Pricing.filter((ele) => ele !== value)
            }
          })
    
        }
        setPageName("filter")
        setFilterLoader((prev) => !prev)
    
    
    
    
    
      }

    return (



        <>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"full"}>
                <DrawerOverlay />
                <DrawerContent bg={useColorModeValue("#F8F8F8", "#2C2C2C")}>
                    <DrawerHeader h="45px" borderBottom="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} bg={useColorModeValue("#F8F8F8", "#2C2C2C")}  >

                        <Flex textTransform="uppercase" w="100%" m="auto" alignItems="center" gap="5px" fontSize="14px" lineHeight="24px" textAlign="left"   >

                            <TbAdjustmentsHorizontal /> Filters
                        </Flex>
                    </DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>

                        <Box>



                            <Tabs bgScheme="" display="flex" justifyContent="space-between" w="100%" border="none" >
                                <TabList display="flex" fontWeight="600" flexDirection="column" gap="20px" w="100%" border="none" >
                                    <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Works with:</Tab>
                                    <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Price:</Tab>
                                    <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Other:</Tab>
                                    <Tab _selected={{ bg: useColorModeValue("#F3F5FA", "") }} fontSize="13px" fontWeight="600" justifyContent="left" border="none">Sort</Tab>
                                </TabList>

                                <TabPanels display="flex" justifyContent="end">
                                    <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="25px" flexDirection="column" >

                                        {
                                            data?.map((el) => (

                                                <Flex m="auto" w="75%" justifyContent="space-between" alignItems="center">
                                                    <Flex gap="7px" alignItems="center" w="fit-content">
                                                        <Image src={el.logo} />
                                                        <Text fontSize="13px" fontWeight="400">{el.name}</Text>
                                                    </Flex>

                                                    <input type="checkbox" name="works_with" value={el.name} onChange={handleFilterchange}  />


                                                </Flex>



                                            ))
                                        }

                                    </TabPanel>
                                    <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="25px" flexDirection="column" >

                                        {
                                            price?.map((el) => (

                                                <Flex m="auto" w="75%" justifyContent="space-between" alignItems="center">
                                                    <Flex gap="7px" alignItems="center" w="fit-content">
                                                        {el.logo}
                                                        <Text fontSize="13px" fontWeight="400">{el.name}</Text>
                                                    </Flex>

                                                    <input type="checkbox" name="Pricing" value={el.name} onChange={handleFilterchange} />


                                                </Flex>



                                            ))
                                        }

                                    </TabPanel>
                                    <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" gap="20px" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">

                                        {
                                            other?.map((el) => (

                                                <Flex w="75%" justifyContent="space-between" alignItems="center" alignSelf="center" >
                                                    <Flex gap="7px" alignItems="center" w="fit-content">
                                                        {el.logo}
                                                        <Text fontSize="13px" fontWeight="400">{el.name}</Text>
                                                    </Flex>

                                                    <input type="checkbox" name="others_features" value={el.name} onChange={handleFilterchange}/>


                                                </Flex>



                                            ))
                                        }

                                    </TabPanel>

                                    <TabPanel bg={useColorModeValue("#F3F5FA", "")} w="212px" display="flex" flexDirection="column" gap="20px"  >
                                        <Flex w="75%" justifyContent="space-between" alignItems="center" alignSelf="center" >
                                            <Text fontSize="13px" fontWeight="400">Newsest </Text>
                                            <input type="checkbox" />
                                        </Flex>
                                        <Flex w="75%" justifyContent="space-between" alignItems="center" alignSelf="center" >
                                            <Text fontSize="13px" fontWeight="400">Top rated </Text>
                                            <input type="checkbox" />
                                        </Flex>
                                        <Flex w="75%" justifyContent="space-between" alignItems="center" alignSelf="center" >
                                            <Text fontSize="13px" fontWeight="400"> Trending</Text>
                                            <input type="checkbox" />
                                        </Flex>
                                    </TabPanel>


                                </TabPanels>
                            </Tabs>







                        </Box>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>




            <Flex w="50%" alignItems="center" onClick={onOpen} gap="5px" fontSize="14px" lineHeight="24px" textAlign="center" justifyContent="center">
                <TbAdjustmentsHorizontal /> Filters

            </Flex>


        </>

    )
}