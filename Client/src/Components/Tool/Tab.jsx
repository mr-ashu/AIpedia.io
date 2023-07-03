import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Overview } from './Overview'
import ShareModel from '../Share'
import style from "../../Style/Tool.module.css"
export const Tabcomp = ({ el ,id}) => {
    return (


        <Box>
            <Tabs mt="20px" position="sticky"  >
                <TabList fontSize="16px" fontWeight="600" lineHeight={"24px"}>
                    <Flex justifyContent="space-between" w="100%" alignItems="center">
                        <Box className={style.tnav}>
                            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>Overview</Tab>
                            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>Alternative</Tab>
                            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>Embeds</Tab>
                            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>Reviews</Tab>
                            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>More</Tab>
                        </Box>

                       <ShareModel/>

                    </Flex>

                </TabList>



                <TabPanels >

                    <TabPanel>
                        <Overview el={el} id={id}/>
                    </TabPanel>


                    <TabPanel>

                    </TabPanel>


                    <TabPanel>

                    </TabPanel>


                    <TabPanel>

                    </TabPanel>

                    <TabPanel>

                    </TabPanel>




                </TabPanels>
            </Tabs>
        </Box>
    )
}
