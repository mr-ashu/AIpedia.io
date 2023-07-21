import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
 
import { ListModal } from '../ListModal';
import { useSelector } from 'react-redux';
import axios from 'axios';
 
export const LIstcomp = () => {


 
    let [data, setData] = useState([]);
 
    const userData = useSelector((state) => state.userReducer.loginData);

  
    let token = userData.data;
 

    const getData = async () => {
      

        try {
        
         
            const res = await axios.get(
              `http://localhost:9000/data/get/userlikes/data`,
             
              { headers: { token } }
            );

            setData(res.data.data)

            console.log(res.data.data);

            
          
        } catch (err) {
           
          
        }
    };
    useEffect(() => {
        
            getData();
      
    }, []);

   

    return (

      



                    <Box  >
                       

                        {
                            data?.map((el,i) => (

                                <Box mt="30px" key={i}>
                                    <ListModal el={el.videoID} i={i}/>
                                </Box>

                            ))
                        }


                    </Box>

              

    )
}



