import * as React from 'react';


import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import style from "../../Style/Footer.module.css"
import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { BottomNavigation } from '@mui/material';
import { Bfilter } from './Bfilter';
import { BCategory } from './Bcategory';

export const Footer = () => {
  const [value, setValue] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>




      <Box className={style.footer} bg={useColorModeValue('#1E1E1E', '#141414')} py={3} >

        <Flex fontWeight="600" color="white" justifyContent="space-evenly" h="45px" alignItems="center" textTransform="uppercase" fontSize="18px" letterSpacing="1px">
          <BCategory/>
          <Divider orientation="vertical" border="1px solid white" h="100%"/>
          <Bfilter />
        </Flex>





      </Box>
    </>
  )
}
