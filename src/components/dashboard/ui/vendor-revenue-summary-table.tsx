import { CurrentVendorDetails } from "@/lib/types/Transactions";
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
import { getFormattedAmount } from "@/utils";
import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";

export default function VendorRevenueSummaryTable({
  data,
  isLoading,
  setVendorRevenueFilter,
}: {
  data: CurrentVendorDetails | undefined;
  isLoading: boolean;
  setVendorRevenueFilter: Dispatch<SetStateAction<string>>;
}) {
  function convertToCSV() {
    try {
      // Assuming data is an array of objects
      if (!data?.alluser_revenue_summary?.length) return "";

      // Extract column headers
      const headers = Object.keys(data?.alluser_revenue_summary[0]);
      const csvRows = data?.alluser_revenue_summary.map((row) =>
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
      downloadCSV(csvData, "Vendor Revenue Summary");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Vendor Revenue Summary</Heading>

        <Flex alignItems={"center"} gap={4}>
          <Select
            onChange={(e) => setVendorRevenueFilter(e.target.value)}
            width={"150px"}
            variant="filled"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>

          <Button
            fontWeight={"weight"}
            leftIcon={<DownloadIcon width={20} height={20} />}
            onClick={handleDownload}
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
              <Th>Total Transaction Volume</Th>
              <Th>Commission (NGN)</Th>
              <Th>Total VAT (NGN)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.alluser_revenue_summary.map((vendor) => (
              <Tr key={vendor.id}>
                <Td>{vendor.username}</Td>
                <Td>{getFormattedAmount(vendor.total_amount, "NGN")}</Td>
                <Td>{getFormattedAmount(vendor.total_net_amount, "NGN")}</Td>
                <Td>{getFormattedAmount(vendor.total_transactions, "NGN")}</Td>
                <Td>{getFormattedAmount(vendor.total_commission, "NGN")}</Td>
                <Td> {getFormattedAmount(vendor.total_vat, "NGN")}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
