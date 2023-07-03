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
import { DiOpensource } from 'react-icons/di';
import { AiFillApi, AiFillDollarCircle, AiFillUnlock } from 'react-icons/ai';
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
import { useEffect, useState } from 'react';

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

let otherdata = [
    {
        logo: <AiFillApi size={18} />,
        name: "API"
    },
    {
        logo: <DiOpensource size={18} />,
        name: "Open Source"
    }


]

export  const Form1 = ({  integration,other,tool_url,dashboard_link,tool_name,tagline,description,key_feature,social_media, handlechange, categories,setCategories, setIntegration, underCategories, setOthers }) => {
   
         let [c,setc]=useState([])
 

    
    return (
        <Box w="100%">

            <FormControl mt="15px"  >
                <FormLabel >
                    Link to the tool
                </FormLabel>
                <Input
                    value={tool_url}
                    name="tool_url"
                    onChange={handlechange}
                    borderRadius="4px" w="100%" />
            </FormControl>

            <FormControl mt="15px"   >
                <FormLabel htmlFor="email"  >
                    Affiliate dashboard link
                </FormLabel>
                <Input
                    value={dashboard_link}
                    name="dashboard_link"
                    onChange={handlechange}

                    borderRadius="4px" />

            </FormControl>

            <FormControl mt="15px">

                <Flex alignItems="center" justifyContent="space-between">
                    <FormLabel  >
                        Name of the tool
                    </FormLabel>
                    <Text fontSize="14px" fontWeight="400">0/40</Text>
                </Flex>

                <Input

                    value={tool_name}
                    name="tool_name"
                    onChange={handlechange}
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
                        value={tagline}
                        name="tagline"
                        onChange={handlechange}
                        borderRadius="4px" placeholder='Make your tool stand out with a snappy tagline that captures its essence' />

                </InputGroup>
            </FormControl>
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
                    value={description}
                    name="description"
                    onChange={handlechange}
                    borderRadius="4px" placeholder="Description of the tool" />

            </FormControl>

            <FormControl mt="15px"  >
                <FormLabel    >
                    Key features
                </FormLabel>
                <Textarea

                    type="textArea"
                    rows={5}
                    value={key_feature}
                    name="key_feature"
                    onChange={handlechange}

                    borderRadius="4px" placeholder="Write key features your tool provides to the users in 5 points" />

            </FormControl>
            <FormControl mt="15px"  >
                <FormLabel    >
                    Social Media Link
                </FormLabel>
                <Input
                    type='text'
                    value={social_media}
                    name="social_media"
                    onChange={handlechange}

                    borderRadius="4px" placeholder="https://facebook.com" />

            </FormControl>

            <FormControl mt="15px" >
                <FormLabel   >
                    Select categories (Max 2 categories)
                </FormLabel>

                <Select
                    value={c}
                    
                    closeMenuOnSelect={false}
                    isMulti
                    options={underCategories}
                    onChange={(e) => {
                        setc(e)
                        e.map((el)=>{
                           return setCategories([...categories,el.value])
                        })
                      
                    }}
                   isOptionDisabled={() => categories.length >= 2}
      
                />

            </FormControl>
            <FormControl mt="15px" >
                <FormLabel   >
                    Integration
                </FormLabel>
                <Box className={style.integration}>
                    {
                        data?.map((el,i) => (
                            <Flex

                               key={i}
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

                                <input value={el.name} onChange={(e) => setIntegration([...integration,e.target.value])} type="checkbox" />


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
                        otherdata?.map((el,i) => (
                            <Flex
                              key={i}
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

                                <input value={el.name}  onChange={(e) => setOthers([...other,e.target.value])} type="checkbox" />

                            </Flex>
                        ))
                    }


                </Box>
            </FormControl>






        </Box>
    );
};