import React, { useEffect, useState } from "react";
import style from "../../Style/Grid.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import notification from "../Toast";
import { Avatar, Box, Button, Divider, Flex, FormControl, Input, Menu, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import { setMyspaceName } from "../../Redux/action";
import { HiPencil } from "react-icons/hi";
import { AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";



const Save = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputName, setInputName] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [library, setLibrary] =  useState("");
    const [newLibrary, setNewLibrary] = useState("");
    const [allLibrary, setAllLibrary] = useState([]);
    const userData = useSelector((state) => state.userReducer.loginData);
    const [reload, setreload] = useState(true);
    const dispatch = useDispatch();



    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            let token = userData.data;
            const payload = {
                space_name: newLibrary,
            };

            const url = `${process.env.REACT_APP_API}/space/create`;
            const { data: res } = await axios.post(url, payload, {
                headers: { token },
            });
            setreload(!reload);

            setNewLibrary("");
            notification("success", res.msg);
        } catch (err) {
            notification("error", err.response.data.errors);
        }
    };

    useEffect(() => {
        let token = userData.data || false;
        const getData = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_API}/space/get`,
                {
                    headers: { token },
                }
            );

            setAllLibrary(res.data.data);
            dispatch(setMyspaceName(res.data.data));
        };
        if (token) {

            getData();
        }
    }, [reload]);

    const handleLibrarySubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                videoID: id,
                spaceID: library,
            };
            let token = userData.data;
            const res = await axios.post(
                `${process.env.REACT_APP_API}/myspace/add`,
                  payload,
                { headers: { token } }
            );
            notification("success", res.data.msg);
        } catch (err) {
            notification("error", err.response.data.errors);
        }
    };
    const handleChange = (event) => {
        setLibrary(event.target.value);
    };
    const handlech = () => {
        notification("success");
    };
    return (
        <>


            <Button onClick={onOpen} className={style.savebtn} borderRadius="5px" border="1px solid #CCCCCC" fontSize="14px" fontWeight="400" gap="5px" h="29.68px" background={"transparent"}>Save</Button>
            <Modal isCentered blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="fit-content">

                    <ModalBody >
                        <Box padding="20px"  >
                            <Flex alignItems="center" gap="10px" m="10px">
                                <Avatar />
                                <Text fontSize="16px" lineHeight="24px" fontWeight="700">ChatGPT</Text>
                            </Flex>

                            <Text mt="15px" fontSize="24px" lineHeight="32px" fontWeight="400">Save to</Text>

                            <Box h="200px" overflow="auto" fontWeight="400"  >

                                <Box mt="15px">
                                    <Text fontSize="16px" lineHeight="24px">mi </Text>
                                    <Text fontSize="14px" lineHeight="24px">Personal best ofr video editing</Text>
                                </Box>
                                <Box mt="15px">
                                    <Text fontSize="16px" lineHeight="24px">Another one</Text>
                                    <Text fontSize="14px" lineHeight="24px">Personal best ofr video editing</Text>
                                </Box>
                                <Box mt="15px">
                                    <Text fontSize="16px" lineHeight="24px">Productivity </Text>
                                    <Text fontSize="14px" lineHeight="24px">Personal best ofr video editing</Text>
                                </Box>

                            </Box>
                            <Divider mt="10px" border="1px solid #D9E1EC" />


                            {!inputName ? (
                                <Text cursor="pointer" mt="5px" onClick={() => setInputName(!inputName)}>+ Create new collection</Text>
                            ) : (
                                <Box>
                                    <Input
                                        type="text"
                                        placeholder="Enter collection name"
                                        name="playlist"
                                        value={newLibrary}
                                        onChange={(e) => setNewLibrary(e.target.value)}
                                    />

                                    <Button color="white" mt="10px" onClick={handleCreate} borderRadius="4px" bg="#3B89B6" _hover={{ bg: "" }}>  <CheckIcon /></Button>



                                    <FormControl>
                                        <Select
                                            mt="10px"

                                            value={library}
                                            onChange={handleChange}
                                        >
                                            <Menu>
                                                <option value="">
                                                    <em

                                                    >
                                                        None
                                                    </em>
                                                </option>

                                                {allLibrary?.map((ele,i) => (
                                                    <option key={i} value={ele._id} >
                                                        {ele.space_name}
                                                    </option>
                                                ))}
                                            </Menu>
                                        </Select>
                                    </FormControl>


                                    <Button color="white" mt="10px" onClick={handleLibrarySubmit} borderRadius="4px" bg="#3B89B6" _hover={{ bg: "" }}>Add</Button>


                                </Box>
                            )}



                        </Box>


                    </ModalBody>


                </ModalContent>
            </Modal>

        </>
    );
};

export default Save;
