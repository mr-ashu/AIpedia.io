import { Box, Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "../Style/Collection.module.css"

import { Curated } from '../Components/Collection/Curated'
import { Like } from '../Components/Collection/like'
import { MyCollection } from '../Components/Collection/MyCollection'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'

export const Collection = () => {

  const [grid, setgrid] = useState(false)
  return (
    <Stack >
      <Box paddingTop="70px" className={style.collection} margin="auto" minHeight="100vh" fontFamily="Segoe UI" >
        <Text width="160px" height="40px" fontWeight="600" fontSize={"32px"} lineHeight="40px">Collections</Text>


        <Tabs mt="20px" position="sticky"       >
          <TabList fontSize="16px" fontWeight="600" lineHeight={"24px"}>
            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>Curted collection</Tab>
            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>Liked</Tab>
            <Tab fontSize="16px" fontWeight="600" lineHeight={"24px"}>My collection</Tab>

          </TabList>



          <TabPanels >

            <TabPanel>
              <Curated />
            </TabPanel>
            <TabPanel>
              <Box>
                <Flex alignItems={"center"} justifyContent="space-between">
                  <Flex gap="20px">
                    <Button bg="none" border="1px solid ">Tools</Button>
                    <Button bg="none" border="1px solid ">Collection</Button>
                  </Flex>

                  <Flex gap="20px">
                    <AiOutlineUnorderedList onClick={() => setgrid(false)} size={20} />
                    <BsGrid size={20} onClick={() => setgrid(true)} />
                  </Flex>
                </Flex>
              </Box>

              <Like grid={grid} />
            </TabPanel>

            <TabPanel>
              <MyCollection />
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Box>
    </Stack>


  )
}
