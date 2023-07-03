import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,

  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import style from "../../Style/Signup.module.css"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserLogin } from '../../Redux/action';
import notification from '../Toast';
import { auth, googleAuthProvider } from '../../Firebase/Firebase';


export default function LoginForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_API}/api/auth`;
      const { data: res } = await axios.post(url, data);
      dispatch(setUserLogin(res));
      localStorage.setItem("UserData", JSON.stringify(res));
      window.location = "/";
      notification("success", "Logged in Successfully");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        notification("error", error.response.data.message);
      }
    }
  };

  const HandleGoogle = async () => {
    try {
      let { user } = await auth.signInWithPopup(googleAuthProvider);
    
      let payload = {
        name: user._delegate.displayName,
        image: user._delegate.photoURL,
    
        email: user._delegate.email,
        password: user._delegate.uid,
      };


      let { data } = await axios.post(


        ` ${process.env.REACT_APP_API}/api/users/google/auth`,
        payload
      );

   
      dispatch(setUserLogin(data));
      localStorage.setItem("UserData", JSON.stringify(data));
      notification("success", data.message);
      navigate("/");
    } catch (error) {
      console.log(error)
      notification("error", "Opps! Something went wromg");
    }
  };


  return (
    <Stack

      className={style.signupform}
      bg="#EFF2F8"
      py={12}
      fontFamily="Segoe UI"

      margin="auto"
      color="black"
      paddingBottom="90px"
      borderRadius="3px"

    >
      <Stack width="75%" margin="auto" >
        <Box textAlign="center">
          <Text fontSize={'18px'} fontWeight="350" lineHeight="54px">Discover, Explore & Collect</Text>
          <Text mt="20px" lineHeight="30px" fontSize="20px" fontWeight="350">
            Your Ultimate One-Stop Source for All AI Tools
          </Text>
          <Text mt="20px" fontSize="16px" fontWeight="600" lineHeight="30px" textAlign="left">Welcome back</Text>

        </Box>
        <Box>
          <Box  >

            <FormControl mt="20px" >

              <Input name="email" value={data.email} onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" placeholder='Email' bg="white" height="46px" />
            </FormControl>


            <FormControl mt="20px" >

              <Input name="password" value={data.password} onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" placeholder='Password' height="46px" />
            </FormControl>




            <Button
              onClick={handleSubmit}
              borderRadius="3px"
              w="100%"
              mt="25px"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>


            <Box mt="40px" > <Flex margin="auto" gap="45px" alignItems="center"><Divider border="1px solid " /><Text fontSize="12px" lineHeight="14.52px" fontWeight="400" w="60%">or continue with</Text> <Divider border="1px solid " /></Flex></Box>
            <Box mt="20px"> <Flex cursor="pointer" onClick={HandleGoogle} bg="white" className={style.gbtn} fontWeight="600" borderRadius="5px" gap="7px" border="1px solid #000000" margin="auto" width="fit-content" alignItems="center"><Text alignItems="center">Sign in with</Text> <FcGoogle /></Flex></Box>
            <Flex mt="15px" fontSize="14px" fontWeight="400" lineHeight="24px"><Text>Don't have an account ? </Text><Link to="/signup"><Text fontWeight="600" color="#3B89B6">Sign up</Text></Link> </Flex>

          </Box>

        </Box>
      </Stack>
    </Stack>
  );
}