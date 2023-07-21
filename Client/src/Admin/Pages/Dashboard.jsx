import React, { useState } from "react";
import {
  IconButton,

  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,

  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Collapse,
  Stack,
  Image,
  Avatar,

} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import logo from "../../Utils/LOGO.svg"

import { CiUser } from "react-icons/ci";
import { VscDashboard, VscFeedback, VscFileSubmodule, VscHome } from "react-icons/vsc";


import { BiCategory } from "react-icons/bi";
import {
  MdHighlightAlt,
  MdOutlineManageAccounts,
  MdOutlineManageHistory,
} from "react-icons/md";

import { FaToolbox } from "react-icons/fa";

import { AdminRoutes } from "./Routes";
import { BsCardImage, BsFillCollectionFill, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useSelector } from "react-redux";




const NAV_ITEMS = [
  {
    label: <Link to="/">Dashboard</Link>,
    icon: <VscDashboard size={25} />,
  },
  {
    label: <Link to="/imageslide">Image Slide</Link>,
    icon: <BsCardImage size={25} />,
  },


  {
    label: "Tools",
    icon: <FaToolbox size={25} />,
    children: [
      {
        label: <Link to="/tool_manage">Tool Management </Link>,
        icon: <MdOutlineManageHistory size={25} />,
      },
      {
        label: <Link to="/category_manage">Category Management </Link>,
        icon: <BiCategory size={25} />,
      },
      {
        label: <Link to="/highlighted_tool">Highlighted Tools Management:
        </Link>,
        icon: <MdHighlightAlt size={25} />,
      },
    ],
  },


  {
    label: <Link to="/submission">Submission and Creators portal
    </Link>,

    icon: <VscFileSubmodule size={25} />,
  },
  {
    label: <Link to="/sidebar">Side bar</Link>,
    icon: <BsReverseLayoutTextSidebarReverse size={25} />,

  },
  {
    label: <Link to="/collection">Collection</Link>,
    icon: <BsFillCollectionFill size={25} />,

  },
  {
    label: <Link to="/user_manage">User Management</Link>,
    icon: <MdOutlineManageAccounts size={25} />,
  },
  {
    label: <Link to="/user_feedback">User Feedback</Link>,
    icon: <VscFeedback size={25} />,
  },
  {
    label: <Link to="/report">Analytics and Report</Link>,
    icon: <HiOutlineDocumentReport size={25} />,
  },


];





export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState("");

  return (
    <Box minH="100vh" bg="#0C0C0D">
      <SidebarContent
        w="350px"
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        page={page}
        setPage={setPage}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"


      >
        <DrawerContent overflow="auto" bg="#0C0C0D">
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobile nav */}
      <MobileNav onOpen={onOpen} page={page} setPage={setPage} />

      <Box ml={{ base: 0, md: "350px" }} p="4" pb="4" mt="60px"  >
        <Box width="100%" bg="white" color="black">
          <AdminRoutes />
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, page, setPage, ...rest }) => {
  return (
    <Box
      overflow="auto"
      transition="3s ease"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      {...rest}
    >

      <Flex justifyContent="flex-end" alignItems="center">

        <CloseButton color="white" display={{ base: "flex", md: "none" }} onClick={onClose} />

      </Flex>

      <Box>
        {NAV_ITEMS.map((navItem, i) => (
          <Box
            key={i}
            w="100%"
            m="auto"
            mb="10px"
            fontSize="18px"
            borderRadius="5px"
            alignItems="center"
          >
            <MobileNavItem page={page} setPage={setPage} {...navItem} i={i} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const MobileNavItem = ({ label, icon, page, setPage, children, href, i }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [bgActive, setBgActive] = useState(false);

  return (
    <>
      <Stack
        w="100%"
        color="white"
        bg="#1C1C1E"
        mt="4"
        onClick={children && onToggle}
      >
        <Box
          width="100%"

          h={isOpen ? "" : "60px"}
          justifyContent="space-between"
          alignItems="center"
          color={isOpen ? "white" : ""}
          onFocus={() => {
            setBgActive(!bgActive);
          }}
          onBlur={() => {
            setBgActive(false);
          }}
          bg={bgActive ? "#E50813" : "#1C1C1E"}
          borderLeft={bgActive ? "5px solid white" : ""}
          cursor="pointer"

        >
          <Flex

            w="90%"
            h="60px"
            margin="auto"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center" gap="13px">
              <Box m="auto" color="white"  >
                {icon}
              </Box>
              <Text fontWeight={600}>{label}</Text>
            </Flex>
            {children && (
              <Icon
                fontWeight="700"
                as={ChevronRightIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(90deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
        </Box>
      </Stack>
      <Collapse in={isOpen} animateOpacity>
        <Stack w="100%" m="auto" bg="#1C1C1E">
          <Box w="90%" m="auto" color="grey" mt="-10px" py="10px">
            {children?.map((child, i) => (
              <Link key={i} py={2} href={child.href}>
                <Flex
                  in={isOpen}
                  mt="7px"
                  fontWeight="500"
                  w="100%"
                  textAlign="left"
                  px="10px"
                  py="8px"
                  gap="10px"
                  color={bgActive ? "#E50813" : ""}
                >

                  <span>{child.icon}</span>
                  <Text>{child.label}</Text>
                </Flex>
              </Link>
            ))}
          </Box>
        </Stack>
      </Collapse>
    </>
  );
};

const MobileNav = ({ onOpen, page, ...rest }) => {
   const navigate=useNavigate()
  const userData = useSelector((store) => store.userReducer.isAuth)

  return (
    <Flex

      px={{ base: 4, md: 4 }}
      height="60px"
      bg="#1C1C1E"
      position="fixed"
      w="100%"
      zIndex="100"
      top="0"
      left="0"
      alignItems="center"

      justifyContent="space-between"
      {...rest}
    >

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        color="white"
        _hover={{ color: "white", bg: "none" }}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Link to="/">
        <Image src={logo} alt="My-screen=logo" />
      </Link>




      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}

              _focus={{ boxShadow: "none" }}
            >

              <Avatar size={"md"} src={userData.image} />


            </MenuButton>
            <MenuList>
              <MenuItem></MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => {

                localStorage.removeItem("UserData");
               
                window.location.reload();
                  return navigate("/")

              }}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
