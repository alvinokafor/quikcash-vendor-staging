import { Flex, Box, Heading } from "@chakra-ui/react";
import { Line } from "@ant-design/charts";
import { Transaction } from "@/lib/types/Transactions";
interface IProps {
  isLoading: boolean;
  chartData: Transaction[] | undefined;
}
export default function DailyCashInflow({ isLoading, chartData }: IProps) {
  console.log(chartData);
  console.log(isLoading);
  function getFormattedDate(date: string) {
    const formattedDate = Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(new Date(date));

    return formattedDate;
  }

  const data = chartData?.map((data) => ({
    month: getFormattedDate(data?.transaction_date),
    value: data.amount,
  }));

  const props = {
    data,
    xField: "month",
    yField: "value",
  };
  return (
    <Box className="space-y-4">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>Monthly Transaction Chart</Heading>

        {/* <Select width={"150px"} variant="filled">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select> */}
      </Flex>
      <Line {...props} />
    </Box>
  );
}
