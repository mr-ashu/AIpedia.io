import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import img from "../../Utils/pimg.svg"
import cicon1 from "../../Utils/cicon1.svg"
import cicon2 from "../../Utils/cicon2.svg"
import style from '../../Style/Collection.module.css';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { DataObject } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import moment from 'moment'



export const MyCollection = () => {


  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const userData = useSelector((state) => state.userReducer.loginData);
  const [pageName, setPageName] = useState("");
  const [sort, setSort] = useState("");
  const [sortLoader, setSortLoader] = useState();
  const [mySpaceDetails, setMySpaceDetails] = useState({});

  const getData = async (page) => {
    try {
      let token = userData.data;

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




    <Box fontFamily="Segoe UI" className={style.cgrid}>

      {
        data?.map((el,i) => (
          <Box key={i} py={3} background="rgba(59, 137, 182, 0.1)" >
            <Link to={`/mycollection/${el._id}`}>
              <Box>
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




              </Box>
            </Link>
          </Box>
        ))
      }


    </Box>





  )
}
