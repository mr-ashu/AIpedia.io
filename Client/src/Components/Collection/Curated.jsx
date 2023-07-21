import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, Image, Input, InputGroup, InputLeftElement, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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

import style from '../../Style/Collection.module.css';
import { Link } from 'react-router-dom'

import axios from 'axios'
import moment from 'moment'


export const Curated = () => {

  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  const getData = async (page) => {
    try {


      const res = await axios.get(
        `${process.env.REACT_APP_API}/space/get/All`,

      );

      setData(res.data.data.space);
    } catch (err) { }
  };




  useEffect(() => {

    getData(page);
  }, [page]);


  ;


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
    <Box fontFamily="Segoe UI">

      <Text
        fontSize="24px"
        fontWeight="350"

        lineHeight="42.5px">Discover the Top Curated Collections of AI Tools: Community and Official Picks</Text>

      <InputGroup w="45%" mt="30px">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} placeholder='Search' />
      </InputGroup>


      <Box className={style.cgrid}  >

        {
          data?.map((el, i) => (


            <Box>
              <Link to={`/collection/${el._id}`}>
                <Flex h="100%" flexDirection="column" justifyContent="space-between" key={i} py={3} m="auto" background="rgba(59, 137, 182, 0.1)" alignItems="center" >

                  <Box>
                    <Text fontSize="18px" fontWeight="600">{el.space_name}</Text>


                    <Flex mt="15px" gap="10px" alignItems="center" width="fit-content"  >
                      <Text width="fit-content" fontSize="12px" lineHeight="24px" fontWeight="600" color="#3B89B6">{el.tool.length} tools</Text>
                      <Text width="fit-content" fontSize="10px" fontWeight="600" color="#3B89B6">Updated  {moment(el.updatedAt).format("MMM Do")}</Text>
                      {
                        el.userID.isAdmin ? <Text width="fit-content" fontSize="10px" fontWeight="600" color="#3B89B6">| By AI Zones </Text> : ""
                      }

                    </Flex>

                    <Box className={style.icongrid} m="auto" mt="10px">
                      {
                        el.tool.filter((e) => e !== "").map((e, i) => (
                          <Box>
                            {

                              i === 0 ? <Image borderRadius="4px" w="100%" src={e} /> :
                                i === 1 ? <Image borderRadius="4px" w="100%" src={e} /> :
                                  i === 2 ? <Image borderRadius="4px" w="100%" src={e} /> :
                                    i === 3 ? <Image borderRadius="4px" br="4px" w="100%" src={e} /> :

                                      ""
                            }

                          </Box>
                        ))
                      }
                    </Box>

                  </Box>





                  <Flex mb="15px" w="fit-content" gap="7px" alignItems="center">
                    <Avatar size={"sm"} src={el.userID.image} />
                    <Text w="fit-content" fontSize="11px" fontWeight="400">{el.userID.name}</Text>
                  </Flex>
                </Flex>
              </Link>

            </Box>

          ))
        }


      </Box>




    </Box>
  )
}
