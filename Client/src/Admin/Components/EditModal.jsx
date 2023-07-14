import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiEdit } from 'react-icons/bi'

export const EditModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
     <Text onClick={onOpen} cursor="pointer"  borderRadius="5px" p="8px" bg="red"> <BiEdit/></Text>
    
    
     <Modal isCentered blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input/>
            </FormControl>
          
          </ModalBody>

          <ModalFooter>
            <Button borderRadius="5px" colorScheme='green' mr={3} onClick={onClose}>
              Edit
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
