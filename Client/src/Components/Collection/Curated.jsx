import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
 
import cicon1 from "../../Utils/cicon1.svg"
import cicon2 from "../../Utils/cicon2.svg"
import style from '../../Style/Collection.module.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import moment from 'moment'

 
export const Curated = () => {

  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const userData = useSelector((state) => state.userReducer.loginData);
  const [pageName, setPageName] = useState("");
  const [sort, setSort] = useState("");
  const [sortLoader, setSortLoader] = useState();
  const [mySpaceDetails, setMySpaceDetails] = useState({});

  const getData = async (page) => {
    try {
 

      const res = await axios.get(
        `${process.env.REACT_APP_API}/space/get/All`,
     
      );

      setData(res.data.data.space);
    } catch (err) {}
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
    <Box fontFamily="Segoe UI">

      <Text
        fontSize="24px"
        fontWeight="350"

        lineHeight="42.5px">Discover the Top Curated Collections of AI Tools: Community and Official Picks</Text>

      <InputGroup  w="45%" mt="30px">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input border="1px" borderColor={useColorModeValue("#E6E6E6","#444")} placeholder='Search' />
      </InputGroup>

     
      <Box className={style.cgrid}  >

        {
          data?.map((el,i) => (
          
           <Box key={i} py={3} background="rgba(59, 137, 182, 0.1)"  >
           <Link to={`/collection/${el._id}`}>
              <Text fontSize="18px" fontWeight="600">{el.space_name}</Text>
              <Flex mt="15px" gap="10px" alignItems="center" width="fit-content"  >
                <Text width="fit-content" fontSize="12px" lineHeight="24px" fontWeight="600" color="#3B89B6">{el.tool} tools</Text>
                <Text width="fit-content" fontSize="10px" fontWeight="400">Updated  {moment(el.updatedAt).format("MMM Do")}</Text>
              </Flex>

              <Box className={style.icongrid}>
                <img src={cicon1} />
                <img src={cicon2} />
                <img src={cicon1} />
                <img src={cicon2} />
                <img src={cicon1} />
              </Box>

              <Flex mt="20px" w="fit-content" gap="7px" alignItems="center">
                <Avatar size={"sm"} src={el.userID.image} />
                <Text w="fit-content" fontSize="11px" fontWeight="400">{el.userID.name}</Text>
              </Flex>

              </Link>
            </Box>
          
          ))
        }


      </Box>




    </Box>
  )
}
