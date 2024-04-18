import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

export default function DisableVendingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button fontWeight={"medium"} onClick={onOpen}>
        Disable Vending
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Disable Vending</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This action will disable vending for{" "}
              <span className="font-semibold">Emeka Nkwo</span>{" "}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Disable</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
