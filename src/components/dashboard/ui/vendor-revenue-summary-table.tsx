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
} from "@chakra-ui/react";
import { DownloadIcon } from "@radix-ui/react-icons";

export default function VendorRevenueSummaryTable() {
  const vendors = [
    {
      vendor: "ValuePay",
      gross_amount: "11,000.00",
      net_amount: "12,000.00",
      transaction_count: "400",
      commission: "40,000",
    },
    {
      vendor: "PagaTech",
      gross_amount: "11,000.00",
      net_amount: "12,000.00",
      transaction_count: "400",
      commission: "40,000",
    },
    {
      vendor: "BEDC_CASHIER",
      gross_amount: "11,000.00",
      net_amount: "12,000.00",
      transaction_count: "400",
      commission: "40,000",
    },
    {
      vendor: "OneNumber",
      gross_amount: "11,000.00",
      net_amount: "12,000.00",
      transaction_count: "400",
      commission: "40,000",
    },
  ];
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Vendor Revenue Summary</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select width={"150px"} variant="filled">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>

          <Button
            fontWeight={"weight"}
            leftIcon={<DownloadIcon width={20} height={20} />}
          >
            Export CSV
          </Button>
        </Flex>
      </Flex>
      <TableContainer className="h-full">
        <Table variant="simple">
          <TableCaption>Vendor Revenue Summary</TableCaption>
          <Thead>
            <Tr>
              <Th>Vendor</Th>
              <Th>Gross Amount (NGN)</Th>
              <Th>Net Amount (NGN)</Th>
              <Th>Transaction Count</Th>
              <Th>Commission (NGN)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {vendors.map((vendor) => (
              <Tr key={vendor.vendor}>
                <Td>{vendor.vendor}</Td>
                <Td>{vendor.gross_amount}</Td>
                <Td>{vendor.net_amount}</Td>
                <Td>{vendor.transaction_count}</Td>
                <Td>{vendor.commission}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
