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
  Select,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createVendorWalletValidator,
  type CreateVendorWalletSchema,
} from "@/lib/validations/vendorValidator";
import { VendorAdapter, useVendorMutation } from "@/adapters/Vendors";
import { Vendor } from "@/lib/types/Vendors";

export default function CreateVendorWallet({
  allVendors,
}: {
  allVendors: Vendor[] | undefined;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVendorWalletSchema>({
    resolver: zodResolver(createVendorWalletValidator),
  });

  const { mutateAsync, isPending } = useVendorMutation(
    VendorAdapter.createVendorWallet,
    ""
  );

  const handleCreateVendorWallet = async (data: CreateVendorWalletSchema) => {
    try {
      await mutateAsync(data);
      toast({
        position: "top-right",
        title: `Vendor Wallet has been created`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: "top-right",
        //@ts-ignore
        title: error.response.data[0],
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button fontWeight={"medium"} onClick={onOpen}>
        Create Vendor Wallet
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Vendor Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form className="space-y-4">
              <FormControl>
                <FormLabel>Vendor</FormLabel>
                <Select
                  className="capitalize"
                  {...register("vendorname", { valueAsNumber: true })}
                  variant="filled"
                >
                  {allVendors?.map((vendor, index) => (
                    <option
                      key={index}
                      className="capitalize"
                      value={vendor.user}
                    >
                      {vendor.first_name} {vendor.last_name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.vendorname && errors.vendorname.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Wallet Type</FormLabel>
                <Select {...register("wallet_type")} variant="filled">
                  <option value="debit">Debit</option>
                  <option value="credit">Credit</option>
                </Select>
                <FormErrorMessage>
                  {errors.wallet_type && errors.wallet_type.message}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isPending}
              onClick={handleSubmit(handleCreateVendorWallet)}
              colorScheme="blue"
              mr={3}
            >
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
