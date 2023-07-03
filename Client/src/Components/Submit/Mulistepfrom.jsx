import React, { useState } from 'react';
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,

    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Text,
    Divider,
    Image,
    Stack,
} from '@chakra-ui/react';
import style from "../../Style/Submit.module.css"
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import notification from '../Toast';
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Form3 } from './Form3';
import { Form4 } from './Form4';

// userID:    

// tool_url:  
// dasboard_link:  

// tool_name:  
// tagline: 

// description: 
// key_feature: 
// social_media: 
// categories:  
// integration: 
// other: 
// price:  
// price_amount: 

// promo_code: 
// offer:  
// expire_date: 

// thumbnail:  
// cover_image: 
// gallery: 
// youtube_url: 
// tool_own: 
// verify: 


let underCategories = [
    { value: "3D modeling", label: "3D modeling" },
    { value: "Content creating", label: "Content creating" },
    { value: "Writing tool", label: "Writing tool" },
    { value: "Copywriting", label: "Copywriting" },
    { value: "Image editing", label: "Image editing" },
    { value: "Image generator", label: "Image generator" },
    { value: "Background removal", label: "Background removal" },
    { value: "Art", label: "Art" },
    { value: "AI Model", label: "AI Model" },
    { value: "Code assistant", label: "Code assistant" },
    { value: "No-code/Low-code", label: "No-code/Low-code" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Web/App Development", label: "Web/App Development" },
    { value: "Customer service", label: "Customer service" },
    { value: "AI Community", label: "AI Community" },
    { value: "Virtual Assistant", label: "Virtual Assistant" },
    //    {value: "VR/AR",
    //    {value: "Buy-Sell AI Image",
    //    {value: "Image generator",
    //    {value:"Image editing",

    //    {value: "2D-to-3D",
    //    {value: "Image-to-code",
    //    {value: "AI Art gallary",
    //    {value: "SEO",
    //    {value: "Email Assistant",
    //    {value:"Sales",
    //    {value:"Marketing",
    //    {value:"Ad creative",
    //    {value: "Story generator",
    //    {value:"Gaming",
    //    {value: "Game development",
    //    {value: "Famous figure",
    //    {value: "Fun",
    //    {value: "Children",
    //    {value: "Prompt",
    //    {value: "Education",
    //    {value:"Learning tool",
    //     {value:"Search engine",
    //     {value: "Science",
    //     {value: "Research",
    //     {value: "Books",
    //     {value: "Affiliate",
    //     {value:"AI Detector",
    //     {value: "Books",
    //     {value:"Formula generator",
    //     {value:"Music",
    //     {value:"Audio sample",
    //     {value:"Audio editing",
    //     {value: "Video creation",
    //     {value:"Text-to-speech",
    //     {value:"Dubbing/Translator",
    //     {value: "Video editing",
    //     {value:"Voice generator",
    //     {value:"Image-To-Video",
    //     {value:"Podcast",


    //     {value: "Background removal",
    //     {value:"Audio/Video Transcription",
    //     {value:"Reel/TikTok/Shorts",
    //     {value:  "Social Media",
    //     {value: "E-Commerce",
    //     {value: "Data management",
    //     {value:"Task management",
    //     {value: "Risk Management",
    //     {value: "Quality management",
    //     {value:"Customer service",
    //     {value: "Data analysis",
    //     {value:"Analytics",
    //     {value: "Startup",
    //     {value: "Chatbot",
    //     {value: "Chatbot builder",
    //     {value: "Anime",
    //     {value: "Design tool",
    //     {value:"Product design",
    //     {value: "Business idea",
    //     {value: "Gift ideas",
    //     {value: "Career",
    //     {value: "Human Resource",
    //     {value: "Resume/CV",
    //     {value: "Legal assistant",
    //     {value: "Finance",
    //     {value: "Name generator",
    //     {value:"Logo Design",
    //     {value: "Recipe/Food",
    //     {value: "Self Improvement",
    //     {value: "Experiment",
    //     {value: "Apps store",
    //     {value: "Sports",
    //     {value: "Live Streaming",
    //     {value: "Motion capture",
    //     {value: "Quiz",
    //     {value: "Messaging",
    //     {value: "Presentation",
    //     {value:"Networking",
    //     {value:"NFTs",
    //     {value: "Productivity",
];
export default function Multistep() {
    const toast = useToast();
    const [step, setStep] = useState(1);

   

    const [integration, setIntegration] = useState([]);
    const [categories, setCategories] = useState([]);
    const [other, setothers] = useState([])
    const [ thumbnail,setthumbnail ] = useState("")
    const [ cover_image,setcoverimg ] = useState("")
    const [gallery, setgallery] = useState([])
    const [ tool_own,  setTool] = useState(false)

   
    const [data, setData] = useState({
        tool_url: "",
        dashboard_link: "",
        tool_name: "",
        tagline: "",
        description: "",
        key_feature: "",
        social_media: "",
        prices: "",
        price_amount: "",
        promo_code: "",
        offer: "",
        expire_date: "",
        youtube_url: "",
      


    });


   
 



    const userData = useSelector((state) => state.userReducer.loginData);


    const handlechange = (e) => {
        
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };




    const handleSubmitTool = async () => {
        try {
            let payload = {
                ...data,
                integration,
                categories,
                other,
                thumbnail,
                cover_image,
                gallery,
                tool_own

            };
            const token = userData.data;
            console.log(payload);
            const { data: res } = await axios.post(
                `${process.env.REACT_APP_API}/submit/add`,
                payload,
                { headers: { token } }
            );

            notification("success", res.msg);
        } catch (error) {

        }
    };


    return (



        <Box className={style.submitform} mt="20px" >
            <Stack className={style.left}>
                <Box w="100%" fontWeight="600"   >
                    <Text mb="10px" w="fit-content" onClick={() => {
                        setStep(1);

                    }} cursor="pointer" p="5px" borderRadius="3px" color={step == 1 ? "white" : ""} bg={step == 1 ? "#3B89B6" : ""} >Basic Information</Text>
                    <Text mb="10px" w="fit-content" onClick={() => { setStep(2) }} cursor="pointer" p="5px" borderRadius="3px" color={step == 2 ? "white" : ""} bg={step == 2 ? "#3B89B6" : ""} >Price & deal</Text>
                    <Text mb="10px" w="fit-content" onClick={() => {
                        setStep(3);

                    }} cursor="pointer" p="5px" borderRadius="3px" color={step == 3 ? "white" : ""} bg={step == 3 ? "#3B89B6" : ""}  >Media</Text>
                    <Text
                        mb="10px"
                        w="fit-content"
                        onClick={() => { setStep(4) }}
                        cursor="pointer"
                        p="5px"
                        borderRadius="3px"
                        color={step == 4 ? "white" : ""}

                        bg={step == 4 ? "#3B89B6" : ""} >Finish</Text>
                </Box>
            </Stack>
            <Stack className={style.right} fontSize="20px" fontWeight="400"  >
                <Box className={style.leftborder} w="100%"

                >

                    {step === 1 ? <Form1 
                    handlechange={handlechange} 
                    integration={integration} 
                    other={other} 
                    categories={categories}   
                    {...data} 
                    setCategories={setCategories} 
                    setIntegration={setIntegration} 
                    setOthers={setothers} 
                    underCategories={underCategories} 

                    /> : step === 2 ? <Form2 
                     handlechange={handlechange}
                    {...data}

                    /> : step === 3 ? <Form3 
                         setcoverimg={setcoverimg}
                         setgallery={setgallery}
                         setthumbnail={setthumbnail}
                         thumbnail={thumbnail}
                          gallery={gallery}
                         cover_image={cover_image}
                         handlechange={handlechange}
                         {...data}
                    /> : <Form4 

                    tool_own={tool_own}
                    setTool={setTool}
                    />}
                    <ButtonGroup mt="5%" w="100%">
                        <Flex w="100%" justifyContent="space-between">
                            <Box w="100%" textAlign="right">

                                <Button
                                    w="68px"
                                    mt="10px"
                                    color="white"
                                    borderRadius="4px"
                                    bg="#3B89B6"
                                    _hover={{ bg: "" }}
                                    display={step === 4 ? "none" : ""}

                                    onClick={() => {
                                        setStep(step + 1);

                                    }}

                                >
                                    Next
                                </Button>
                            </Box>
                            {step === 4 ? (
                                <Button
                                    w="193px"
                                    height="28px"
                                    mt="10px"
                                    color="white"
                                    _hover={{ bg: "" }}
                                    borderRadius="4px"
                                    bg="#3B89B6"
                                    onClick={handleSubmitTool}>
                                    Submit
                                </Button>
                            ) : null}
                        </Flex>
                    </ButtonGroup>
                </Box>
            </Stack>
        </Box>


    );
}