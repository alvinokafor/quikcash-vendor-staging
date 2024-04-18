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

export default function VendorTransactionsTable() {
  const transactions = [
    {
      ref: "190KKJ12",
      id: "11yi899",
      amount: "12,000.00",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      ref: "190KKJ12",
      id: "11yi899",
      amount: "12,000.00",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      ref: "190KKJ12",
      id: "11yi899",
      amount: "12,000.00",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      ref: "190KKJ12",
      id: "11yi899",
      amount: "12,000.00",
      date: "20th April, 2024",
      status: "Success",
    },
    {
      ref: "190KKJ12",
      id: "11yi899",
      amount: "12,000.00",
      date: "20th April, 2024",
      status: "Success",
    },
  ];
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Vendor Transactions</Heading>

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
          <TableCaption>Vendor Transactions</TableCaption>
          <Thead>
            <Tr>
              <Th>Transaction Ref</Th>
              <Th>Transaction ID</Th>
              <Th>Amount (NGN)</Th>
              <Th>Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction, index) => (
              <Tr key={index}>
                <Td>{transaction.ref}</Td>
                <Td>{transaction.id}</Td>
                <Td>{transaction.amount}</Td>
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
