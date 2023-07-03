import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Image,
} from '@chakra-ui/react';
import axios from "axios"
import style from "../../Style/Signup.module.css"
import { FcGoogle } from "react-icons/fc"
import { useState } from 'react';
import notification from '../Toast';
import { useDispatch, useSelector } from "react-redux";
import { auth, googleAuthProvider } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { setUserLogin } from '../../Redux/action';
export default function SignupForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

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

    setImage(data.url);

  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    userName:"",
    phoneNumber: "",
    confirmPassword: "",
  });
  let handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (data.name === "") {
      notification("error", "Please type your Name");
      return false;
    }
    if (data.password !== data.confirmPassword) {
      notification("error", "Please use same password");
      return false;
    }
    if (data.email === "") {
      alert("Please type your Email");
      notification("error", "Please type your valid Email");
      return false;
    }
    if (!data.email.match(validRegex)) {
      notification("error", "Not Valid email address!");
      return false;
    }
    if (data.phoneNumber.length < 10 || data.phoneNumber.length > 10) {
      notification("error", "Enter a valid phone number");
      return false;
    }

    let { name, email,userName, password, phoneNumber } = data;
    if (image === "") {
      notification("warning", "You haven't selected an Avatar");
    }
    const payload = {
      name,
      email,
      userName,
      phoneNumber,
      password,
      image
    };
    const url = `${process.env.REACT_APP_API}/api/users`;
    const res = await axios.post(url, payload);
    notification("success", res.data.message);
   
  
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
        `${process.env.REACT_APP_API}/api/users/google/auth`,
        payload
      );

      dispatch(setUserLogin(data));
      localStorage.setItem("UserData", JSON.stringify(data));
      notification("success", data.message);
      navigate("/");
    } catch (error) {
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
          <Text mt="20px" fontSize="16px" fontWeight="600" lineHeight="30px" textAlign="left">Create an account</Text>
          <Box mt="20px" > <Flex cursor="pointer" onClick={HandleGoogle} bg="white" className={style.gbtn} fontWeight="600" borderRadius="5px" gap="7px" border="1px solid #000000" margin="auto" width="fit-content" alignItems="center"><Text alignItems="center">Sign up with</Text> <FcGoogle /></Flex></Box>
          <Box mt="40px" > <Flex width="70%" margin="auto" gap="45px" alignItems="center"><Divider border="1px solid " /><Text fontSize="12px" lineHeight="14.52px" fontWeight="400">or</Text> <Divider border="1px solid " /></Flex></Box>
        </Box>
        <Box>
          <Box  >
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Image boxSize="120px" src={image} />
              <Box justifyContent="center" textAlign="center">


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


            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Your name</FormLabel>
              <Input type="text"
                name="name"
                value={data.name}
                onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Email address</FormLabel>
              <Input type="eamil"
                name="email"
                value={data.email}
                onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Phone No. (optional)</FormLabel>
              <Input type="text"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Choose your username</FormLabel>
              <Input type="text"
                name="userName"
                value={data.userName}
                onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Password</FormLabel>
              <Input type="text"
                name="password"
                value={data.password}
                onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>
            <FormControl mt="20px" >
              <FormLabel fontSize="13px" lineHeight="20px" fontWeight="400">Confirm your password</FormLabel>
              <Input type="text"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange} _placeholder={{ color: "black" }} borderRadius="3px" bg="white" height="46px" />
            </FormControl>


            <Text w="90%" mt="25px" fontWeight="600" lineHeight="20px" fontSize="13px">Stay Informed with the Latest AI News, Updates, and New Releases Delivered to Your Inbox!</Text>

            <Flex mt="15px" gap="10px"><input    type="checkbox" /> <Text fontSize="13px" lineHeight="20px" fontWeight="400">Yes, I want to stay updated with the world of AI</Text></Flex>

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
              Sign up
            </Button>

          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}