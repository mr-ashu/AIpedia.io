import React, { useEffect, useState } from 'react'
import { BsGrid } from 'react-icons/bs';
import { MdOutlineCategory } from 'react-icons/md';
import { ImList2 } from 'react-icons/im'
import style from "../../Style/Subnav.module.css"
import { Box, Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { LandingPage } from '../../Pages/LandingPage';

import axios from 'axios';
import { Sort } from './Sort';

import { AiOutlineClose } from 'react-icons/ai';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';


export const SubNavbar = () => {
  const [list, setlist] = useState(false);
  let [count, setCount] = useState(0)
  const [open, setopen] = useState(false)

  // ------------------------------

  const [deleteLoading, setDeleteLoading] = useState(false);
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [cat, setcatlist] = useState([]);
  const [Category, setcat] = useState([]);

  const [pageName, setPageName] = useState("");
  const [FilterLoader, setFilterLoader] = useState(false);
  const [sort, setSort] = useState("");
  const [sortLoader, setSortLoader] = useState();

  const [showLoader, setShowLoader] = useState(false);


  const [userinfo, setUserInfo] = useState({
    works_with: [],
    Pricing: [],
    others_features: [],

  });



  const getData = async (page) => {
    setShowLoader(true);
    let payload = {};

    if (userinfo.Pricing.length > 0) {
      payload.Pricing = userinfo.Pricing;
    }
    if (userinfo.works_with.length > 0) {
      payload.works_with = userinfo.works_with;
    }
    if (userinfo.others_features.length > 0) {
      payload.others_features = userinfo.others_features;
    }
    if (Category.length > 0) {
      payload.Category = Category;
    }

    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/data/get?sort=${sort}&page=${page}`,
        payload
      );

      setData((prev) => [...prev, ...res.data.data]);
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };


  const getCat = () => {
    axios.get(`${process.env.REACT_APP_API}/cat/get`)
      .then((res) => {
        setcatlist(res.data)

      })
  }
  useEffect(() => {
    getCat()


  }, [])







  useEffect(() => {
    if (pageName === "filter") {
      setData([]);
      setPageName("");
    }
    if (pageName === "sort") {
      setData([]);
      setPageName("");
    }

    if (deleteLoading) {
      setDeleteLoading(false);
      window.location.reload();
    }

    if (pageName === "") {

      getData(page);
    }
  }, [page, pageName, deleteLoading, FilterLoader, sortLoader]);

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


  const handleCat = (el, i) => {

    setcat((pre) => [...pre, el])
    setPageName("filter")
    setFilterLoader((prev) => !prev)
  }

  const removeItem = (el, i) => {

    Category.splice(i, 1)

    setPageName("filter")
    setFilterLoader((prev) => !prev)

  }

 

  return (
    <div  >

      <Box bg={useColorModeValue("#F8F8F8", "#2C2C2C")} className={style.subnav} fontFamily="Segoe UI" borderBottom="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} >


        <Flex justifyContent="space-between" alignItems="center"  >
          <Flex alignItems="center" gap="20px"  >

            <Flex position="relative" fontWeight="400" alignItems="center" justifyContent={open ? "space-between" : "center"} w={open ? "142px" : ""} ml="15px" h="100%">

              <Box>
                <TbAdjustmentsHorizontal cursor="pointer" onClick={() => setopen(!open)} size={20} />

              </Box>
              {open ? <Text onClick={() => setopen(!open)} cursor="pointer" fontSize="14px" lineHeight="24px" fontFamily="Segoe UI" fontWeight="600" letterSpacing="2.59px" textTransform="uppercase" >Filters</Text> : ""}
              {open ? <Text mb="10px" w="15px" h="15px" alignItems="center" textAlign="center" justifyContent="center" fontSize="10px" bg="#3B89B6" color="white" borderRadius="100%" >{count}</Text> : ""}
            </Flex>



            <Box ml={open ? "23px" : "44px"} >
              <Menu bg={useColorModeValue("white", "#464444")}>
                <MenuButton
                  px={3}
                  py="3px"

                  borderRadius='4px'
                  borderWidth='1px'
                  _hover={{ bg: "" }}
                  fontSize="14px"
                  lineHeight="24px"
                  fontWeight="400"

                >

                  <Flex alignItems="center" gap="5px"><MdOutlineCategory /> Category <ChevronDownIcon /></Flex>
                </MenuButton>
                <MenuList bg={useColorModeValue("white", "#2C2C2C")} className={style.menulist} overflow="auto" whiteSpace="nowrap"  >

                  <Flex fontSize="13px">

                    <Box>
                      <MenuItem bg="" fontWeight="bold">Image</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Image").map((el, i) => (
                          <Box key={i} >

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                    </Box>


                    <Box>
                      <MenuItem bg="" fontWeight="bold">Audio</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Audio & Music").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                      <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                      <MenuItem bg="" fontWeight="bold">3D</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "3D").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                    </Box>
                    <Box>
                      <MenuItem bg="" fontWeight="bold">Writing</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Writing").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                      <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                      <MenuItem bg="" fontWeight="bold">Video</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Video").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                    </Box>

                    <Box>
                      <MenuItem bg="" fontWeight="bold">Business</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Business").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }

                      <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                    </Box>

                    <Box>



                      <MenuItem bg="" fontWeight="bold">AI BOT</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "AI Bot").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                    </Box>


                    <Box>
                      <MenuItem bg="" fontWeight="bold">Developer tools</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Developer Tools").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }


                    </Box>

                    <Box>
                      <MenuItem bg="" fontWeight="bold">Other</MenuItem>
                      {

                        cat?.filter((e) => e.Title === "Miscellaneous").map((el, i) => (
                          <Box key={i}>

                            <MenuItem bg=""
                              onClick={() => handleCat(el.Category, i)}

                            >{el.Category}</MenuItem>

                          </Box>

                        ))

                      }
                    </Box>

                  </Flex>



                </MenuList>
              </Menu>
            </Box>

            <Box position="relative" className={style.xscrollbox} >

              <Flex position="relative" alignItems="center" gap="15px" h="100%" overflowX={"scroll"} whiteSpace={"nowrap"} className={style.xscroll}>
                {
                  Category?.map((el, i) => (



                    <Flex px={2} py="2.5px" height="fit-content" borderRadius='10px' borderWidth='1px' alignItems="center" justifyContent="space-between" textAlign="center" gap="5px"><Text fontStyle="12px" fontWeight="400" lineHeight="24px"> {el} </Text>  <AiOutlineClose size={10} cursor="pointer" onClick={() => removeItem(el, i)} />  </Flex>



                  ))
                }
              </Flex>

            </Box>

          </Flex>

          <Flex className={style.margin} alignItems="center" >
            <Button bg="" cursor="pointer" onClick={() => setlist(true)}>
              <ImList2 fontWeight="300" />

            </Button>
            {/* .smallbox */}
            <Button bg="" cursor="pointer" onClick={() => setlist(false)}>
              <BsGrid />
            </Button>

            {/* --------------------------------------- */}


            <Sort
              setSort={setSort}
              setPageName={setPageName}
              setSortLoader={setSortLoader}


            />


            {/* ----------------------------------------------- */}
          </Flex>
        </Flex>
      </Box>

      <Box >
        <Box className={style.smallbox} alignItems="center" >
          <Button bg="" cursor="pointer" onClick={() => setlist(true)}>
            <ImList2 fontWeight="300" />

          </Button>

          <Button bg="" cursor="pointer" onClick={() => setlist(false)}>
            <BsGrid />
          </Button>

        </Box>
        <LandingPage setCount={setCount} open={open} list={list} userinfo={userinfo} showLoader={showLoader} data={data} setUserInfo={setUserInfo} setPageName={setPageName} setFilterLoader={setFilterLoader} />
      </Box>





    </div>

  )
}
