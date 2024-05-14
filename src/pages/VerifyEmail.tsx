import { Box, Flex, Image, Text } from "@chakra-ui/react";
import VerifyEmailForm from "@/components/auth/VerifyEmailForm";
import image from "../assets/loginBg.png";
import logo from "../assets/logo.svg";
import { SEOWrapper } from "@/layouts";

const metaData = {
  title: "QuikCash :: Verify Email",
  name: "QuikCash :: Verify Email",
  content: "QuikCash :: Verify Email",
};

export default function VerifyEmail() {
  return (
    <SEOWrapper metaData={metaData}>
      <Flex>
        <Box
          display={{ base: "none", md: "block" }}
          w={["100%", "100%", "100%", "50%", "50%"]}
          className="h-screen"
        >
          <Image src={image} height={"100%"} />
        </Box>
        <Box w={["100%", "100%", "100%", "50%", "50%"]} px="6%" pt="96px">
          <Image src={logo} />
          <Text
            color={"gray.gray600"}
            fontWeight={"400"}
            fontSize={"32px"}
            mt="24px"
          ></Text>
          <Text
            color={"gray.gray600"}
            fontWeight={"600"}
            fontSize={"48px"}
            textTransform={"capitalize"}
          >
            QuikCash
          </Text>

          <VerifyEmailForm />
        </Box>
      </Flex>
    </SEOWrapper>
  );
}
