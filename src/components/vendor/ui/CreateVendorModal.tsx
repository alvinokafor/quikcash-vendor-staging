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
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export default function CreateVendorModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button fontWeight={"medium"} onClick={onOpen}>
        Create Vendor
      </Button>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Vendor</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4" pb={6}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Enter First Name" />
            </FormControl>

            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Enter Last Name" />
            </FormControl>

            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Enter Username" />
            </FormControl>

            <FormControl>
              <FormLabel>User Type</FormLabel>
              <Select variant="filled">
                <option value="agent">Agent</option>
                <option value="vendor">Vendor</option>
                <option value="cashier">Cashier</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Account Limit</FormLabel>
              <InputGroup>
                <InputLeftAddon>NGN</InputLeftAddon>
                <Input type="text" placeholder="Enter Account Limit" />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
