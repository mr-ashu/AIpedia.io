import React, { useEffect, useState } from 'react'
 
import { Box,   Flex,   Stack,   Text  } from '@chakra-ui/react'
import axios from "axios"
 
import { Telement } from '../Components/Tool/Telement';
import style from "../Style/Tool.module.css"
import { useParams } from 'react-router-dom';
import { LandingRight } from '../Components/LandingRight';
 



 

const getData = ({id}) => {
    return axios.get(`http://localhost:9000/data/single/get/${id}`)

};




export const Tool = () => {
    let { id } = useParams()
    const [loading,setloading]=useState(true)
    let [data, setdata] = useState([])



    useEffect(() => {

        getData({id})
            .then((res) => {
                setdata(res.data.data)
                setloading(false)
            })



    }, [id])

 
   
  
    return (
        <Box  py="40px">


            <Flex justifyContent="space-between" className={style.leftscroll} >
                <Stack mt="30px">

                 {
                    loading? <Text>Loading...</Text>:<Telement id={id} el={data}/>
                 }
                    
                </Stack>
                <Stack>
                    <LandingRight/>
                </Stack>


            </Flex>
 
        </Box>
    )
}
