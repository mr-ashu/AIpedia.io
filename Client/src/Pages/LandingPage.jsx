import React from 'react'
import { SubNavbar } from '../Components/SubNavbar'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import style from "../Style/Landing.module.css"
export const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div className={style.landingpage}> 
  
      
    </div>
  )
}
