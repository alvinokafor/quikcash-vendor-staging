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
import { useNavigate } from "react-router-dom";
import { LoginSchema, loginValidator } from "@/lib/validations/authValidator";
import { UserContext, IUserContext } from "@/contexts/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User } from "@/lib/types/User";

export default function LoginForm() {
  const toast = useToast();
  const [isPending, setIsPending] = useState(false);
  const { setUser, setToken } = useContext(UserContext) as IUserContext;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginValidator),
  });

  const watchFields = watch(["email", "password"]);

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: (variables: LoginSchema) => AuthAdapter.login(variables, ""),
  // });

  // const { isPending, mutateAsync } = useAuthMutation(AuthAdapter.login, "");

  // const handleLogin = async (data: LoginSchema) => {
  //   try {
  //     const res = await mutateAsync(data);
  //     // setUser(res?.data);
  //     // localStorage.setItem("user", JSON.stringify(res?.data));
  //     setToken(res?.data);
  //     localStorage.setItem("accessToken", JSON.stringify(res?.data.access));
  //     navigate("/dashboard");
  //     toast({
  //       position: "top-right",
  //       title: "Login Successful",
  //       status: "success",
  //       duration: 4000,
  //       isClosable: true,
  //       containerStyle: {
  //         backgroundColor: "#027A48",
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     toast({
  //       position: "top-right",
  //       title: "Something went wrong",
  //       // title: getErrorMessage(error) ?? "Something went wrong",
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   }
  // };

  // const handleSendOTP = async () => {
  //   try {
  //     await axios.post(
  //       `http://165.227.77.33:5001/api/initiate-otp/`,
  //       {
  //         email: watchFields[0],
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleLogin = () => {
    if (!watchFields[0] || !watchFields[1]) {
      toast({
        position: "top-right",
        title: "Please fill in all form fields",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    setIsPending(true);
    axios
      .post(`http://165.227.77.33:5001/api/login/`, {
        email: watchFields[0],
        password: watchFields[1],
      })
      .then((response) => {
        const accesstoken = response.data.access;
        const user: User = jwtDecode(accesstoken);
        console.log(user);
        //@ts-ignore
        setUser(user);
        setToken(accesstoken);
        localStorage.setItem("accessToken", accesstoken);
        localStorage.setItem("user", JSON.stringify(user));
        setIsPending(false);
        // handleSendOTP();
        // user.two_factor_enabled
        //   ? toast({
        //       position: "top-right",
        //       title: "An OTP Has Been Sent to Your Email",
        //       status: "success",
        //       duration: 4000,
        //       isClosable: true,
        //     })
        //   : toast({
        //       position: "top-right",
        //       title: "Login Successful",
        //       status: "success",
        //       duration: 4000,
        //       isClosable: true,
        //     });
        // user.two_factor_enabled
        //   ? navigate(`/verify-email?email=${watchFields[0]}`)
        //   : navigate("/dashboard");
        navigate("/dashboard");
      })
      .catch(() => {
        setIsPending(false);
        toast({
          position: "top-right",
          title: "Something went wrong",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
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
