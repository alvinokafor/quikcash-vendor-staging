import { Transaction } from "@/lib/types/Transactions";
import {
  Heading,
  Flex,
  Text,
  Box,
  Grid,
  Badge,
  useToast,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { ClipboardIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { getFormattedDate } from "@/utils";

export default function TransactionInfo({
  transaction,
}: {
  transaction: Transaction | undefined;
}) {
  const toast = useToast();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`ref`);
    toast({
      position: "top-right",
      title: "Copied to Clipboard!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={2}>
          <Heading>{transaction?.transaction_ref}</Heading>

          <ClipboardIcon
            onClick={handleCopyLink}
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
                Account Number
              </Heading>
              <Text fontSize="sm">{transaction?.account}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Transformer
              </Heading>
              <Text fontSize="sm">{transaction?.transformer}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Meter Number
              </Heading>
              <Text fontSize="sm">{transaction?.meter}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Customer Type
              </Heading>
              <Text fontSize="sm">{transaction?.customer_type}</Text>
            </Flex>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="sm"> Transaction Details</Heading>
          </CardHeader>
          <CardBody className="space-y-4">
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Transaction ID
              </Heading>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize="sm">{transaction?.transactionid}</Text>

                <ClipboardIcon
                  onClick={handleCopyLink}
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                SGC
              </Heading>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize="sm">{transaction?.sgc}</Text>

                <ClipboardIcon
                  onClick={handleCopyLink}
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Token
              </Heading>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize="sm">{transaction?.token}</Text>

                <ClipboardIcon
                  onClick={handleCopyLink}
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
              </Flex>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Units (Kwh)
              </Heading>
              <Text fontSize="sm">{transaction?.units}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Amount (NGN)
              </Heading>
              <Text fontSize="sm">{transaction?.amount}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Amount Tendered (NGN)
              </Heading>
              <Text fontSize="sm">{transaction?.amount_tendered}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Vendor
              </Heading>
              <Link to={"/vendors/1"}>
                <Text fontSize="sm">{transaction?.vendor_name}</Text>
              </Link>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Channel
              </Heading>
              <Text fontSize="sm">{transaction?.channel}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Date & Time
              </Heading>
              <Text fontSize="sm">
                {transaction?.transaction_date
                  ? getFormattedDate(transaction?.transaction_date!)
                  : "No Date"}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Badge
                colorScheme={
                  transaction?.status?.toLowerCase() === "successful"
                    ? "green"
                    : transaction?.status?.toLowerCase() === "pending"
                    ? "yellow"
                    : "red"
                }
              >
                {transaction?.status}
              </Badge>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}
