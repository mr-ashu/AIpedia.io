import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { BottomNavigationAction } from '@mui/material'
import React from 'react'

import style from "../../Style/Footer.module.css"

import { BottomNavigation } from '@mui/material';

export const Bfilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (



        <>
            <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{`Full drawer contents`}</DrawerHeader>
                    <DrawerBody>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
     



                <Text  onClick={onOpen} >

                    Filter
                </Text>

           
        </>

    )
}
