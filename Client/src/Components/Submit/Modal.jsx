import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
 
import React from 'react'
 

export const FileModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button  bg="#3B89B6" borderRadius="3px" color="white" onClick={onOpen}>Upload</Button>

            <Modal isCentered  isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent> 
                    
                    <ModalCloseButton onClick={onClose} />
                    <ModalBody>
                         <input type='file' />
                    </ModalBody>

                     
                </ModalContent>
            </Modal>
        </>
    )
}
