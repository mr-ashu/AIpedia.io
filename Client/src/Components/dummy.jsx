import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  InputRightElement,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { SmallCloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
 
import { Link, useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
 
const Register = () => {

    let styles=""
 
  let dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [profileBtnLoading, setProfileBtnLoading] = useState(false);
  const [profile, setProfile] = useState("");
  const [FormInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    
  };

  const addProfile = async (event) => {
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  
  };

  useEffect(() => {
  
  
 
 
  }, [ ]);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl" }}
            textAlign={"center"}
          >
            Sign Up
          </Heading>
          <FormControl id="userName">
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar
                  size="xl"
                  src={profile ? profile : "https://bit.ly/broken-link"}
                >
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                    onClick={() => setProfile("")}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                {profileBtnLoading ? (
                  <Button
                    isLoading
                    loadingText="Change Icon"
                    colorScheme="teal"
                    variant="outline"
                    w="100%"
                  >
                    Change Icon
                  </Button>
                ) : (
                  <FormLabel
                    className={styles.registerButton}
                    textAlign={"center"}
                    htmlFor="file"
                  >
                    Change Icon
                  </FormLabel>
                )}
                <Input
                  type="file"
                  id="file"
                  display={"none"}
                  onChange={addProfile}
                />
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Username"
              name="username"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <Select
              placeholder="Select Role"
              name="role"
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="manager">Manager</option>
            </Select>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack width={"100%"}>
           
              <Button
                isLoading
                loadingText="Submit"
                colorScheme="teal"
                variant="outline"
                w="100%"
              >
                Submit
              </Button>
           
          </Stack>
          <Stack marginTop={5}>
            <Text textAlign={"center"} fontSize={17}>
              Already Register?{" "}
              <Link to={"/login"}>
                <span style={{ color: "blue" }}>Login</span>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default Register;