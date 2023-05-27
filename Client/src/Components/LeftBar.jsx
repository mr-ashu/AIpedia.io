import React, { useState } from 'react'
import "../Style/Leftbar.css"
 
import FormControlLabel from '@mui/material/FormControlLabel';
import excel from "../Utils/Spreadsheet_icon.svg"
import chatgpt from "../Utils/ChatGPT.svg"
import vscode from "../Utils/Vs code.svg"
import discord from "../Utils/Discord.svg"
import figma from "../Utils/Figma.svg"
import github from "../Utils/Github.svg"
import mobile from "../Utils/Mobile app.svg"
import slack from "../Utils/Slack.svg"
import browser from "../Utils/Browser Extension.svg"
import Wordpress from "../Utils/Wordpress.svg"
import { SiMicrosoftexcel } from 'react-icons/si';
import { Box,   Divider,   Flex, Image, Text, background, useColorModeValue } from '@chakra-ui/react'
import { Checkbox } from '@mui/material';
export const Leftbar = ({ open }) => {

  const [value, setvalue] = useState("")
  console.log(value);
  const data = [
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
  return (
    <Box className='sidebar'>
      <div className='scroll'>
        {
          data.map((el) => (
            <Box  border="1.3px solid #CCCCCC" className="innerbox">


              <Flex alignItems="center" gap="5px" >
                <Box padding="4px" m={"auto"} alignItems={"center"} justifyContent="center"><Image boxSize="27px" w="100%" m="auto" src={el.logo} /></Box>
                {
                  open ? <Text>{el.name}</Text> : ""
                }

              </Flex>

              {
                open ? <Checkbox sx={{color:"grey"}}  label={el.name} value={el.name} onChange={(e) => setvalue(e.target.value)} size="small" /> : ""
              }




            </Box>
          ))
        }

        <Divider  orientation='horizontal' border ="1px solid " w="100%" backgroundColor="grey" mt="15px"/>
      </div>
    </Box>
  )
}
