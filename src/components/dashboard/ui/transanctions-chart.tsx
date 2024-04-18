import { Flex, Box, Select, Heading } from "@chakra-ui/react";
import { Line } from "@ant-design/charts";

export default function DailyCashInflow() {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const props = {
    data,
    xField: "year",
    yField: "value",
  };
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Transaction Chart</Heading>

        <Select width={"150px"} variant="filled">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </Flex>
      <Line {...props} />
    </Box>
  );
}
