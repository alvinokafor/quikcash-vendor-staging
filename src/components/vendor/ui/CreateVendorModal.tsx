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
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createVendorValidator,
  type CreateVendorSchema,
} from "@/lib/validations/vendorValidator";
import { VendorAdapter, useVendorMutation } from "@/adapters/Vendors";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/constants";

export default function CreateVendorModal() {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVendorSchema>({
    resolver: zodResolver(createVendorValidator),
  });

  const { mutateAsync, isPending } = useVendorMutation(
    VendorAdapter.createVendor,
    ""
  );

  const handleCreateVendor = async (data: CreateVendorSchema) => {
    try {
      await mutateAsync(data);
      onClose();
      queryClient.invalidateQueries({ queryKey: [queryKeys.ALL_VENDORS] });
      toast({
        position: "top-right",
        title: `${data.user_role} has been created`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: "top-right",
        title: "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button fontWeight={"medium"} onClick={onOpen}>
        Create Vendor
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Vendor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form className="space-y-4">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input {...register("email")} placeholder="Enter Email" />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  {...register("first_name")}
                  placeholder="Enter First Name"
                />
                <FormErrorMessage>
                  {errors.first_name && errors.first_name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  {...register("last_name")}
                  placeholder="Enter Last Name"
                />
                <FormErrorMessage>
                  {errors.last_name && errors.last_name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input {...register("username")} placeholder="Enter Username" />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>User Role</FormLabel>
                <Select {...register("user_role")} variant="filled">
                  <option value="agent">Agent</option>
                  <option value="sub_vendor">Sub Vendor</option>
                  <option value="cashier">Cashier</option>
                </Select>
                <FormErrorMessage>
                  {errors.user_role && errors.user_role.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input {...register("password")} placeholder="Enter Password" />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  {...register("password2")}
                  placeholder="Re-enter Password"
                />
                <FormErrorMessage>
                  {errors.password2 && errors.password2.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon>+234</InputLeftAddon>
                  <Input
                    {...register("phone")}
                    type="text"
                    placeholder="Enter Phone Number"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isPending}
              onClick={handleSubmit(handleCreateVendor)}
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
