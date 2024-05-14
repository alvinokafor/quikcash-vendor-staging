import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Box,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { EyeClosed, EyeOpen } from "@/assets/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function VerifyEmailForm() {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const [isPending, setIsPending] = useState(false);
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const email = searchParams.get("email");

  const handleVerifyEmail = () => {
    setIsPending(true);
    axios
      .post(
        `http://165.227.77.33:5001/api/verify-otp/`,
        {
          email: email,
          otp: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_response) => {
        setIsPending(false);
        toast({
          position: "top-right",
          title: "Login Successful",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
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
          <FormControl id="password" isRequired>
            <FormLabel>Enter OTP</FormLabel>
            <InputGroup>
              <Input
                onChange={(e) => setOtp(e.target.value)}
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
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              isLoading={isPending}
              onClick={handleVerifyEmail}
              size="lg"
              bg={"purple.600"}
              color={"white"}
              _hover={{
                bg: "purple.400",
              }}
            >
              Verify Email
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
