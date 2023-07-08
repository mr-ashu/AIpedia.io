import React, { useEffect, useState } from 'react'
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
import fimg from "../Utils/micon.svg";
import { CloseIcon, HamburgerIcon, MoonIcon, PhoneIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import coll2 from "../Utils/cicon1.svg";
import collect from '../Utils/collec.svg'
import cstyle from "../Style/Featured.module.css";
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
const data = [<Link to="/collection">Collection</Link>, <Link to="/top10">Top 10</Link>, 'Blog', 'Adevertise', <Link to="/submit">Submit</Link>];
const getData = async ({ input }) => {

    return axios.post(`${process.env.REACT_APP_API}/data/get?search=${input}`);


};

let coll = [
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },


]

let tranding = [
    fimg, fimg, fimg, fimg, fimg, fimg, fimg, fimg


]

export const Navbar = () => {
    const [sopen, setSopen] = useState(false)
    const [pop, setpop] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let { isAuth, loginData } = useSelector((store) => store.userReducer)
    const [input, setInput] = useState("")
    const [sdata, setData] = useState([])
    const handleLogout = () => {
        localStorage.removeItem("UserData");
        setpop(!pop)
        window.location.reload();
    };










    useEffect(() => {

        if (input.length >= 2) {
            getData({ input }).then((res) => {
                setData(res.data)
            })
        }
        else {
            setData([])
        }

    }, [input]);

    const handleOnFocus = (e) => {

        setSopen(true);
    };

    const handleOnBlur = () => {
        console.log("hello");
        setSopen(false);
    };

    return (
        <>
            <div className={style.navbar}>
                <Box bg={useColorModeValue('#1E1E1E', '#141414')} px={3} color="#FFFFFF" >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                        <Flex gap="20px" alignItems="center">
                            <Link to="/"><Box><Image src={logo} /></Box></Link>
                            <Box className={style.linputbox}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <Search2Icon color='gray.300' />
                                    </InputLeftElement>
                                    <Input
                                        onFocus={handleOnFocus}
                                        onBlur={handleOnBlur}
                                        onChange={(e) => setInput(e.target.value)} bg={useColorModeValue("white", "#464444")} _placeholder={{ color: "grey" }} color={useColorModeValue("black", "white")} borderRadius="3px" placeholder='Search' />
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
                                <Input
                                     onFocus={handleOnFocus}
                                        onBlur={handleOnBlur}
                                  
                                    onChange={(e) => setInput(e.target.value)} borderColor={useColorModeValue("white", "#464444")} _placeholder={{ color: "grey" }} bg={useColorModeValue("white", "#464444")} color={useColorModeValue("black", "white")} className='input' borderRadius="3px" placeholder='Search' />
                                <InputRightElement bg={useColorModeValue("white", "#464444")} >

                                    <Switch size='sm' />


                                </InputRightElement>
                            </InputGroup>
                        </Box>

                        <Flex alignItems="center" gap="15px">
                            <Box className={style.ltext}>
                                <Flex gap="20px" >
                                    {
                                        data.map((el, i) => (
                                            <Text key={i} fontFamily="Segoe ui" fontSize="16px" fontWeight="400">{el}</Text>
                                        ))
                                    }


                                </Flex>
                            </Box>
                            {
                                isAuth ? "" : <Box className={style.snav}>
                                    <Link to="/login"><Text>Sign in</Text></Link>
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
                                                    data.map((el, i) => (
                                                        <Text key={i} mb="10px" fontWeight="500">{el}</Text>
                                                    ))
                                                }

                                            </DrawerBody>
                                            <Divider color="black" border="1px solid DodgerBlue" />
                                        </Stack>
                                        <Flex justifyContent="space-between" w="100%" alignItems="baseline" height="100%" mt="20px">
                                            <Link to="/signup"><Button ml="20px" backgroundColor="DodgerBlue" borderRadius="3px" color="white">Sign up</Button></Link>
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


                <Box  onBlur={handleOnBlur} boxShadow={sopen ?  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px": ""}   w="330px" maxH="500px" position="absolute" left="10%" mt="30px" bg={useColorModeValue("#ffff", "#464444")} overflow="auto" className={style.searchbar}   >
                    {
                        sopen ? <Box padding="20px"     >

                            <Box  >


                                {
                                    sdata?.map((el, i) => (
                                        <Link key={i} to={`/tool/${el._id}`} onClick={() => setSopen(false)}>
                                            <Flex gap="15px" mb="20px" alignItems="center">
                                                <Avatar src={el.image} />
                                                <Text>
                                                    {el.title}
                                                </Text>



                                            </Flex>
                                        </Link>
                                    ))
                                }

                                <Box w="100%">

                                    <Box>
                                        <Flex alignItems="center" gap="25px" >
                                            <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Tranding</Text>
                                            <BiTrendingUp size={20} />
                                        </Flex>

                                        <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap="20px" w="80%" m="auto">
                                            {
                                                tranding.map((el, i) => (



                                                    <Box key={i} >
                                                        <Image width="100%" src={el} />
                                                    </Box>


                                                ))
                                            }
                                        </Box>



                                    </Box>
                                    <Box>
                                        <Flex alignItems="center" justifyContent="space-between" >
                                            <Text mb="20px" mt="20px" fontWeight="600" fontSize="16px" >Curated collections</Text>
                                            <Text fontWeight="600" fontSize="14px" color="#3B89B6">VIEW ALL</Text>
                                        </Flex>

                                        {
                                            coll.map((el, i) => (
                                                <Box key={i}>

                                                    <Flex alignItems="center" gap="10px" paddingBottom="20px">
                                                        <Box className={cstyle.grid_icon}>
                                                            <Image src={el.icon2} />
                                                            <Image src={el.icon} />
                                                            <Image src={el.icon2} />
                                                            <Image src={el.icon} />
                                                        </Box>


                                                        <Box>

                                                            <Text fontSize="14px" fontWeight="600" color="#22222" >{el.title}</Text>
                                                            <Flex alignItems="center" gap="3px" fontSize="10px" fontWeight="400">
                                                                <Text>{el.created} </Text>
                                                                | <Text color="#3B89B6">{el.tool} tools</Text>
                                                            </Flex>
                                                            <Text w="90%" fontSize="12px" lineHeight="20px">{el.desc} </Text>



                                                        </Box>


                                                    </Flex>

                                                </Box>
                                            ))
                                        }



                                    </Box>

                                </Box>


                            </Box>
                        </Box> : ""
                    }
                </Box>


            </div>

        </>
    )
}

