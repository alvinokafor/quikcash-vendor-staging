import { Grid, GridItem } from "@chakra-ui/react";
import { VendorRevenueSummaryTable, VendorRevenueSummaryChart } from "../ui";

export default function VendorRevenueSummary() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={2}>
        <VendorRevenueSummaryTable />
      </GridItem>
      <GridItem colSpan={1}>
        <VendorRevenueSummaryChart />
      </GridItem>
    </Grid>
  );
}
