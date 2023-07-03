import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { homepageDataLoading } from '../Redux/action';
import { AiOutlineHeart } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';

export const Likes = ({el}) => {
  
    let [isLikes, setIsLisks] = React.useState(false);
     
 
    const userData = useSelector((state) => state.userReducer.loginData);
 
    const dispatch = useDispatch();
  
  
    const handleLike = async () => {
      try {
        let token = userData.data;
        const id = el._id;
        const res = await axios.patch(
          `http://localhost:9000/data/update/${id}/add-like`,
          null,
          { headers: { token } }
        );
        if (isLikes) {
         el.likes--;
          setIsLisks(false);
        } else {
         el.likes++;
          setIsLisks(true);
        }
        dispatch(homepageDataLoading());
      } catch (err) {
        console.log(err);
      }
    };
  
  
  
    return (
    <Box>

    <AiOutlineHeart cursor="pointer" onClick={handleLike} color={isLikes?"tomato":""} />
    
    
    </Box>
  )
}
