import React, { useEffect, useRef, useState } from 'react'
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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon, MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { BiTrendingUp } from 'react-icons/bi';
import dstyle from "../Style/Featured.module.css"
import { RiShareBoxFill } from 'react-icons/ri';
import { CurtedCollection } from './CurtedCollection';
import { IconandPrivacy } from './IconandPrivact';

const data = [<Link to="/collection">Collection</Link>, <Link to="/top10">Top 10</Link>, 'Blog',<Link to="https://aizones.notion.site/aizones/Advertise-with-Us-a170d9dfde6043f49e5ecfaaeb7d15c6 " target="_blank"> Advertise</Link>, <Link to="/submit">Submit</Link>];
const getData = async ({ input }) => {

    return axios.post(`${process.env.REACT_APP_API}/data/get?search=${input}`);


};



export const Navbar = () => {

    const [pop, setpop] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let { isAuth, loginData } = useSelector((store) => store.userReducer)
    const [input, setInput] = useState("")
    const [sdata, setData] = useState([])
    const [dlength, setLength] = useState(0)
    let [tdata, settData] = useState([]);
    let [page, setPage] = useState(1);
    const [showBox, setShowBox] = useState(false);


    const boxRef = useRef(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setShowBox(true);
    };



    const handleOutsideClick = (e) => {

        if (boxRef.current && !boxRef.current.contains(e.target)) {
            setShowBox(false);
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("UserData");
        setpop(!pop)
        window.location.reload();
    };


    useEffect(() => {

        if (input.length >= 2) {
            getData({ input }).then((res) => {
                setData(res.data.data)
            })
        }
        else {
            setData([])
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };

    }, [input]);






    const gettData = async (page) => {
        try {
            let res = await axios.post(
                `${process.env.REACT_APP_API}/data/get?sort=mostlike&page=${page}`,

            );

            settData((prev) => [...prev, ...res.data.data]);

        } catch (err) {
            console.log(err);

        }
    };

    const getlength = async () => {
        try {
            axios.post(
                `${process.env.REACT_APP_API}/data/get`,

            ).then((res) => {
                setLength(res.data.result);
            })



        } catch (err) {
            console.log(err);

        }
    };


    useEffect(() => {
        gettData(page);
        getlength()

    }, []);

    const infinitScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", infinitScroll);
        return () => window.removeEventListener("scroll", infinitScroll);
    }, []);

    console.log(showBox);
    return (
        <>

            <div className={style.navbar}>
                <Box position="relative" bg={useColorModeValue('#1E1E1E', '#141414')} px={3} color="#FFFFFF" >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >

                        <Flex gap="20px" alignItems="center">
                            <Link to="/"><Box><Image src={logo} /></Box></Link>


                            <Box className={style.linputbox}>
                                <InputGroup w="312px">
                                    <InputLeftElement pointerEvents='none'>
                                        <Search2Icon color='gray.300' />
                                    </InputLeftElement>
                                    <Input onChange={handleInputChange}
                                        bg={useColorModeValue("white", "#464444")}
                                        _placeholder={{ color: "grey", fontSize: "16px", lineHeight: "24px" }}
                                        color={useColorModeValue("black", "white")}
                                        borderRadius="5px"
                                        placeholder={`Search from ${dlength} tools`}

                                    />
                                    <InputRightElement  >
                                        <Switch size='sm' />

                                    </InputRightElement>
                                </InputGroup>



                            </Box>

                        </Flex>
                        <Box className={style.inputbox}>
                            <InputGroup w="280px">
                                <InputLeftElement pointerEvents='none'>
                                    <Search2Icon color='grey' />
                                </InputLeftElement>
                                <Input
                                    onChange={handleInputChange}
                                    borderColor={useColorModeValue("white", "#464444")}
                                    _placeholder={{ color: "grey", fontSize: "16px", lineHeight: "24px" }}
                                    bg={useColorModeValue("white", "#464444")}
                                    color={useColorModeValue("black", "white")}
                                    borderRadius="5px"
                                    placeholder={`Search from ${dlength} tools`}

                                />
                                <InputRightElement bg={useColorModeValue("white", "#464444")} >

                                    <Switch size='sm' />
                                </InputRightElement>
                            </InputGroup>
                        </Box>

                        <Flex alignItems="center" gap="25px">
                            <Box className={style.ltext}>
                                <Flex gap="25px" >
                                    {
                                        data.map((el, i) => (
                                            <Text key={i} color="#F8F8F8" fontFamily="Segoe ui" fontSize="16px" lineHeight="25px" fontWeight="400">{el}</Text>
                                        ))
                                    }


                                </Flex>
                            </Box>
                            {
                                isAuth ? "" : <Box className={style.snav}>
                                    <Link to="/login"><Text fontSize="16px" lineHeight="25px" fontWeight="400" color="#F8F8F8">Sign in</Text></Link>
                                </Box>
                            }

                            <Box className={style.ltext} >
                                <Flex gap="25px" alignItems="center" >

                                    {
                                        isAuth ? <Menu color="#3B89B6">
                                            <MenuButton
                                                as={Button}
                                                rounded={'full'}
                                                variant={'link'}
                                                cursor={'pointer'}
                                                minW={0}>
                                                <Avatar
                                                    size={'sm'}
                                                    src={loginData.image}
                                                />
                                            </MenuButton>
                                            <MenuList zIndex="250"  >
                                                <Box color="#3B89B6">
                                                    <Flex alignItems="center" w="fit-content" gap="20px" ml="15px">
                                                        <Avatar size={'md'}
                                                            src={loginData.image} />

                                                        <Text fontSize="16px" fontWeight="400">{loginData.name}</Text>
                                                    </Flex>
                                                </Box>
                                                <Link to="/creator"> <MenuItem color="#3B89B6" mt="15px">Creator's portal</MenuItem></Link>
                                                <Link to="/profile_setting"> <MenuItem color="#3B89B6"  >Setting</MenuItem></Link>

                                                <MenuItem color="#3B89B6" onClick={handleLogout} >Sign out</MenuItem>

                                            </MenuList>
                                        </Menu> : <Link to="/signup"><Button backgroundColor="#3B89B6" borderRadius="2px">Sign up</Button></Link>
                                    }


                                    <Button w="fit-content" backgroundColor="#1E1E1E" onClick={toggleColorMode} _hover={{
                                        backgroundColor: "#1E1E1E"
                                    }}>
                                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                    </Button>

                                </Flex>
                            </Box>

                            <Box className={style.iconbtn}>
                                <Flex alignItems="center" background="none"   >

                                    <Flex alignItems="center" >
                                        <Box className={style.searchhide}  onMouseEnter={() =>setShowBox(!showBox)} mr="15px">
                                            <Search2Icon cursor="pointer" />
                                        </Box>


                                        <Box>
                                            <Avatar size={'sm'}
                                                src={loginData.image} />
                                        </Box>
                                    </Flex>




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
                                        <DrawerContent bg={useColorModeValue("var(--landing-page, #FFF)", "#2C2C2C")} >
                                            <DrawerCloseButton />
                                            <DrawerHeader>

                                                MENU

                                            </DrawerHeader>


                                            <DrawerBody  >
                                                <Flex flexDirection="column" gap="20px">
                                                    {
                                                        data.map((el, i) => (



                                                            <Text key={i}>{el}</Text>
                                                        ))
                                                    }
                                                </Flex>
                                                <Divider border="1px" mt="20px" mb="20px" borderColor={useColorModeValue("#E6E6E6", "#444")} />

                                                {
                                                    isAuth ? <Box>
                                                        <Flex mb="10px" alignItems="center" justifyContent="space-between" >
                                                            <Flex gap="20px" alignItems="center" >
                                                                <Avatar size={'sm'}
                                                                    src={loginData.image} />
                                                                <Text fontSize="16px" lineHeight="24px" fontWeight="400">{loginData.name}</Text>
                                                            </Flex>

                                                            <Button p="0px" onClick={toggleColorMode} _hover={{
                                                                backgroundColor: "#1E1E1E",
                                                            }}>
                                                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                                            </Button>
                                                        </Flex>


                                                        <Flex fontSize="14px" lineHeight="24px" fontWeight="400" flexDirection="column" gap="10px" textAlign="left">
                                                            <Link to="creator"><Text>Creator's portal</Text></Link>
                                                            <Link to="profile_setting"><Text>Setting</Text></Link>
                                                            <Text onClick={handleLogout}>Sign out</Text>
                                                        </Flex>
                                                    </Box> :
                                                        <Box>
                                                            <Link to="/login"><Text border="1px" textAlign="center" p="10px" fontSize="16px" w="100%" borderRadius="3px"  >Sign in</Text></Link>

                                                            <Link to="/signup"><Text mt="20px" color="white" bg="#3B89B6" fontSize="16px" border="1px" textAlign="center" p="10px" w="100%" borderRadius="3px"  >Sign up</Text></Link>


                                                        </Box>
                                                }

                                                <Divider border="1px" mt="20px" mb="20px" borderColor={useColorModeValue("#E6E6E6", "#444")} />
                                                <IconandPrivacy />



                                            </DrawerBody>





                                        </DrawerContent>
                                    </Drawer>
                                </Flex>
                            </Box>


                        </Flex>

                    </Flex>


                </Box>





                {showBox && (
                    <Box
                        ref={boxRef}
                        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                       
                        maxH="500px"
                        position="absolute"
                        
                        bg="Background"

                        

                        overflow="auto"
                        className={style.searchbar}
                        p="20px"
                    >
                     <Box className={style.searchhide}>
                        <Input onChange={(e)=>setInput(e.target.value)} w="100%" borderRadius="5px"  placeholder={`Search from ${dlength} tools`} />
                     </Box>


                        {
                            input.length >= 2 ? (
                                sdata?.map((el, i) => (

                                    <Flex mb="20px" justifyContent="space-between" alignItems="center" gap="15px">
                                        <Link key={i} to={`/tool/${el._id}`} onClick={() => setShowBox(false)}>
                                            <Flex gap="15px" alignItems="center">
                                                <Image boxSize="35px" borderRadius="4px" src={el.Logo} />
                                                <Box>
                                                    <Text fontSize="13px" lineHeight="24px" fontWeight="600" >
                                                        {el.Title}
                                                    </Text>
                                                    <Text fontSize="12px" lineHeight="20px" className={dstyle.desc}>
                                                        {el.Tagline}
                                                    </Text>
                                                </Box>

                                            </Flex>
                                        </Link>
                                        <Link to={el.URL} target="_blank"> <RiShareBoxFill size={14} /></Link>
                                    </Flex>

                                ))
                            ) : ""
                        }

                        <Box w="100%">

                            <Box>
                                <Flex textTransform="uppercase" alignItems="center" gap="25px" >
                                    <Text mb="20px" mt="20px" fontWeight="600" lineHeight="24px" fontSize="13px" >Tranding</Text>
                                    <BiTrendingUp size={20} />
                                </Flex>

                                <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap="23px" w="80%" m="auto"  >
                                    {
                                        tdata?.slice(0, 8).map((el, i) => (



                                            <Link to={`/tool/${el._id}`}>
                                                <Box key={i}>
                                                    <Image borderRadius="5px" width="100%" src={el.Logo} />
                                                </Box>

                                            </Link>


                                        ))
                                    }
                                </Box>



                            </Box>
                            <Box display="block">
                                <CurtedCollection />

                            </Box>

                        </Box>


                    </Box>

                )}



            </div>

        </>
    )
}

