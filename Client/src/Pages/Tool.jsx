import React, { useEffect, useState } from 'react'
import tool from "../Style/Tool.module.css"
import { Box, Button, Flex, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import axios from "axios"
import coll2 from "../Utils/collec (2).svg";
import fimg from "../Utils/micon.svg";
import collect from '../Utils/collec.svg'

import { Telement } from '../Components/Tool/Telement';
import { Tranding } from '../Components/Tool/Tranding';
import { useParams } from 'react-router-dom';



let fdata = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX"
    },
]


let triview = [
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",

    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",

    },
    {
        icon: fimg,
        title: "The Collect Button",
        desc: "Transform anything on your website intCXXCX",

    }

]

let coll = [
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },
    {
        icon: collect,
        icon2: coll2,
        title: "Meeting sorting",
        desc: "Looking to give your terminal a much dsff dfffosoa",
        created: "Curated by AI Pedia",
        tool: 5
    },


]

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
        <Box bg={useColorModeValue("white", "#464444")} py="40px">


            <Flex justifyContent="space-between" w="98%" m="auto">
                <Box>

                 {
                    loading? <Text>Loading...</Text>:<Telement id={id} el={data}/>
                 }
                    
                </Box>
                <Box>
                    <Tranding tranding={fdata} top3={triview} collection={coll} />
                </Box>


            </Flex>








        </Box>
    )
}
