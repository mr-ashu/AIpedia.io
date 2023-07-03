import React, { useEffect, useRef, useState } from 'react'
import { BsGrid } from 'react-icons/bs';
import { CgSortAz } from 'react-icons/cg'
import { ImList2 } from 'react-icons/im'
import style from "../../Style/Subnav.module.css"
import { Box, Button, Divider, Flex, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import filter from "../../Utils/Filter.svg"
import { LandingPage } from '../../Pages/LandingPage';
import { Leftbar } from './LeftBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Sort } from './Sort';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';


let image = [
  "Image editing", "Image generator", "Background removal", "Buy-Sell AI Image", "Image generator", "Image editing", "2D-to-3D", "Image-to-code", "AI Art gallery", "Ad creative", "Image-To-Video", "Background removal", "Logo Design", "Product design", "Design tool", "NFTs", " Anime"


]

let audio = [
  "Audio sample", "Audio editing ", "Text-to-speech", "Dubbing/Translator", "Voice generator", "Podcast", "Audio/Video Transcription"
]
let td = [
  "3D modeling", "VR/AR", "2D-to-3D", "Motion capture"
]

let writing = [
  "Content creating",
  "Writing tool",
  "Copywriting",
  "Story generator",
  "Education",
  "Learning tool",
  "Books",
  "Formula generator",
  "Search engine",
  "Content creation"

]


let video = [
  "Video creation",
  "Video editing",
  "Reel/TikTok/Shorts",
  "Image-To-Video",
  "Motion capture",
  "Live Streaming"
]


let business = [
  "Sales",
  "Marketing",
  "SEO",
  "Career",
  "Resume/CV",
  "Data management",
  "Task management",
  "Risk Management",
  "Quality management",
  "Customer service",
  "Data analysis",
  "Analytics",
  "Startup",
  "Human Resource",
  "Legal assistant",
  "Finance",
  "Productivity",


]

let b2 = [
  "Presentation",
  "Networking",
  "Email Assistant",
  "Chatbot builder",
  "Affiliate",
  "SEO",
  "Business idea",
  "Email Assistant",
  "Research",
  "E-commerce"
]

let bot = [
  "AI Model",
  "Chatbot",
  "AI Detector",
  "Virtual assistant"
]

let developer = [
  "Code assistant",
  "No-code/Low-code",
  "UI/UX Design",
  "Web/App Development",
  "Chatbot builder"
]

let other = [
  "AI Community",
  "Famous figure",
  "Fun",
  "Children",
  "Prompt",
  "Gift ideas",
  "Name generator",
  "Self Improvement",
  "Experiment",


]

let o2 = [
  "Apps store",
  "Sports",
  "Quiz",
  "Messaging",
  "Health",
  "Social Media",
  "Recipe / Food",
  "Science"
]



let arr=[]

export const SubNavbar = () => {
  const [list, setlist] = useState(false);

  const [open, setopen] = useState(false)
 
  // ------------------------------
  const positionRef = React.useRef(0);

  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [openCat, setOpenCat] = useState(false);
  const [cat,setcat] = useState([]);
  const { home_page_loading } = useSelector((state) => state.spaceReducer);
  const [pageName, setPageName] = useState("");
  const [FilterLoader, setFilterLoader] = useState(false);
  const [sort, setSort] = useState("");
  const [sortLoader, setSortLoader] = useState();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const [userinfo, setUserInfo] = useState({
    integration: [],
    price: [],
    other: []
  });

 

  const getData = async (page) => {
    setShowLoader(true);
    let payload = {};
    if (userinfo.price.length > 0) {
      payload.price = userinfo.price;
    }
    if (userinfo.integration.length > 0) {
      payload.integration = userinfo.integration;
    }

    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/data/get?sort=${sort}&page=${page}`,
        payload
      );
      setData((prev) => [...prev, ...res.data]);
      setShowLoader(false);
    } catch (err) {
      setShowLoader(false);
      console.log(err);
    }
  };


  const handlecat=(el,i)=>{
    
       arr.push(el)
    localStorage.setItem("cat",JSON.stringify(arr))
       
     
  }

  const removeItem=(el,i)=>{
       
      arr.splice(i,1)
      
     localStorage.setItem("cat",JSON.stringify(arr))

   
  }


  useEffect(()=>{
        let x=JSON.parse(localStorage.getItem("cat"))||[]
        setcat(x)

  },[cat])
 


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




 

  return (
    <div  >

      <Box bg={useColorModeValue("#FFFFFF", "#383838")} className={style.subnav} fontFamily="Segoe UI" >

       
            <Flex justifyContent="space-between" alignItems="center"  >
              <Flex alignItems="center" gap="20px">

                <Flex alignItems="center" justifyContent="space-between" w={open ? "148px" : ""}>
                  <Image ml="5px" cursor="pointer" onClick={() => setopen(!open)} src={filter} />
                  {
                    open ? <Flex onClick={() => setopen(!open)} cursor="pointer" alignItems="center" gap="22px" justifyContent="space-between" >
                      <Text fontFamily="Segoe UI" fontWeight="600" letterSpacing="4px">Filter</Text>
                      <ChevronLeftIcon cursor="pointer" /></Flex> : ""
                  }
                </Flex>



                <Box ml={open?"":"40px"} >
                  <Menu bg={useColorModeValue("white", "#464444")}>
                    <MenuButton
                      px={4}
                      py={1}

                      borderRadius='2px'
                      borderWidth='1px'
                      _hover={{ bg:""  }}
                 
                    >
                      Category <ChevronDownIcon />
                    </MenuButton>
                    <MenuList bg={useColorModeValue("white", "#2C2C2C")}   className={style.menulist} overflow="auto" whiteSpace="nowrap"  >

                      <Flex>

                        <Box>
                          <MenuItem bg="" fontWeight="bold">Image</MenuItem>
                          {

                            image.map((el,i) => (
                              <Box  key={i} >

                                <MenuItem bg="" 
                                onClick={()=> handlecat(el,i) }
                                
                                >{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>


                        <Box>
                          <MenuItem bg="" fontWeight="bold">Audio</MenuItem>
                          {

                            audio.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                          <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                          <MenuItem bg="" fontWeight="bold">3D</MenuItem>
                          {

                            td.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>
                        <Box>
                          <MenuItem bg="" fontWeight="bold">Writing</MenuItem>
                          {

                            writing.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                          <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                          <MenuItem  bg="" fontWeight="bold">Video</MenuItem>
                          {

                            video.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) }  bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>

                        <Box>
                          <MenuItem bg="" fontWeight="bold">Business</MenuItem>
                          {

                            business.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>

                        <Box>

                          {

                            b2.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                          <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                          <MenuItem bg="" fontWeight="bold">AI BOT</MenuItem>
                          {

                            bot.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>


                        <Box>
                          <MenuItem bg="" fontWeight="bold">Developer tools</MenuItem>
                          {

                            developer.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                          <Divider w="90%" m="auto" mt="10px" mb="10px" border="1px solid" />
                          <MenuItem bg="" fontWeight="bold">Other</MenuItem>
                          {

                            other.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>

                        <Box>
                          {

                            o2.map((el,i) => (
                              <Box  key={i} >
                                <MenuItem  onClick={()=> handlecat(el,i) } bg="">{el}</MenuItem>

                              </Box>

                            ))

                          }
                        </Box>


                      </Flex>

 

                    </MenuList>
                  </Menu>
                </Box>

                  <Box position="relative"  className={style.xscrollbox} >
             
                    <Flex position="relative"  alignItems="center" gap="15px" h="100%" overflowX={"scroll"} whiteSpace={"nowrap"} className={style.xscroll}>
                        {
                          cat?.map((el,i)=>(
                            <Flex cursor="pointer" py={1} px={2} justifyContent="center" borderRadius="10px" alignItems="center" gap="10px"  bg="rgba(118, 161, 191, 0.3)">
                              <Text>{el}</Text>
                               <AiOutlineClose onClick={()=>removeItem(el,i) }/>
                            </Flex>
                          ))
                        }
                      </Flex>
                   
                  </Box>

              </Flex>

              <Flex className={style.margin} alignItems="center" >
                <Button bg="" cursor="pointer" onClick={() => setlist(true)}>
                  <ImList2 fontWeight="300" />

                </Button>

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
           <LandingPage open={open} list={list} userinfo={userinfo} showLoader={showLoader} data={data}  setUserInfo={setUserInfo} setPageName={setPageName} setFilterLoader={setFilterLoader} setDeleteLoading={setDeleteLoading}/>
       </Box>

      



    </div>

  )
}
