import { Grid } from "@chakra-ui/react";
import { SummaryCard } from "@/components/partials";

const summary = [
  {
    title: "Available Balance",
    value: "500.3K",
  },
  {
    title: "Total Vendors",
    value: "40",
  },
  {
    title: "Total Agents",
    value: "12",
  },
  {
    title: "Total Cashiers",
    value: "15",
  },
];

export default function VendorSummaryCards() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {summary.map((item) => (
        <SummaryCard key={item.title} title={item.title} value={item.value} />
      ))}
    </Grid>
  );
}
