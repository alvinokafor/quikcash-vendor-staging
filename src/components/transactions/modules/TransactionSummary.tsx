import { Grid, GridItem } from "@chakra-ui/react";
import { TransanctionsChart } from "@/components/dashboard/ui";
import { DailyCashInflow } from "../ui";
import { Transaction } from "@/lib/types/Transactions";

interface IProps {
  dailySales: number | undefined;
  dailyCredit: number;
  dailyComission: number | null | undefined;
  isLoading: boolean;
  chartData: Transaction[] | undefined;
}

export default function TransactionsSummary({
  dailySales,
  dailyComission,
  dailyCredit,
  isLoading,
  chartData,
}: IProps) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={2}>
        <TransanctionsChart isLoading={isLoading} chartData={chartData} />
      </GridItem>
      <GridItem colSpan={1}>
        <DailyCashInflow
          dailySales={dailySales}
          dailyComission={dailyComission}
          dailyCredit={dailyCredit}
          isLoading={isLoading}
        />
      </GridItem>
    </Grid>
  );
}
