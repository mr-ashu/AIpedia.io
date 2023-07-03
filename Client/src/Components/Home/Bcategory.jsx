import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { BottomNavigationAction } from '@mui/material'
import React from 'react'

import style from "../../Style/Footer.module.css"

import { BottomNavigation } from '@mui/material';

export const BCategory = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (



        <>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"full"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{`Full drawer contents category`}</DrawerHeader>
                    <DrawerBody>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
     



                <Text  onClick={onOpen} >

                    Category
                </Text>

           
        </>

    )
}
