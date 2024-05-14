import { Grid } from "@chakra-ui/react";
import { SummaryCard } from "@/components/partials";

interface IProps {
  total_vendor: number | undefined;
  total_agent: number | undefined;
  total_cashier: number | undefined;
  isLoading: boolean;
}

export default function VendorSummaryCards({
  total_vendor,
  total_agent,
  total_cashier,
  isLoading,
}: IProps) {
  console.log(total_agent);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      <SummaryCard title={"Available Balance"} value={0} isLoading={isLoading} />
      <SummaryCard title={"Total Vendors"} value={total_vendor} isLoading={isLoading} />
      <SummaryCard title={"Total Agents"} value={total_agent} isLoading={isLoading} />
      <SummaryCard title={"Total Cashiers"} value={total_cashier} isLoading={isLoading} />
    </Grid>
  );
}
