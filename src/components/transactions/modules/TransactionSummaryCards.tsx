import { Grid } from "@chakra-ui/react";
import { SummaryCard } from "@/components/partials";

const summary = [
  {
    title: "Total Net (NGN)",
    value: "500.3K",
  },
  {
    title: "Total Gross (NGN)",
    value: "400.9K",
  },
  {
    title: "Total Commission (NGN)",
    value: "120K",
  },
];

export default function TransactionSummaryCards() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {summary.map((item) => (
        <SummaryCard key={item.title} title={item.title} value={item.value} />
      ))}
    </Grid>
  );
}
