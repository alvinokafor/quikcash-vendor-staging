import { Heading, Flex, Text, Box, Grid, Skeleton } from "@chakra-ui/react";
import { FundVendorModal, DisableVendingModal } from "../ui";
import { type VendorWallet, type VendorDetails } from "@/lib/types/Vendors";
import { getFormattedAmount, getFormattedDate } from "@/utils";

export default function VendorInfo({
  vendor,
  vendorWallet,
  walletLoading,
}: {
  vendor: VendorDetails | undefined;
  vendorWallet: VendorWallet | undefined;
  walletLoading: boolean;
}) {
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Heading>{vendor?.vendor.username}</Heading>
          <Text>
            Account Balance:{" "}
            {!walletLoading ? (
              getFormattedAmount(
                Number(vendorWallet?.vendor_wallet[0].balance),
                "NGN"
              )
            ) : (
              <Skeleton />
            )}
          </Text>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <FundVendorModal vendor={vendor} />
          <DisableVendingModal />
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {/* <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Username
          </Heading>
          <Text fontSize="sm">emekawalter</Text>
        </Flex> */}
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Email
          </Heading>
          <Text fontSize="sm">{vendor?.vendor.email}</Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            User Role
          </Heading>
          <Text className="capitalize" fontSize="sm">
            {vendor?.vendor.role}
          </Text>
        </Flex>
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Wallet Type
          </Heading>
          <Text className="capitalize" fontSize="sm">
            {!walletLoading ? (
              vendorWallet?.vendor_wallet[0].walletType
            ) : (
              <Skeleton />
            )}
          </Text>
        </Flex>
        {/* <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Vending Status
          </Heading>
          <Text fontSize="sm">
            <Badge colorScheme={"green"}>Active</Badge>
          </Text>
        </Flex> */}
        {/* <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            NMD Commission Rate(NGN)
          </Heading>
          <Text fontSize="sm">30,000.00</Text>
        </Flex> */}
        <Flex direction={"column"} gap={2}>
          <Heading size="xs" textTransform="uppercase">
            Date Created
          </Heading>
          <Text fontSize="sm">
            {vendor?.vendor.date_added
              ? getFormattedDate(vendor?.vendor.date_added)
              : "No Date"}
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
