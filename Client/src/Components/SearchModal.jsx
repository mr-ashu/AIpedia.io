import { Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const SearchModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
     <Input  onClick={onOpen}   onChange={(e) => setInput(e.target.value)} bg={useColorModeValue("white", "#464444")} _placeholder={{ color: "grey" }} color={useColorModeValue("black", "white")} borderRadius="3px" placeholder='Search' />
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             
       
          </ModalBody>

        
        </ModalContent>
      </Modal>
    </>
  )
}
