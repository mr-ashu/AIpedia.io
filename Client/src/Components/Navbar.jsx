import React from 'react'
import style from "../Style/Navbar.module.css"
import logo from "../Utils/LOGO.svg"
import {
    Box,
    Flex,
    Button,

    Stack,
    useColorMode,
    Input,
    IconButton,
    useDisclosure,

    Avatar,

    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    DrawerHeader,

    InputLeftElement,
    InputGroup,
    Divider,
    InputRightElement,
    Switch,
    Image,
    useColorModeValue,

} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon, MoonIcon, PhoneIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import { Leftbar } from './LeftBar';
import { SubNavbar } from './SubNavbar';


const data = ['Collection', 'Top 10', 'Blog', 'Adevertise', 'Submit'];

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <div className={style.navbar}>
            <Box bg={useColorModeValue('#1E1E1E', '#141414')} px={3} color="#FFFFFF" >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <Flex gap="20px" alignItems="center">
                        <Box><Image src={logo} /></Box>
                        <Box className={style.linputbox}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='gray.300' />
                                </InputLeftElement>
                                <Input bg={useColorModeValue("white", "#464444")} _placeholder={{ color: "grey" }} color={useColorModeValue("black", "white")} borderRadius="3px" placeholder='Search' />
                                <InputRightElement  >
                                    <Switch size='sm' />

                                </InputRightElement>
                            </InputGroup>
                        </Box>

                    </Flex>
                    <Box className={style.inputbox}>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Search2Icon color='grey' />
                            </InputLeftElement>
                            <Input borderColor={useColorModeValue("white", "#464444")} _placeholder={{ color: "grey" }} bg={useColorModeValue("white", "#464444")}   color= {useColorModeValue("black",  "white")} className='input' borderRadius="3px" placeholder='Search' />
                            <InputRightElement bg={useColorModeValue("white", "#464444")} >

                                <Switch size='sm' />


                            </InputRightElement>
                        </InputGroup>
                    </Box>

                    <Flex alignItems="center" gap="15px">
                        <Box className={style.ltext}>
                            <Flex gap="20px" >
                                {
                                    data.map((el) => (
                                        <Text fontFamily="Segoe ui" fontSize="18px" lineHeight="26"   fontWeight="400">{el}</Text>
                                    ))
                                }


                            </Flex>
                        </Box>

                        <Box className={style.snav}>
                            <Text>Sign in</Text>
                        </Box>
                        <Box className={style.ltext}>
                            <Flex gap="25px" alignItems="center">

                                <Button backgroundColor="DodgerBlue" borderRadius="2px">Sign up</Button>
                                <Button w="fit-content" backgroundColor="#1E1E1E" onClick={toggleColorMode} _hover={{
                                    backgroundColor: "#1E1E1E"
                                }}>
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>

                            </Flex>
                        </Box>


                        <Box className={style.iconbtn} background="none"   >
                            <IconButton

                                ref={btnRef}
                                backgroundColor="#1E1E1E"
                                _hover={{
                                    backgroundColor: "#1E1E1E",

                                    boxShadow: "none"

                                }}
                                size="md"
                                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                                onClick={onOpen}

                            />

                            <Drawer
                                isOpen={isOpen}

                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}


                            >
                                <DrawerOverlay />
                                <DrawerContent bg={useColorModeValue("white", "black")} >
                                    <DrawerCloseButton />
                                    <DrawerHeader>
                                        <Avatar />
                                    </DrawerHeader>
                                    <Stack>
                                        <Divider color="black" border="1px solid DodgerBlue" />
                                        <DrawerBody  >
                                            {
                                                data.map((el) => (
                                                    <Text mb="10px" fontWeight="500">{el}</Text>
                                                ))
                                            }

                                        </DrawerBody>
                                        <Divider color="black" border="1px solid DodgerBlue" />
                                    </Stack>
                                    <Flex justifyContent="space-between" w="100%" alignItems="baseline" height="100%" mt="20px">
                                        <Button ml="20px" backgroundColor="DodgerBlue" borderRadius="3px" color="white">Sign up</Button>
                                        <Button mr="20px" onClick={toggleColorMode} _hover={{
                                            backgroundColor: "#1E1E1E",
                                        }}>
                                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                        </Button>
                                    </Flex>

                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </Flex>

                </Flex>


            </Box>

             <SubNavbar/>
        </div>
    )
}

