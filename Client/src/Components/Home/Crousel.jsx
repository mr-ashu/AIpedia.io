
import React, { useEffect, useRef, useState } from "react";
import style from "../../Style/Sleder.module.css"
import { Box, Flex, Image, Stack, Text,   useColorModeValue } from "@chakra-ui/react";
import s1 from "../../Utils/s1.jpg"
import s2 from "../../Utils/s2.jpg"
import s3 from "../../Utils/s3.jpg"
import s4 from "../../Utils/s4.jpg"
 

const data = [s1, s2, s3, s4];
const delay = 4500;


function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      ), delay);

    return () => {
      resetTimeout();
    };


  }, [index]);

  return (
    <Stack className={style.slider} width="100%" mt="25px">
      <Box

        w="100%"
        margin="auto"


      >

        <Box h="96px" mb="20px" textAlign="left" padding="20px" bg={useColorModeValue("linear-gradient(91.96deg, rgba(59, 137, 182, 0.2) 48.35%, rgba(255, 255, 255, 0) 85.25%, rgba(255, 255, 255, 0.2) 85.25%)", "linear-gradient(91.96deg, rgba(59, 137, 182, 0.2) 48.35%, rgba(255, 255, 255, 0) 85.25%, #2C2C2C 85.25%)")} mt="10px">
          <Text fontSize="23px" fontWeight="700" lineHight="32px">Welcome to AI ZONE </Text>
          <Text fontSize="16px" fontWeight="400" lineHight="24px">The Ultimate One-Stop Source for AI Tools </Text>
        </Box>
        <Box mb="17px">
          {data?.map((el, i) => (


            <Flex key={i}>

              {
                i == index ? <Image borderRadius="5px" width="100%" height="206px" src={el} /> : <img />
              }



            </Flex>


          ))}
        </Box>





      </Box>


      <Box className={style.dots}>
        <Flex w="fit-content" margin="auto" gap="10px" bg="" className={style.slideshowDots}>
          {data.map((_, i) => (
            <div
              key={i}
              className={`slideshowDot${index === i ? (style.active) : ""}`}
              onClick={() => {
                setIndex(i);
              }}
            >
              <Box cursor="pointer" w="12px" height="12px" border="2px solid white" borderRadius="100%" bg={index === i ? "white" : ""}> </Box>

            </div>
          ))}
        </Flex>
      </Box>

    </Stack>
  );
}



export default Slideshow