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
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FundVendorWalletSchema,
  fundVendorWalletValidator,
} from "@/lib/validations/vendorValidator";
import { useVendorMutation, VendorAdapter } from "@/adapters/Vendors";
import { VendorDetails } from "@/lib/types/Vendors";

export default function FundVendorModal({
  vendor,
}: {
  vendor: VendorDetails | undefined;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { register, handleSubmit } = useForm<FundVendorWalletSchema>({
    resolver: zodResolver(fundVendorWalletValidator),
  });

  const { mutateAsync, isPending } = useVendorMutation(
    VendorAdapter.fundVendorWallet,
    ""
  );

  const handleFundVendorWallet = async (data: FundVendorWalletSchema) => {
    try {
      await mutateAsync({
        amount: data.amount,
        receiver: vendor?.vendor.id,
      });
      toast({
        position: "top-right",
        title: `Vendor Wallet has been funded`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: "top-right",
        //@ts-ignore
        title: error.response.data.error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
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
              <FormLabel>Amount to Fund</FormLabel>
              <InputGroup>
                <InputLeftAddon>NGN</InputLeftAddon>
                <Input
                  {...register("amount")}
                  type="text"
                  placeholder="Enter Amount to Fund"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleSubmit(handleFundVendorWallet)}
              isLoading={isPending}
              colorScheme="blue"
              mr={3}
            >
              Fund
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
