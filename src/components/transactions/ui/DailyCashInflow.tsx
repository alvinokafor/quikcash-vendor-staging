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
  Spinner,
} from "@chakra-ui/react";

interface IProps {
  dailySales: number | undefined;
  dailyCredit: number;
  dailyComission: number | null | undefined;
  isLoading: boolean;
}

export default function DailyCashInflow({
  dailySales,
  dailyComission,
  dailyCredit,
  isLoading,
}: IProps) {
  const currentDate = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  }).format(new Date());
  return (
    <Box className="space-y-4">
      <Heading size={"sm"}>Daily Cash Inflow</Heading>
      {!isLoading ? (
        <TableContainer className="h-full">
          <Table variant="simple">
            <TableCaption>Daily Cash Inflow for {currentDate}</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>App Commission</Td>
                <Td>{dailyComission}</Td>
              </Tr>
              <Tr>
                <Td>Sales Income</Td>
                <Td>{dailySales}</Td>
              </Tr>
              <Tr>
                <Td>Credit Income</Td>
                <Td>{dailyCredit}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
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
    </Box>
  );
}
