import { Box, Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../Style/Collection.module.css"

import { Curated } from '../Components/Collection/Curated'
import { Like } from '../Components/Collection/like'
import { MyCollection } from '../Components/Collection/MyCollection'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { Overall } from '../Components/Top10/Overall'


const nlist = ["OVERALL", "IMAGE", "WRITING", "AI BOT", "3D"]
export const Top10 = () => {
  return (
    <Box w="90%" margin="auto" paddingTop="70px" fontFamily="Segoe UI">
      <Text width="160px" height="40px" fontWeight="600" fontSize={"32px"} lineHeight="40px">TOP 10</Text>


      <Tabs mt="20px" position="sticky"       >
        <TabList fontSize="16px" fontWeight="600" lineHeight={"24px"}>
          {
            nlist?.map((el) => (
              <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>{el}</Tab>
            ))
          }




        </TabList>



        <TabPanels >

          <TabPanel>
            <Overall />
          </TabPanel>
          <TabPanel>




          </TabPanel>

          <TabPanel>
            <MyCollection />
          </TabPanel>

        </TabPanels>
      </Tabs>
    </Box>
  )
}
