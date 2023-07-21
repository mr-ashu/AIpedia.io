import { Box, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../Style/Tool.module.css" 
import { Overall } from '../Components/Top10/Overall'
import { LandingRight } from '../Components/LandingRight'
import { MdOutlineEqualizer } from 'react-icons/md'


const nlist = ["Overall", "Image", "Developers tools", "AI BOT", "3D", "Business", "Video"]

export const Top10 = () => {
  return (

    <Flex>
      <Stack w="100%" fontFamily="Segoe UI">

        <Box w="80%" margin="auto" mt="70px">
          <Flex alignItems="center" gap="5px" height="40px" fontWeight="600" fontSize={"32px"} lineHeight="40px"><MdOutlineEqualizer />TOP 10</Flex>

          <Text fontSize="16px" lineHeight="24px" fontWeight="400" mt="20px" textAlign="justify">
            Our Top 10 Page showcases the most coveted and influential AI tools, carefully curated by our advanced algorithm. Utilizing a comprehensive calculation based on factors such as views, likes, reviews, and more, we present you with a definitive list of the industry's top-performing AI tools.
          </Text>

          <Tabs mt="20px">
            <TabList overflow="auto" className={style.tscroll} >
              {
                nlist?.map((el) => (
                  <Tab  textTransform="uppercase" fontSize="14px" fontWeight="600" lineHeight={"20px"}>{el}</Tab>
                ))
              }
            </TabList>



            <TabPanels >

                 <TabPanel><Overall /></TabPanel>
                 <TabPanel> </TabPanel>
                 <TabPanel> </TabPanel>
                 <TabPanel> </TabPanel>
                 <TabPanel> </TabPanel>

            </TabPanels>
          </Tabs>
        </Box>





      </Stack>
      <Box>
        <LandingRight />
      </Box>

    </Flex>

  )
}
