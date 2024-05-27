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
} from "@chakra-ui/react";
import { DownloadIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function DistrictSalesSummaryTable() {
  const districts = [
    // {
    //   paying_district: "ADO EKITI",
    //   gross_amount: "11,000.00",
    //   net_amount: "12,000.00",
    //   transaction_count: "400",
    // },
    // {
    //   paying_district: "AGBOR",
    //   gross_amount: "11,000.00",
    //   net_amount: "12,000.00",
    //   transaction_count: "400",
    // },
    // {
    //   paying_district: "AKURE",
    //   gross_amount: "11,000.00",
    //   net_amount: "12,000.00",
    //   transaction_count: "400",
    // },
    // {
    //   paying_district: "ASABA",
    //   gross_amount: "11,000.00",
    //   net_amount: "12,000.00",
    //   transaction_count: "400",
    // },
    // {
    //   paying_district: "AUCHI",
    //   gross_amount: "11,000.00",
    //   net_amount: "12,000.00",
    //   transaction_count: "400",
    // },
  ];
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>District Sales Summary</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select width={"200px"} variant="filled">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>

          <Button
            fontWeight={"weight"}
            leftIcon={<DownloadIcon width={20} height={20} />}
            className="w-max"
          >
            CSV
          </Button>

          {/* <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MagnifyingGlassIcon width={20} height={20} />
            </InputLeftElement>
            <Input type="text" placeholder="Search" />
          </InputGroup> */}
        </Flex>
      </Flex>
      <TableContainer className="h-full">
        <Table variant="simple">
          <TableCaption>Vendor Revenue Summary</TableCaption>
          <Thead>
            <Tr>
              <Th>Paying Districts</Th>
              <Th>Gross Amount (NGN)</Th>
              <Th>Net Amount (NGN)</Th>
              <Th>Transaction Count</Th>
            </Tr>
          </Thead>
          {/* <Tbody>
            {districts.map((district) => (
              <Tr key={district.paying_district}>
                <Td>{district.paying_district}</Td>
                <Td>{district.gross_amount}</Td>
                <Td>{district.net_amount}</Td>
                <Td>{district.transaction_count}</Td>
              </Tr>
            ))}
          </Tbody> */}
        </Table>
      </TableContainer>
    </Box>
  );
}
