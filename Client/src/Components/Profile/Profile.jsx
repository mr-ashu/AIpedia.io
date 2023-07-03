import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
 
  Stack,
 
  Button,
 
  Text,
 
  Image,
} from '@chakra-ui/react';
import axios from "axios"
import style from "../../Style/Signup.module.css"
 
import {  useEffect, useState } from 'react';
import notification from '../Toast';
import {   useSelector } from "react-redux";
 
import { useNavigate } from 'react-router-dom';
 
export default function ProfileForm() {

  const userData = useSelector((state) => state.userReducer.loginData);


  const token = userData.data;
  const [reavatar, setReAvatar] = useState(userData.image);

  let [input, setInput] = useState({
    name:userData.name,
    userName:userData.userName,
    email:userData.email,
    phoneNumber:userData.phoneNumber,
  });
  const addImage = async (event) => {

    let image = event.target.files[0];

    const dataImg = new FormData();
    dataImg.append("file", image);
    dataImg.append("upload_preset", process.env.REACT_APP_PRESET);
    dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);



    let { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      dataImg 
    );

    setReAvatar(data.url);

  };
 

  const navigate = useNavigate();
  const handleChangePassword = () => {
    navigate("/forget-password");
  };


  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let payload = {
        ...input,
        reavatar
      };

      


      let { data } = await axios.patch(
        `${process.env.REACT_APP_API}/api/users/update`,
        payload,
        { headers: { token } }
      );

      notification("success", data.msg);
    } catch (error) {
      notification("error", error.response.data.error);
    }
  };

  return (
    <Stack

      className={style.signupform}
      border="1px solid #E6E6E6"
      py={12}
      fontFamily="Segoe UI"

      margin="auto"

      paddingBottom="90px"
      borderRadius="3px"

    >
      <Stack width="75%" margin="auto" >
        <Box textAlign="center">


          <Text mt="20px" mb="15px" fontSize="20px" fontWeight="600" lineHeight="20px" textAlign="left">Account setting</Text>
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Image boxSize="120px" src={reavatar} />
              <Box justifyContent="center">


                <FormLabel
            
                  color="white"
                  textAlign={"center"}
                  htmlFor="gfile"
                >

                  <Flex  borderRadius="3px" width="232px" height="42px" bg="#606060" textAlign="center" alignItems="center"  justifyContent="center" px="10px"   >
                  <Text    >Upload new Profile Picture</Text>
                  </Flex>

                </FormLabel>

                <Input
                  type="file"
                  id="gfile"
                  display={"none"}
                  onChange={addImage}
                />

                <Text mt="10px" fontSize="12px" lineHeight="20px" fontWeight="400">Recommended size: 400x400px</Text>


              </Box>
            </Flex>
          </Box>

        </Box>
        <Box>
          <Box  >
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400"> Name</FormLabel>
              <Input value={input.name}
                name='name'
                onChange={handleChange} color="black" type="text"


                _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>


            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400"> Username</FormLabel>
              <Input value={input.userName}
                name='userName'
                onChange={handleChange} color="black" type="text"

                _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Phone no.</FormLabel>
              <Input value={input.phoneNumber}
                name='phoneNumber'
                onChange={handleChange} color="black" type="text"

                _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Email </FormLabel>
              <Input value={input.email}
                name='email'
                onChange={handleChange} color="black" type="eamil"


                _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>


            <Button onClick={handleChangePassword} border="1px solid #ABABAB" fontSize="16px" lineHeight="24px" fontWeight="400" mt="35px" width="302px" height="54px" bg="rgba(59, 137, 182, 0.13)" borderRadius="3px">Change password</Button>

            <Flex gap="10px" fontSize="16px" lineHeight="24px" mt="25px" fontWeight="400">
              <Text  >Do you want to delete this account ?</Text>
              <Text fontSize="16px" lineHeight="24px" color="#0090FF" fontWeight="400">Click here</Text>
            </Flex>


            <Flex mt="25px" gap="40px" alignItems="center" >
              <Button

                borderRadius="3px"
                onClick={handleSubmit}

                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Save
              </Button>

              <Text alignItems="center" fontSize="15px" lineHeight="20px" fontWeight="400">Updated !</Text>
            </Flex>
          </Box>

        </Box>

      </Stack>
    </Stack>
  );
}