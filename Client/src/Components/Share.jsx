import React from 'react'
import { BiShareAlt } from 'react-icons/bi';

import Style from "../Style/Share.module.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
} from "react-share";
import { Box, Center, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';





export default function ShareModel({ url }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <BiShareAlt style={{ fontSize: "14px", cursor: "pointer" ,color:"black"}} onClick={onOpen} />
      <Modal
        blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}
        isCentered={Center}
      
      >

        <ModalOverlay />
        <ModalContent   w="fit-content">

          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex  gap="15px">

              <FacebookShareButton   url={url} ><FacebookIcon   size={38}></FacebookIcon></FacebookShareButton>
              <WhatsappShareButton url={url} ><WhatsappIcon   size={38} ></WhatsappIcon></WhatsappShareButton>
              <LinkedinShareButton url={url} ><LinkedinIcon   size={38}></LinkedinIcon></LinkedinShareButton>
              <TwitterShareButton url={url} ><TwitterIcon   size={38}></TwitterIcon></TwitterShareButton>
              <TelegramShareButton url={url}><TelegramIcon   size={38}></TelegramIcon></TelegramShareButton>
            </Flex>
          </ModalBody>

        </ModalContent>

      </Modal>
    </>
  )
}
