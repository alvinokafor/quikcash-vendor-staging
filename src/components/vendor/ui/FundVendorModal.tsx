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

export default function FundVendorModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button fontWeight={"medium"} onClick={onOpen}>
        Fund Vendor
      </Button>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fund Vendor</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4" pb={6}>
            <FormControl>
              <FormLabel>Select Vendor</FormLabel>
              <Select variant="filled">
                <option value="agent">Emeka Nkwo</option>
                <option value="vendor">Alvin Chinedu</option>
                <option value="cashier">Walter Ibe</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Amount to Fund</FormLabel>
              <InputGroup>
                <InputLeftAddon>NGN</InputLeftAddon>
                <Input type="text" placeholder="Enter Amount to Fund" />
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
