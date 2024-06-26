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
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { ExitIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export default function Logout({ renderAs = "button" }: { renderAs?: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    }

    navigate("/");
  };
  return (
    <>
      <Box
        paddingInline={renderAs === "button" ? "12px" : "0px"}
        paddingBlock={renderAs === "button" ? "8px" : "opx"}
        borderRadius={"6px"}
        _hover={{
          bg: "gray.gray50",
        }}
        className="cursor-pointer"
        onClick={onOpen}
      >
        <Flex alignItems={"center"}>
          {renderAs === "button" && (
            <Box mr={"12px"}>
              <ExitIcon width={20} height={20} />
            </Box>
          )}

          <Text fontWeight={renderAs === "button" ? "medium" : "regular"}>
            Logout
          </Text>
        </Flex>
      </Box>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This action will log you out of your account</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleLogout} variant="ghost">
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
