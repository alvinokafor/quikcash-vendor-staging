import { Grid, GridItem } from "@chakra-ui/react";
import { VendorRevenueSummaryTable } from "../ui";
import { CurrentVendorDetails } from "@/lib/types/Transactions";

export default function VendorRevenueSummary({
  data,
  isLoading,
}: {
  data: CurrentVendorDetails | undefined;
  isLoading: boolean;
}) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={3}>
        <VendorRevenueSummaryTable data={data} isLoading={isLoading} />
      </GridItem>
      {/* <GridItem colSpan={1}>
        <VendorRevenueSummaryChart />
      </GridItem> */}
    </Grid>
  );
}
