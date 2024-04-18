import { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  Stack,
  Button,
  Box,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { EyeClosed, EyeOpen } from "@/assets/icons";
// import { apiPrivateInstance } from "@/config";
import { useNavigate } from "react-router-dom";
import { LoginSchema, loginValidator } from "@/lib/validations/authValidator";
import { UserContext, IUserContext } from "@/contexts/UserContext";
import { AuthAdapter, useAuthMutation } from "@/adapters";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { getErrorMessage } from "@/utils";

export default function LoginForm() {
  const toast = useToast();
  const { setUser, setToken } = useContext(UserContext) as IUserContext;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginValidator),
  });

  const { isPending, mutateAsync } = useAuthMutation(AuthAdapter.login, "");

  const handleLogin = async (data: LoginSchema) => {
    try {
      const res = await mutateAsync(data);
      // setUser(res?.data);
      // localStorage.setItem("user", JSON.stringify(res?.data));
      setToken(res?.data);
      localStorage.setItem("accessToken", JSON.stringify(res?.data.access));
      navigate("/dashboard");
      toast({
        position: "top-right",
        title: "Login Successful",
        status: "success",
        duration: 4000,
        isClosable: true,
        containerStyle: {
          backgroundColor: "#027A48",
        },
      });
    } catch (error) {
      console.log(error);
      toast({
        position: "top-right",
        title: "Something went wrong",
        // title: getErrorMessage(error) ?? "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <Box paddingTop={10}>
      <form>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input {...register("email")} id="email" type="email" />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? (
                    <Icon as={EyeOpen} />
                  ) : (
                    <Icon as={EyeClosed} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              isLoading={isPending}
              onClick={handleSubmit(handleLogin)}
              size="lg"
              bg={"purple.600"}
              color={"white"}
              _hover={{
                bg: "purple.400",
              }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
