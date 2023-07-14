import React, { useEffect, useState } from "react";
import style from "../../Style/Grid.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import notification from "../Toast";
import { Avatar, Box, Button, Divider, Flex, FormControl, Input, Menu, MenuItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { setMyspaceName } from "../../Redux/action";
import { CheckIcon } from "@chakra-ui/icons";
import { HiOutlineBookmark } from "react-icons/hi";


const Save = ({ id, el }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputName, setInputName] = useState(false);
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

    const handleLibrarySubmit = async (lid) => {

        try {
            const payload = {
                videoID: id,
                spaceID: lid,
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



    return (
        <>


            <Button onClick={onOpen} className={style.savebtn} borderRadius="5px" border="1px" borderColor={useColorModeValue("#E6E6E6", "#444")} fontSize="14px" fontWeight="400" gap="5px" h="29.68px" background={"transparent"}><HiOutlineBookmark /> Collect</Button>
            <Modal isCentered blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="fit-content">

                    <ModalBody >
                        <Box padding="20px"  >
                            <Flex alignItems="center" gap="15px" m="10px" ml="0px">
                                <Avatar src={el.Logo} />
                                <Text fontSize="16px" lineHeight="24px" fontWeight="700">{el.Title}</Text>
                            </Flex>

                            <Text mt="15px" fontSize="24px" lineHeight="32px" fontWeight="400">Save to</Text>

                            <Box h="200px" overflow="auto" fontWeight="400"  >
                                {allLibrary?.map((ele, i) => (

                                    <Box cursor="pointer" onClick={() => handleLibrarySubmit(ele._id)} mt="15px" key={i} value={ele._id}>
                                        <Text fontSize="16px" lineHeight="24px"> {ele.space_name}</Text>
                                        <Text fontSize="14px" lineHeight="24px">Personal best of video editing</Text>
                                    </Box>

                                ))}



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
