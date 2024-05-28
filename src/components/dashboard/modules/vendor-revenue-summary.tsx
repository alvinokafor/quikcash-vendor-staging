import { Grid, GridItem } from "@chakra-ui/react";
import { VendorRevenueSummaryTable } from "../ui";
import { CurrentVendorDetails } from "@/lib/types/Transactions";
import { Dispatch, SetStateAction } from "react";

export default function VendorRevenueSummary({
  data,
  isLoading,
  setVendorRevenueFilter,
}: {
  data: CurrentVendorDetails | undefined;
  isLoading: boolean;
  setVendorRevenueFilter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={3}>
        <VendorRevenueSummaryTable
          data={data}
          isLoading={isLoading}
          setVendorRevenueFilter={setVendorRevenueFilter}
        />
      </GridItem>
      {/* <GridItem colSpan={1}>
        <VendorRevenueSummaryChart />
      </GridItem> */}
    </Grid>
  );
}
