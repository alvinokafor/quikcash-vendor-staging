import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
  Spinner,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Transaction } from "@/lib/types/Transactions";
import { getFormattedDate } from "@/utils";
import { toast } from "sonner";

export default function TransactionTable({
  allTransactions,
  isLoading,
}: {
  allTransactions: Transaction[] | undefined;
  isLoading: boolean;
}) {
  function convertToCSV() {
    try {
      // Assuming data is an array of objects
      if (!allTransactions?.length) return "";

      // Extract column headers
      const headers = Object.keys(allTransactions[0]);
      const csvRows = allTransactions?.map((row) =>
        headers
          //@ts-ignore
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(",")
      );

      // Add header row
      csvRows.unshift(headers.join(","));

      return csvRows.join("\n");

      function replacer(__key: any, value: string) {
        return value === null ? "" : value; // handle null values
      }
    } catch (error) {
      toast.error("Error converting data");
      return "";
    }
  }

  function downloadCSV(csvString: string, filename: string) {
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownload = () => {
    const csvData = convertToCSV();
    if (csvData) {
      downloadCSV(csvData, "All Transactions");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>All Transactions</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select width={"300px"} variant="filled">
            <option value="all">Funds Reversal</option>
            <option value="successful">Payment Reversal</option>
            <option value="failed">Transfers</option>
            {/* <option value="pending">Pending</option> */}
          </Select>

          <Button
            fontWeight={"weight"}
            leftIcon={<DownloadIcon width={20} height={20} />}
            className="w-max"
            onClick={handleDownload}
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
        {!isLoading ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Vendor Name</Th>
                <Th>Account</Th>
                <Th>Transaction Ref</Th>
                <Th>Customer Type</Th>
                <Th>Amount (NGN)</Th>
                <Th>Tariff Rate (NGN)</Th>
                <Th>Vat (NGN)</Th>
                <Th>Units (Kwh)</Th>
                <Th>Meter</Th>
                <Th>Wallet Type</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allTransactions?.map((transaction) => (
                <Tr
                  _hover={{
                    bg: "gray.gray50",
                  }}
                  cursor={"pointer"}
                  key={transaction.transactionid}
                >
                  <Td>
                    <Link to={`/transactions/${transaction.id}`}>
                      {transaction.vendor_name}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={`/transactions/${transaction.id}`}>
                      {transaction.account}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={`/transactions/${transaction.id}`}>
                      {transaction.transaction_ref}
                    </Link>
                  </Td>
                  <Td className="capitalize">{transaction.customer_type}</Td>
                  <Td>{transaction.amount}</Td>
                  <Td>{transaction.tariff_rate}</Td>
                  <Td>{transaction.vat}</Td>
                  <Td>{transaction.units}</Td>
                  <Td>{transaction.meter}</Td>
                  <Td className="capitalize">{transaction.wallet_type}</Td>
                  <Td>{getFormattedDate(transaction.transaction_date)}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        transaction.status?.toLowerCase() === "successful"
                          ? "green"
                          : transaction.status === "pending"
                          ? "yellow"
                          : "red"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Box className="mx-auto mt-20 w-max">
            <Spinner
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
            />
          </Box>
        )}
        {allTransactions?.length === 0 && (
          <Text className="py-4 text-center">
            No Transactions Found For This Vendor
          </Text>
        )}
      </TableContainer>
    </Box>
  );
}
