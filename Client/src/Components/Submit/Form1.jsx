import {

    Box,

    Flex,
    FormControl,

    FormLabel,
    Input,

    InputGroup,
    Textarea,

    Text,

    Image,

} from '@chakra-ui/react';
import { DiOpensource } from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai';
import Select from 'react-select';
import style from "../../Style/Submit.module.css"
import excel from "../../Utils/Spreadsheet_icon.svg"
import chatgpt from "../../Utils/ChatGPT.svg"
import vscode from "../../Utils/Vs code.svg"

import figma from "../../Utils/Figma.svg"
import github from "../../Utils/Github.svg"
import mobile from "../../Utils/Mobile app.svg"
import slack from "../../Utils/Slack.svg"
import browser from "../../Utils/Browser Extension.svg"
import Wordpress from "../../Utils/Wordpress.svg"
import { useState } from 'react';

let data = [
    {
        logo: excel,
        name: "Sheet/Excel"
    },
    {
        logo: chatgpt,
        name: "ChatGPT(Plugin)"
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

export const Form1 = ({ works_with, others_features, setkey_features, URL, Title, Tagline, Description, key_features, social_media, setSocial_media, handlechange, Category, setCategory, setworks_with, underCategory, setothers_features }) => {

    let [c, setc] = useState([])

    const handleCheckboxChange = (e, name) => {
        const { name: checkboxName } = e.target;
        if (checkboxName === "others_features")
            if (e.target.checked) {

                setothers_features([...others_features, name]);
            } else {

                setothers_features(others_features.filter((item) => item !== name));
            }
        else if(checkboxName === "works_with") {
            if (e.target.checked) {

                setworks_with([...works_with, name]);
            } else {

                setworks_with(works_with.filter((item) => item !== name));
            }
        }
    };

    return (
        <Box w="100%">

            <FormControl mt="15px"  >
                <FormLabel >
                    Tool URL
                </FormLabel>
                <Input
                    value={URL}
                    name="URL"
                    onChange={handlechange}
                    borderRadius="4px" w="100%" />
            </FormControl>

            {/* <FormControl mt="15px"   >
                <FormLabel htmlFor="email"  >
                    Affiliate dashboard link
                </FormLabel>
                <Input
                    value={dashboard_link}
                    name="dashboard_link"
                    onChange={handlechange}

                    borderRadius="4px" />

            </FormControl> */}

            <FormControl mt="15px">

                <Flex alignItems="center" justifyContent="space-between">
                    <FormLabel  >
                        Name of the tool
                    </FormLabel>
                    <Text fontSize="14px" fontWeight="400">0/40</Text>
                </Flex>

                <Input

                    value={Title}
                    name="Title"
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
                        value={Tagline}
                        name="Tagline"
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
                    value={Description}
                    name="Description"
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
                    value={key_features.join('\n')}
                    name="key_features"
                    onChange={(e) => setkey_features(e.target.value.split('\n'))}

                    borderRadius="4px"
                    placeholder="Write key features your tool provides to the users in 5 points
                              
                            •  
                            •  
                            •  
                              "

                />

            </FormControl>
            <FormControl mt="15px"  >
                <FormLabel    >
                    Social Media Link
                </FormLabel>
                <Textarea
                    type='textArea'
                    rows={4}
                    value={social_media.join('\n')}
                    name="social_media"
                    onChange={(e) => setSocial_media(e.target.value.split('\n'))}

                    borderRadius="4px"
                    placeholder="Social media url
                            •  
                              " />

            </FormControl>

            <FormControl mt="15px" >
                <FormLabel   >
                    Select category (Max 2 Category)
                </FormLabel>

                <Select
                    value={c}

                    closeMenuOnSelect={false}
                    isMulti
                    options={underCategory}
                    onChange={(e) => {
                        setc(e)
                        e.map((el) => {
                            return setCategory([...Category, el.value])
                        })

                    }}
                    isOptionDisabled={() => Category.length >= 2}

                />

            </FormControl>
            <FormControl mt="15px" >
                <FormLabel   >
                    Works with
                </FormLabel>
                <Box className={style.integration}>
                    {
                        data?.map((el, i) => (
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

                                <input
                                    name='works_with'
                                    checked={works_with.includes(el.name)}
                                    onChange={(e) => handleCheckboxChange(e, el.name)}

                                    type="checkbox" />


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
                        otherdata?.map((el, i) => (
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

                                <input
                                    name='others_features'
                                    checked={others_features.includes(el.name)}
                                    onChange={(e) => handleCheckboxChange(e, el.name)}

                                    type="checkbox" />

                            </Flex>
                        ))
                    }


                </Box>
            </FormControl>






        </Box>
    );
};