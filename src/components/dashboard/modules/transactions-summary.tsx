import { Grid, GridItem } from "@chakra-ui/react";
import { TransanctionsChart, RecentTransactionsTable } from "../ui";

export default function TransactionsSummary() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={2}>
        <TransanctionsChart />
      </GridItem>
      <GridItem colSpan={1}>
        <RecentTransactionsTable />
      </GridItem>
    </Grid>
  );
}
