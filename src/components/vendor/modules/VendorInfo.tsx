import { Heading, Flex, Text, Box, Grid, Badge } from "@chakra-ui/react";
import { FundVendorModal, DisableVendingModal } from "../ui";

export default function VendorInfo() {
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Heading>Emeka Nkwo</Heading>
          <Text>Account Balance: NGN 3,000,000.00</Text>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <FundVendorModal />
          <DisableVendingModal />
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Username
          </Heading>
          <Text fontSize="sm">emekawalter</Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Email
          </Heading>
          <Text fontSize="sm">emeka@gmail.com</Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            User Type
          </Heading>
          <Text fontSize="sm">Agent</Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Vending Status
          </Heading>
          <Text fontSize="sm">
            <Badge colorScheme={"green"}>Active</Badge>
          </Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            NMD Commission Rate(NGN)
          </Heading>
          <Text fontSize="sm">30,000.00</Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Date Created
          </Heading>
          <Text fontSize="sm">20th April, 2024</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
