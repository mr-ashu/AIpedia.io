import React  from 'react'
import "../../Style/Leftbar.css"

import excel from "../../Utils/Spreadsheet_icon.svg"
import chatgpt from "../../Utils/ChatGPT.svg"
import vscode from "../../Utils/Vs code.svg"

import figma from "../../Utils/Figma.svg"
import github from "../../Utils/Github.svg"
import mobile from "../../Utils/Mobile app.svg"
import slack from "../../Utils/Slack.svg"
import browser from "../../Utils/Browser Extension.svg"
import Wordpress from "../../Utils/Wordpress.svg"
import sopify from "../../Utils/sopify.svg"

import { Box, Button, Divider, Flex, Image, Text,  useColorModeValue } from '@chakra-ui/react'

import { MdDeleteOutline, MdOutlineVerified } from 'react-icons/md';
import { AiFillApi, AiFillDollarCircle, AiFillGift } from 'react-icons/ai';
import { DiOpensource } from 'react-icons/di';
import { BsClockHistory, BsTagFill } from 'react-icons/bs';


const data = [
  {
    logo: excel,
    name: "Sheet/Excel"
  },
  {
    logo: chatgpt,
    name: "ChatGPT (Plugins)"
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
    name: "Browser Extension"
  },
  {
    logo: sopify,
    name: "Shopify"
  },

]

let price = [
  {
    logo: <AiFillGift size={14} />,
    name: "Free"
  },
  {
    logo: <BsClockHistory size={14} />,
    name: "Free trial"
  }
  ,
  {
    logo: <MdOutlineVerified size={14} />,
    name: "Freemium"
  },
  {
    logo: <AiFillDollarCircle size={14} />,
    name: "Paid"
  }

]

let other = [
  {
    logo: <AiFillApi size={15} />,
    name: "API"
  },
  {
    logo: <DiOpensource size={15} />,
    name: "Open Source"
  }
   

]


export const Leftbar = ({ open, setCount, setUserInfo, setPageName, setFilterLoader }) => {
 


  const handleFilterchange = (e) => {

    let { value, checked, name } = e.target;

    if (checked && value) {
      setCount((pre) => pre + 1)
    }
    if (!checked) {
      setCount((pre) => pre - 1)
    }


    if (checked && name === "works_with") {

      setUserInfo((prev) => {

        return {

          ...prev,
          works_with: [...prev.works_with, value]
        }
      })
    }
    else if (checked && name === "Pricing") {

      setUserInfo((prev) => {
        return {
          ...prev,
          Pricing: [...prev.Pricing, value]
        }
      })
    }

    else if (checked && name === "others_features") {

      setUserInfo((prev) => {
        return {
          ...prev,
          others_features: [...prev.others_features, value]
        }
      })
    }
    else {

      setUserInfo((prev) => {
        return {
          works_with: prev.works_with.filter((ele) => ele !== value),
          others_features: prev.others_features.filter((ele) => ele !== value),
          Pricing: prev.Pricing.filter((ele) => ele !== value)
        }
      })

    }
    setPageName("filter")
    setFilterLoader((prev) => !prev)





  }


  return (
    <Box bg={useColorModeValue("#F8F8F8", "#2C2C2C")} className='sidebar' w={open ? "164px" : "64.5px"} borderRight="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} >
      <Box className='scroll' mr={open ? "23px" : "0"} ml={open ? "18.8px" : "0"} >

        <Flex alignItems="center" justifyContent={open ? "left" : "center"}>
          <Text maxW={open ? "" : "60%"} mt="20px" mb="25px" className="itext" fontSize="14px" lineHeight="24px" fontWeight="400">
            Works with:
          </Text>
        </Flex>

        <Flex flexDirection="column" gap="30px">
          {
            data?.map((el, i) => (
              <Flex
                key={i}
                w="100%"

                alignItems="center"

                justifyContent={open ? "space-between" : "center"}
              >


                <Flex alignItems="center" gap="10px"  >
                  <Image boxSize="20px" src={el.logo} />
                  {
                    open ? <Text fontSize="13px" lineHeight="20px">{el.name}</Text> : ""
                  }

                </Flex>

                {open ? <input className='checkbox' type="checkbox" name="works_with" value={el.name} onChange={handleFilterchange} /> : ""}







              </Flex>
            ))
          }
        </Flex>



        <Divider orientation='horizontal' border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} w="98%" m="auto" mt="30px" />

        <Box>
          <Flex alignItems="center" justifyContent={open ? "left" : "center"}>
            <Text mt="25px" mb="30px" fontSize="14px" fontWeight="400" lineHeight="24px">
              Price:
            </Text>
          </Flex>
          <Flex flexDirection="column" gap="15px">
            {
              price.map((el, i) => (
                <Flex
                  key={i}
                  w="100%"
                  alignItems="center"
                  m="auto"
                  justifyContent={open ? "space-between" : "center"}

                >


                  <Flex alignItems="center" gap="5px"   >
                    <Box>
                      {el.logo}
                    </Box>
                    {
                      open ? <Text fontSize="13px" lineHeight="16px" fontWeight="400">{el.name}</Text> : ""
                    }

                  </Flex>

                  {open ? <input className='checkbox' name="Pricing" value={el.name} onChange={handleFilterchange} type="checkbox" /> : ""}

                </Flex>
              ))
            }

          </Flex>

        </Box>
        <Divider orientation='horizontal' border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} w="98%"   m="auto" mt="30px" />
        <Box>

          <Flex alignItems="center" justifyContent={open ? "left" : "center"}>
            <Text mt="30px" mb="30px" fontSize="14px" fontWeight="400" lineHeight="24px">
              Other:
            </Text>
          </Flex>

          <Flex flexDirection="column" gap="20px">
            {
              other.map((el, i) => (
                <Flex
                  w="100%"
                  key={i}
                  m="auto"
                  justifyContent={open ? "space-between" : "center"}
                >


                  <Flex gap="5px"  alignItems="center"  >
                    <Box >{el.logo}</Box>
                    {
                      open ? <Text fontSize="13px" lineHeight="16px" fontWeight="400">{el.name}</Text> : ""
                    }

                  </Flex>

                  {open ? <input className='checkbox' name="others_features" value={el.name} onChange={handleFilterchange} type="checkbox" /> : ""}


                </Flex>
              ))
            }
          </Flex>



        </Box>

        <Flex m="auto" mt="75px" gap="10px" bg="#444" color=  "white"   borderRadius= "4px"  p={open?"4px 10px":"5px"}    alignItems="center" w="fit-content"  >
          <Box > <BsTagFill color="white" size={18} /></Box>
          {
            open ? <Text fontSize="13px" lineHeight="25px" fontWeight="400">Deals</Text> : ""
          }

        </Flex>


        <Flex mt="36px" pb="50px" w="100%" color="black" alignItems="center" justifyContent="center">
          <Button onClick={
            () => {
              var x = document.getElementsByClassName("checkbox");
              for (var i = 0; i < x.length; i++) {
                x[i].checked = false;
              }
              window.location.reload();


            }

          }
            padding="10px" gap="7px" bg="white" borderRadius={open ? "50px" : "7px"} mt="10px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
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
