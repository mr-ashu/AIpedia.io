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

import Select from 'react-select';
import style from "../../Style/Submit.module.css"
import excel from "../../Utils/Spreadsheet_icon.svg"
import chatgpt from "../../Utils/ChatGPT.svg"
import vscode from "../../Utils/Vs code.svg"
import discord from "../../Utils/Discord.svg"
import figma from "../../Utils/Figma.svg"
import github from "../../Utils/Github.svg"
import mobile from "../../Utils/Mobile app.svg"
import slack from "../../Utils/Slack.svg"
import browser from "../../Utils/Browser Extension.svg"
import Wordpress from "../../Utils/Wordpress.svg"
import { useToast } from '@chakra-ui/react';
import { Autocomplete, Avatar, Checkbox, TextField } from '@mui/material';
import { DiOpensource } from 'react-icons/di';
import { AiFillApi, AiFillDollarCircle, AiFillUnlock } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import axios from 'axios';
import notification from '../Toast';
import { FileModal } from '../Submit/Modal';
import background from "../../Utils/Rectanglebg.svg"
import { BsClockHistory, BsFillGiftFill } from 'react-icons/bs';

let data = [
    {
        logo: excel,
        name: "Sheet/Excel"
    },
    {
        logo: chatgpt,
        name: "Sheet/Excel"
    },
    {
        logo: vscode,
        name: "VS Code"
    },
    {
        logo: github,
        name: "Github"
    },
    {
        logo: slack,
        name: "Slack"
    },
    {
        logo: mobile,
        name: "Mobile app"
    },
    {
        logo: Wordpress,
        name: "Wordpress"
    },
    {
        logo: figma,
        name: "Figma"
    },
    {
        logo: browser,
        name: "Browser extension"
    },

]

let other = [
    {
        logo: <AiFillApi size={18} />,
        name: "API"
    },
    {
        logo: <DiOpensource size={18} />,
        name: "Open Source"
    }


]



const Form1 = ({ basic, underCategories, handlebasic, setCategories, setIntegration, setOthers }) => {
    const [show, setShow] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);



    return (
        <Box w="100%">

            <FormControl mt="15px"  >
                <FormLabel >
                    Link to the tool
                </FormLabel>
                <Input
                    value={basic.tool_link}
                    name="tool_link"
                    onChange={handlebasic}
                    borderRadius="4px" w="100%" />
            </FormControl>
 

            <FormControl mt="15px">

                <Flex alignItems="center" justifyContent="space-between">
                    <FormLabel  >
                        Name of the tool
                    </FormLabel>
                    <Text fontSize="14px" fontWeight="400">0/40</Text>
                </Flex>

                <Input

                    value={basic.tool_name}
                    name="tool_name"
                    onChange={handlebasic}
                    borderRadius="4px" placeholder="AI Pedia " />
            </FormControl>



            <FormControl mt="15px">
                <Flex alignItems="center" justifyContent="space-between">
                    <FormLabel  >
                        Tagline
                    </FormLabel>
                    <Text fontSize="14px" fontWeight="400">0/60</Text>
                </Flex>
                <InputGroup  >
                    <Input
                        value={basic.tagline}
                        name="tagline"
                        onChange={handlebasic}
                        borderRadius="4px" placeholder='Make your tool stand out with a snappy tagline that captures its essence' />

                </InputGroup>
            </FormControl>

            <Flex alignItems="center" gap="30px" mt="15px">
                <Button color="white" bg="#3B89B6" _hover={{bg:"none"}}>
                    Save
                </Button>

                <Text>Cancel</Text>
            </Flex>

            <FormControl mt="15px" >
                <Flex alignItems="center" justifyContent="space-between">
                    <FormLabel  >
                        Description
                    </FormLabel>
                    <Text fontSize="14px" fontWeight="400">250 characters max</Text>
                </Flex>
                <Textarea

                    type="textArea"
                    rows={5}
                    value={basic.tool_description}
                    name="tool_description"
                    onChange={handlebasic}
                    borderRadius="4px" placeholder="Description of the tool" />

            </FormControl>

            <FormControl mt="15px"  >
                <FormLabel    >
                    Key features
                </FormLabel>
                <Textarea

                    type="textArea"
                    rows={5}
                    value={basic.key_feature}
                    name="key_feature"
                    onChange={handlebasic}

                    borderRadius="4px" placeholder="Write key features your tool provides to the users in 5 points" />

            </FormControl>
            <FormControl mt="15px"  >
                <FormLabel    >
                    Social Media Link
                </FormLabel>
                <Input

                    value={basic.websile_url}
                    name="website_url"
                    onChange={handlebasic}

                    borderRadius="4px" placeholder="https://..." />

            </FormControl>

            <FormControl mt="15px" >
                <FormLabel   >
                    Select categories (Max 2 categories)
                </FormLabel>

                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={underCategories}
                  
                    onChange={(e) => setCategories(e)}

                />

            </FormControl>
            <FormControl mt="15px" >
                <FormLabel   >
                    Integration
                </FormLabel>
                <Box className={style.integration}>
                    {
                        data?.map((el) => (
                            <Flex


                                justifyContent="space-between"
                                border="1.3px solid #CCCCCC"
                                alignItems="center"
                                py={1}
                                borderRadius="5px"
                                fontSize="14px"
                                px={1}>



                                <Flex alignItems="center" gap="10px" >
                                    <Image boxSize="22px" src={el.logo} />
                                    {
                                        <Text >{el.name}</Text>
                                    }

                                </Flex>

                                <input  onChange={(e) => e.target.value=="on"?setIntegration(el.name):""} type="checkbox" />


                            </Flex>
                        ))
                    }
                </Box>

            </FormControl>

            <FormControl mt="15px" >
                <FormLabel   >
                    Others
                </FormLabel>

                <Box display="flex" gap="20px">

                    {
                        other?.map((el) => (
                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                border="1.3px solid #CCCCCC"
                                gap="20px"
                                py={1}
                                borderRadius="5px"
                                fontSize="14px"
                                px={1}>



                                <Flex alignItems="center" gap="10px" >
                                    <Box>{el.logo}</Box>
                                    {
                                        <Text >{el.name}</Text>
                                    }

                                </Flex>

                                <input value={el.name} name={el.name} onChange={(e) => setOthers(e.target.value)} type="checkbox" />

                            </Flex>
                        ))
                    }


                </Box>
            </FormControl>






        </Box>
    );
};

const Form2 = () => {
    return (


        <Box >
            <Text fontWeight="400" lineHeight="24px" fontSize="20px">Price</Text>
            <Flex gap="20px" mt="20px" >
                <Box w="fit-content"><input type='checkBox' /></Box>
                <Box>
                   <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                   <BsFillGiftFill/>
                    <Text>  Free</Text>
                   </Flex>
                    
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify">If you choose to list your tool as "Free," it means that users can access and use your tool without having to pay any fee.</Text>
                </Box>

            </Flex>
            <Flex  gap="20px" mt="15px"  >
                <Box w="fit-content"><input type='checkBox' /></Box>
                <Box>
                <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                   <BsClockHistory/>
                    <Text> Freetrial</Text>
                   </Flex>
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify"  >If you choose to list your tool as "Free trial," it means users can access and use the tool without paying any fees for limited period . It allows individuals or organizations to experience the full functionality and features of the product or service for a specified duration, typically without any financial commitment.</Text>
                </Box>

            </Flex>
            <Flex gap="20px" mt="15px" >
                <Box><input type='checkBox' /></Box>
                <Box>
                <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                   <AiFillUnlock/>
                    <Text> Freemium</Text>
                   </Flex>
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify" >If you choose to list your tool as "Freemium," it means that you are offering both a free and a paid version of your tool.</Text>
                </Box>

            </Flex>
            <Flex gap="20px" mt="15px" >
                <Box w="fit-content"><input type='checkBox' /></Box>
                <Box>
                <Flex alignItems="center" py={1} fontSize="13px" lineHeight="16px" fontWeight="400" w="fit-content" px={2} borderRadius="3px" bg="rgba(0, 41, 78, 0.2)" gap="5px">
                   <AiFillDollarCircle/>
                    <Text>Paid</Text>
                   </Flex>
                    <Text mt="10px" fontSize="14px" lineHeight="16px" fontWeight="400" w="fit-content" textAlign="justify"  >If you choose to list your tool as "Paid," it means that users will need to pay a fee to access and use your tool.</Text>
                </Box>

            </Flex>

            <Divider mt="30px" mb="30px" border="1px solid" />

            <Text fontSize="20px" fontWeight="400" lineHeight="24px">Price amount </Text>

            <Flex gap="20px" mt="20px">
                <Text fontSize="14px" fontWeight="400" lineHeight="24px">Starting from </Text>
                <Input w="84px" placeholder='$' />
            </Flex>

            <Divider mt="30px" mb="30px" border="1px solid" />

            <Text fontSize="20px" fontWeight="400" lineHeight="24px">Deals</Text>

            <Flex gap="20px" mt="20px" fontSize="14px" fontWeight="400" lineHeight="24px" alignItems="center">
                <FormControl mt="15px" >
                    <FormLabel  >
                        Promo code
                    </FormLabel>
                    <Input borderRadius="3px" placeholder="AIPEDIA30" />

                </FormControl>

                <FormControl mt="15px"  >
                    <FormLabel  >
                        What is the offer?
                    </FormLabel>
                    <Input borderRadius="3px" placeholder="30% discount on student plan" />

                </FormControl>




            </Flex>
            <FormControl mt="15px" >
                <FormLabel  >
                    Expiration Date
                </FormLabel>
                <Input borderRadius="3px" placeholder="Expiration Date" />

            </FormControl>






        </Box>











    );
};

const Form3 = () => {

 

    return (
        <>

            <Box>
                <Text fontSize="18px" lineHeight="24.5px" fontWeight="400">Thumbnail</Text>
                <Flex mt="15px" gap="30px">
                    <Box w="103px" h="103px" borderRadius="3px" border="1px dotted" ></Box>
                    <Box textAlign="center">
                       <Box>
                       <FileModal/>
                       </Box>
                        <Text>
                            or
                        </Text>
                        <Text fontSize="11px" lineHeight="20px" fontWeight="400" color="#3B89B6">Paste a URL</Text>
                    </Box>
                </Flex>

                <Text mt="15px" fontSize="12px" lineHeight="20px" fontWeight="400">Recommended size:100x100| JPG, PNG, GIF. Max size: 1.50MB</Text>
                <Divider mt="30px" mb="30px" border="1px solid" />
                <Text mb="15px" fontSize="18px" lineHeight="24.5px" fontWeight="400">Cover image</Text>
                <Text mt="15px" fontSize="12px" lineHeight="20px" fontWeight="400">This image will be used as preview of your tool</Text>

                <Box mt="10px" backgroundImage={background} alignItems="center" justifyContent="center" textAlign="center" border="1px dotted" width="70%" height="345px" > </Box>

                <Text mt="10px">Change</Text>

                <Divider mt="60px" mb="30px" border="1px solid" />

                <Text fontSize="18px" lineHeight="24.5px" fontWeight="400">Gallery</Text>

                <Text fontSize="14px" lineHeight="32px" fontWeight="400">Upload up to 3 images showcasing your tool's features and benefits.</Text>

                <Flex gap="15px" mt="10px">
                    <Box w="155px" h="110px" border="1px solid"></Box>
                    <Box w="155px" h="110px" border="1px solid"></Box>
                    <Box w="155px" h="110px" border="1px solid"></Box>
                </Flex>
                <Text mt="10px">Change</Text>
                <Divider mt="30px" mb="30px" border="1px solid" />

                <Text fontSize="18px" lineHeight="32px" fontWeight="400">YouTube video</Text>

                <Text fontSize="14px" lineHeight="32px" fontWeight="400">Provide us with your YouTube video link, and we will embed it on your tool's page</Text>
                <FormControl   >
                    <FormLabel fontSize="14px" lineHeight="24px" fontWeight="400">
                        Link to the video
                    </FormLabel>
                    <Input />

                </FormControl>
            </Box>
        </>
    );
};

 

export default function Createform() {
    const toast = useToast();
    const [step, setStep] = useState(1);

    const underCategories = [
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

    const [integration, setIntegration] = useState([]);
    const [categories, setCategories] = useState([]);
    const [others, setothers] = useState([])
    const [basic, setbasic] = useState({
        tool_link: "",
        affillate_dashboard: "",
        tool_name: "",
        tagline: "",
        tool_description: "",
        websile_url: "",
        key_feature: "",

    });

    const [price, setprice] = useState({
        price_cate: "",
        price: "",
        staring_price: "",
        promo: "",
        offer: "",
        expire_date: ""


    });

    const [media, setmedia] = useState({
        thumbnail: "",
        cover_image: "",
        gallery: "",
        youtube_video: ""

    });

    const [finish, setfinish] = useState({
        tool_own: ""

    });


    const userData = useSelector((state) => state.userReducer.loginData);
    const [error, setError] = useState("");

    const handlebasic = (e) => {
        setbasic({
            ...basic,
            [e.target.name]: e.target.value,
        });
    };


   

    const handleprice = (e) => {
        setprice({
            ...price,
            [e.target.name]: e.target.value,
        });
    };

    const handlemedia = (e) => {
        setmedia({
            ...media,
            [e.target.name]: e.target.value,
        });
    };

    const handlefinish = (e) => {
        setfinish({
            ...finish,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmitTool = async () => {
        try {
            let payload = {
                ...basic,
                ...price,
                ...media,
                ...finish,
                integration,
                categories,

            };
            const token = userData.data;
            console.log(payload);
            // const { data: res } = await axios.post(
            //     `${process.env.REACT_APP_APP_API}/submit/add`,
            //     payload,
            //     { headers: { token } }
            // );

            // notification("success", res.msg);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);

                notification("error", error.response.data.message);
            }
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
 
                </Box>
            </Stack>
            <Stack className={style.right} fontSize="20px" fontWeight="400"  >
                <Box className={style.leftborder} w="100%"

                >

                    {step === 1 ? <Form1 basic={basic} setbasic={setbasic} handlebasic={handlebasic} underCategories={underCategories} setCategories={setCategories} setIntegration={setIntegration} setOthers={setothers} /> : step === 2 ? <Form2 /> : step === 3 ? <Form3 /> : <Form3 />}
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
                                    display={step == 3 ? "none" : ""}

                                    onClick={() => {
                                        setStep(step + 1);

                                    }}

                                >
                                    Next
                                </Button>
                            </Box>
                            {step === 3 ? (
                                <Button
                                    w="193px"
                                    height="28px"
                                    mt="10px"
                                    color="white"
                                    _hover={{ bg: "" }}
                                    borderRadius="4px"
                                    bg="#3B89B6"
                                    onClick={() => {
                                     
                                    }}>
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