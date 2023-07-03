import React, { useState } from 'react'
import "../../Style/Leftbar.css"

import FormControlLabel from '@mui/material/FormControlLabel';
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
import { SiMicrosoftexcel } from 'react-icons/si';
import { Box, Button, Divider, Flex, Image, Input, Text, background, useColorModeValue } from '@chakra-ui/react'
import { GiStopwatch } from 'react-icons/gi';
import { MdDeleteOutline, MdOutlineVerified } from 'react-icons/md';
import { AiFillApi, AiFillDollarCircle, AiFillGift } from 'react-icons/ai';
import { DiOpensource } from 'react-icons/di';
import { BsClockHistory, BsTagFill } from 'react-icons/bs';



export const Leftbar = ({ open, setUserInfo, setPageName, setFilterLoader }) => {







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

  let price = [
    {
      logo: <AiFillGift size={18} />,
      name: "Free"
    },
    {
      logo: <BsClockHistory size={18} />,
      name: "Freetrail"
    }
    ,
    {
      logo: <MdOutlineVerified size={18} />,
      name: "Freemium"
    },
    {
      logo: <AiFillDollarCircle size={18} />,
      name: "Paid"
    }

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
    ,
    {
      logo: <BsTagFill color="white" size={18} />,
      name: "deal"
    }

  ]



  const handleFilterchange = (e) => {

    const { value, checked, name } = e.target;

    if (checked && name === "integration") {

      setUserInfo((prev) => {
        return {
          ...prev,
          integration: [...prev.integration, value]
        }
      })
    }
    else if (checked && name === "price") {

      setUserInfo((prev) => {
        return {
          ...prev,
          price: [...prev.price, value]
        }
      })
    }

    else if (checked && name === "other") {

      setUserInfo((prev) => {
        return {
          ...prev,
          price: [...prev.price, value]
        }
      })
    }
    else {

      setUserInfo((prev) => {
        return {
          integration: prev.integration.filter((ele) => ele !== value),
          other: prev.price.filter((ele) => ele !== value),
          price: prev.price.filter((ele) => ele !== value)
        }
      })

    }
    setPageName("filter")
    setFilterLoader((prev) => !prev)
  }


  return (
    <Box className='sidebar' w={open ? "165px" : "64.5px"} >
      <Box className='scroll' paddingRight={open ? "15px" : "0"} paddingLeft={open ? "15px" : "0"} >
        <Flex alignItems="center" justifyContent={open ? "left" : "center"}>
          <Text maxW={open ? "" : "60%"} mt="10px" className="itext" fontSize="12px" fontWeight="400">
            Work with:
          </Text>
        </Flex>

        {
          data.map((el, i) => (
            <Flex
              key={i}
              w="100%"
            
              alignItems="center"
              className="innerbox"
              justifyContent={open ? "space-between" : "center"}
              fontSize="14px"
              px={1}  >


              <Flex alignItems="center" gap="10px"  >
                <Image boxSize="20px" src={el.logo} />
                {
                  open ? <Text >{el.name}</Text> : ""
                }

              </Flex>

              {open ? <input type="checkbox" name="integration" value={el.name} onChange={handleFilterchange} /> : ""}







            </Flex>
          ))
        }

        <Divider orientation='horizontal' border="1px solid #E6E6E6" w="98%" backgroundColor="grey" m="auto" mt="15px" />

        <Box>
          <Flex alignItems="center" justifyContent={open ? "left" : "center"}>
            <Text mt="10px" fontSize="12px" fontWeight="400">
              Price
            </Text>
          </Flex>
          {
            price.map((el, i) => (
              <Flex
                key={i}
                w="100%"


                alignItems="center"
                m="auto"
                mt="10px"
                justifyContent={open ? "space-between" : "center"}
                fontSize="14px"
                px={1}  >


                <Flex background={open ? "rgba(0, 41, 78, 0.1)" : ""} px="6px" borderRadius="3px" alignItems="center" gap="10px" mb="10px" >
                  <Box>
                    {el.logo}
                  </Box>
                  {
                    open ? <Text >{el.name}</Text> : ""
                  }

                </Flex>

                {open ? <input name="price" value={el.name} onChange={handleFilterchange} type="checkbox" /> : ""}

              </Flex>
            ))
          }
        </Box>
        <Divider orientation='horizontal' border="1px solid #E6E6E6 " w="98%" backgroundColor="grey" m="auto" mt="15px" />
        <Box>

          <Flex alignItems="center" justifyContent={open ? "left" : "center"}>
            <Text mt="10px" fontSize="12px" fontWeight="400">
              Other:
            </Text>
          </Flex>
          {
            other.map((el, i) => (
              <Flex
                key={i}
                w={open ? "140px" : "40px"}


                alignItems="center"
                m="auto"
                mt="7px"
                justifyContent={open ? "space-between" : "center"}
                fontSize="14px"
                px={1}  >


                <Flex bg={el.name == "deal" ? "black" : ""} color={el.name == "deal" ? "white" : ""} borderRadius={el.name == "deal" ? "5px" : "3px"} paddingRight={open ? "25px" : ""} px={2} py={1} alignItems="center" mb="5px">
                  <Box >{el.logo}</Box>
                  {
                    open ? <Text >{el.name}</Text> : ""
                  }

                </Flex>

                {open ? <input name="other" value={el.name} onChange={handleFilterchange} type="checkbox" /> : ""}








              </Flex>
            ))
          }


        </Box>


        <Flex mt="px" w="100%" color="black" alignItems="center" justifyContent="center">
          <Button padding="10px" gap="7px" bg="white" borderRadius={open ? "50px" : "7px"} mt="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <MdDeleteOutline size="18px" />
            {
              open ? "Clear" : ""
            }

          </Button>
        </Flex>






      </Box>
    </Box>
  )
}
