
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import style from '../../Style/Collection.module.css';
import { useSelector } from 'react-redux'
import axios from 'axios'

import { Link } from 'react-router-dom'
import moment from 'moment'
import notification from '../Toast'
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



export const MyCollection = () => {

  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const userData = useSelector((state) => state.userReducer.loginData);
  let token = userData.data;
  const getData = async (page) => {
    try {


      const res = await axios.get(
        `${process.env.REACT_APP_API}/space/get`,
        {
          headers: { token },
        }
      );

      let data = res.data.data || [];

      setData(data);
    } catch (err) { }
  };




  useEffect(() => {

    getData(page);
  }, [page]);






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




    <Box className={style.cgrid}  >

      {
        data?.map((el, i) => (
          <Box key={i} py={3} m="auto" background="rgba(59, 137, 182, 0.1)">
            <Link to={`/mycollection/${el._id}`}>

              <Flex h="100%" flexDirection="column" justifyContent="center" textAlign="left" alignItems="center" >

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

                          i === 0 ? <Image borderRadius="5px" w="100%" h="100%" src={e} /> :
                            i === 1 ? <Image borderRadius="5px" w="100%" h="100%" src={e} /> :
                              i === 2 ? <Image borderRadius="5px" w="100%" h="100%" src={e} /> :
                                i === 3 ? <Image borderRadius="5px" w="100%" h="100%" src={e} /> :

                                  ""
                        }

                      </Box>
                    ))
                  }
                </Box>







              </Flex>





            </Link>
          </Box>

        ))
      }


    </Box>






  )
}
