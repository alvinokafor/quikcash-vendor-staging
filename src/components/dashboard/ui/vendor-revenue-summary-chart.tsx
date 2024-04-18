import { Pie } from "@ant-design/charts";
import { Box, Flex, Heading, Select } from "@chakra-ui/react";

export default function VendorRevenueSummaryChart() {
  const config = {
    data: [
      { type: "ValuePay", value: 27 },
      { type: "PagaTech", value: 25 },
      { type: "BEDC_CASHIER", value: 18 },
      { type: "OneNumber", value: 15 },
    ],
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Vendor Revenue Chart</Heading>

        <Select width={"150px"} variant="filled">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </Flex>
      <Pie {...config} />
    </Box>
  );
}
