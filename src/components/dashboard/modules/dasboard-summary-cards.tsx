import { Grid } from "@chakra-ui/react";
import { DashboardCard } from "../ui";

const summary = [
  {
    title: "Vendor Balance (NGN)",
    value: "500.3K",
  },
  {
    title: "Total Transactions",
    value: "400.8K",
  },
  {
    title: "Total Transfers",
    value: "30K",
  },
];

export default function DasboardSummaryCards() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {summary.map((item) => (
        <DashboardCard key={item.title} title={item.title} value={item.value} />
      ))}
    </Grid>
  );
}
