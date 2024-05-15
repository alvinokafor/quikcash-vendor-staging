import { Grid } from "@chakra-ui/react";
import { SummaryCard } from "@/components/partials";

interface IProps {
  totalSales: number | undefined;
  totalCredit: number | undefined;
  totalComission: number | undefined;
  isLoading: boolean;
}

export default function TransactionSummaryCards({
  totalSales,
  totalCredit,
  totalComission,
  isLoading,
}: IProps) {
  const summary = [
    {
      title: "Total Sales (NGN)",
      value: totalSales,
    },
    {
      title: "Total Credit (NGN)",
      value: totalCredit,
    },
    {
      title: "Total Commission (NGN)",
      value: totalComission,
    },
  ];
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {summary.map((item) => (
        <SummaryCard
          isLoading={isLoading}
          key={item.title}
          title={item.title}
          value={item.value}
        />
      ))}
    </Grid>
  );
}
