import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function DailyCashInflow() {
  return (
    <Box className="space-y-4">
      <Heading size={"sm"}>Daily Cash Inflow</Heading>
      <TableContainer className="h-full">
        <Table variant="simple">
          <TableCaption>Daily Cash Inflow for 20th April, 2023</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>App Commission</Td>
              <Td>5,000.00</Td>
            </Tr>
            <Tr>
              <Td>Net Income</Td>
              <Td>4,000.00</Td>
            </Tr>
            <Tr>
              <Td>Gross Income</Td>
              <Td>10,000.00</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
