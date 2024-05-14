import { useContext, useState } from "react";
import {
  Box,
  Heading,
  Grid,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";
import { UserContext, type IUserContext } from "@/contexts/UserContext";
import { AuthAdapter, useAuthMutation } from "@/adapters";
import { toast } from "sonner";
import * as Switch from "@radix-ui/react-switch";

export default function AccountInfo() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const { user } = useContext(UserContext) as IUserContext;
  const { mutateAsync } = useAuthMutation(AuthAdapter.toggle2FA, "");

  const handleToggle2FA = async (checked: boolean) => {
    setTwoFactorEnabled(!twoFactorEnabled);
    try {
      const res = await mutateAsync({ two_factor_enabled: checked });
      console.log(res);

      checked
        ? toast.success(
            "Two Factor Authentication Has Been Enabled On Your Account"
          )
        : toast.warning(
            "Two Factor Authentication Has Been Disabled On Your Account"
          );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box className="space-y-4">
      <Heading size={"md"}>Account Information</Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Card>
          <CardHeader>
            <Heading size="sm"> User Details</Heading>
          </CardHeader>
          <CardBody className="space-y-4">
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text fontSize="sm">
                {user?.first_name ? user?.first_name : "No Name Attached"}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Username
              </Heading>
              <Text fontSize="sm">{user?.username}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Verified
              </Heading>
              <Text fontSize="sm">
                <Badge colorScheme={user?.verified ? "green" : "yellow"}>
                  {user?.verified ? "Verified" : "Not Verified"}
                </Badge>
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text fontSize="sm">{user?.email}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                User Role
              </Heading>
              <Text className="capitalize" fontSize="sm">
                {user?.role}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Account Status
              </Heading>
              <Text fontSize="sm">
                <Badge colorScheme={"green"}>active</Badge>
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Vending Status
              </Heading>
              <Text fontSize="sm">
                <Badge colorScheme={"green"}>active</Badge>
              </Text>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="sm">Security Settings</Heading>
          </CardHeader>
          <CardBody className="space-y-4">
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Email 2FA Verification
              </Heading>

              <Switch.Root
                defaultChecked={user?.two_factor_enabled}
                onCheckedChange={(checked: boolean) => handleToggle2FA(checked)}
                className="w-[42px] h-[25px] bg-gray-200 rounded-full relative shadow-blackA4  data-[state=checked]:bg-blue-600 outline-none cursor-default"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
