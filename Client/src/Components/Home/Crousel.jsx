
import React, { useEffect, useRef, useState } from "react";
import style from "../../Style/Sleder.module.css"
import { Box, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";




const delay = 2500;


function Slideshow() {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  let [data, setData] = useState([]);


  const getData = async (page) => {



    try {
      await axios.get(
        `${process.env.REACT_APP_API}/carousel/get`,

      ).then((res) => {
        setData(res.data.data);
      })


    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {
    getData()
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      ), delay);

    return () => {
      resetTimeout();
    };


  }, [index,data]);

  return (
    <Box className={style.slider} width="100%" mt="25px">
   

        <Box h="96px" mb="20px" textAlign="left" padding="20px" bg={useColorModeValue("linear-gradient(91.96deg, rgba(59, 137, 182, 0.2) 48.35%, rgba(255, 255, 255, 0) 85.25%, rgba(255, 255, 255, 0.2) 85.25%)", "linear-gradient(91.96deg, rgba(59, 137, 182, 0.2) 48.35%, rgba(255, 255, 255, 0) 85.25%, #2C2C2C 85.25%)")} mt="10px">
          <Text fontSize="23px" fontWeight="700" lineHight="32px">Welcome to AI ZONES </Text>
          <Text fontSize="16px" fontWeight="400" lineHight="24px"> The leading marketplace for AI Tools </Text>
        </Box>


         <Box mb="17px">
          {data?.map((el, i) => (


            <Flex key={i}>

              {
                i === index && el.img ? <Image borderRadius="5px" width="100%" height="206px" src={el.img} /> : ""
              }



            </Flex>


          ))}
        </Box>


        <Box className={style.dots}>
          <Flex w="fit-content" margin="auto" gap="10px" bg="" className={style.slideshowDots}>
            {data.length>1?(data.map((_, i) => (
              <div
                key={i}
                className={`slideshowDot${index === i ? (style.active) : ""}`}
                onClick={() => {
                  setIndex(i);
                }}
              >
                <Box cursor="pointer" w="12px" height="12px" border="2px solid white" borderRadius="100%" bg={index === i ? "white" : ""}> </Box>

              </div>
            ))):""}
          </Flex>
        </Box>


       




    </Box>
  );
}



export default Slideshow

