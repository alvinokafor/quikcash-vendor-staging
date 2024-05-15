import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { Payments, Dashboard, Customers, Settings } from "@/assets/icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import Logout from "../auth/Logout";

const navLinks = [
  { name: "Dashboard", link: "/dashboard", icon: <Dashboard /> },
  { name: "Vendors", link: "/vendors", icon: <Customers /> },
  { name: "Transactions", link: "/transactions", icon: <Payments /> },
  { name: "Settings", link: "/settings", icon: <Settings /> },
];

export default function SideBar() {
  const pathName = useLocation().pathname;
  return (
    <Box
      minH="100vh"
      pos={"fixed"}
      width="311px"
      paddingInline={"16px"}
      borderRight="1px"
      borderColor={"#EAECF0"}
      className="hidden xl:block"
    >
      <Flex alignItems={"center"}>
        <Image padding={"24px"} src={Logo} />
        <Text fontSize={18} fontWeight={"medium"}>
          QuikCash
        </Text>
      </Flex>

      <Flex flexDirection={"column"} gap={20} justifyContent={"space-between"}>
        <Flex height={"max-content"} flexDirection={"column"} gap={2}>
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link}>
              <Box
                paddingInline={"12px"}
                paddingBlock={"8px"}
                borderRadius={"6px"}
                _hover={{
                  bg: "gray.gray50",
                }}
                backgroundColor={
                  pathName.includes(item.link) ? "gray.gray50" : ""
                }
              >
                <Flex>
                  <Box mr={"12px"}>{item.icon}</Box>

                  <Text fontWeight={"medium"}>{item.name}</Text>
                </Flex>
              </Box>
            </Link>
          ))}
        </Flex>
        <Spacer />

        <Flex flexDirection={"column"} gap={4}>
          <Link to={"/help-center"}>
            <Box
              paddingInline={"12px"}
              paddingBlock={"8px"}
              borderRadius={"6px"}
              _hover={{
                bg: "gray.gray50",
              }}
              backgroundColor={pathName === "/help-center" ? "gray.gray50" : ""}
            >
              <Flex alignItems={"center"}>
                <Box mr={"12px"}>
                  <QuestionMarkCircledIcon width={20} height={20} />
                </Box>

                <Text fontWeight={"medium"}>Help Center</Text>
              </Flex>
            </Box>
          </Link>

          <Logout />
        </Flex>
      </Flex>
    </Box>
  );
}
