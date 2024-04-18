import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function RecentTransactionsTable() {
  const transactions = [
    {
      customer_id: "3400",
      amount: "11,000.00",
      status: "Success",
    },
    {
      customer_id: "2100",
      amount: "5,000.00",
      status: "Success",
    },
    {
      customer_id: "1100",
      amount: "7,000.00",
      status: "Success",
    },
    {
      customer_id: "1190",
      amount: "900.00",
      status: "Failed",
    },
    {
      customer_id: "2150",
      amount: "5,000.00",
      status: "Success",
    },
    {
      customer_id: "1170",
      amount: "7,000.00",
      status: "Success",
    },
    {
      customer_id: "1390",
      amount: "900.00",
      status: "Failed",
    },
  ];
  return (
    <Box className="space-y-4">
      <Heading size={"sm"}>Recent Transactions</Heading>
      <TableContainer className="h-full">
        <Table variant="simple">
          <TableCaption>Recent Transactions</TableCaption>
          <Thead>
            <Tr>
              <Th>Customer ID</Th>
              <Th>Amount (NGN)</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.customer_id}>
                <Td>{transaction.customer_id}</Td>
                <Td>{transaction.amount}</Td>
                <Td>
                  <Badge
                    colorScheme={
                      transaction.status === "Success" ? "green" : "red"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
