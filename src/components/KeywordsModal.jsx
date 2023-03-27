import React from 'react';
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from '@chakra-ui/react';

const KeywordsModal = ({keywords, loading, isOpen, closeModel}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModel}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>keywords</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              {loading ? (
                <CircularProgress isIndeterminate color="blue.300" />
              ) : (
                <Text>{keywords}</Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModel}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default KeywordsModal;
