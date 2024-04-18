import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  Box,
  Heading,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
} from "@chakra-ui/react";
import { DownloadIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function TransactionTable() {
  const transactions = [
    {
      name: "Emeka Walter",
      district: "WARRI",
      ref: "190KKJ12",
      amount: "12,000.00",
      units: "220.5Kwh",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      name: "Emeka Walter",
      district: "WARRI",
      ref: "190KKJ12",
      amount: "12,000.00",
      units: "220.5Kwh",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      name: "Emeka Walter",
      district: "WARRI",
      ref: "190KKJ12",
      amount: "12,000.00",
      units: "220.5Kwh",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      name: "Emeka Walter",
      district: "WARRI",
      ref: "190KKJ12",
      amount: "12,000.00",
      units: "220.5Kwh",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      name: "Emeka Walter",
      district: "WARRI",
      ref: "190KKJ12",
      amount: "12,000.00",
      units: "220.5Kwh",
      date: "20th April, 2024",
      status: "Success",
    },
  ];
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>All Transactions</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select width={"200px"} variant="filled">
            <option value="all">All</option>
            <option value="successful">Successful</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
          </Select>

          <Button
            fontWeight={"weight"}
            leftIcon={<DownloadIcon width={20} height={20} />}
            className="w-max"
          >
            CSV
          </Button>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MagnifyingGlassIcon width={20} height={20} />
            </InputLeftElement>
            <Input type="text" placeholder="Search" />
          </InputGroup>
        </Flex>
      </Flex>
      <TableContainer className="h-full">
        <Table variant="simple">
          <TableCaption>Transactions</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>District</Th>
              <Th>Transaction Ref</Th>
              <Th>Amount (NGN)</Th>
              <Th>Units</Th>
              <Th>Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction, index) => (
              <Tr
                _hover={{
                  bg: "gray.gray50",
                }}
                cursor={"pointer"}
                key={index}
              >
                <Td>
                  <Link to={"/transactions/1"}>{transaction.name}</Link>
                </Td>
                <Td>
                  <Link to={"/transactions/1"}>{transaction.district}</Link>
                </Td>
                <Td>
                  <Link to={"/transactions/1"}>{transaction.ref}</Link>
                </Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.units}</Td>
                <Td>{transaction.date}</Td>
                <Td>
                  <Badge colorScheme="green">{transaction.status}</Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
