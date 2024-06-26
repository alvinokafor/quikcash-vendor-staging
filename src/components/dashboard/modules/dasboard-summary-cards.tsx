import { Grid } from "@chakra-ui/react";
import { DashboardCard } from "../ui";
import { useVendorQuery, VendorAdapter } from "@/adapters/Vendors";
import { queryKeys } from "@/lib/constants";
import { useContext } from "react";
import { UserContext, type IUserContext } from "@/contexts/UserContext";
import { AllTransactions } from "@/lib/types/Transactions";

export default function DasboardSummaryCards({
  transactions,
}: {
  transactions: AllTransactions | undefined;
}) {
  const { user } = useContext(UserContext) as IUserContext;

  const { data, isLoading } = useVendorQuery(
    VendorAdapter.getVendorWalletRecords,
    [queryKeys.VENDOR_WALLET_RECORDS, user?.username!],
    user?.username!
  );

  return (
    <Grid
      gap={4}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
    >
      <DashboardCard
        title={"Vendor Balance"}
        value={data?.vendor_wallet[0].balance}
        isLoading={isLoading}
      />
      <DashboardCard
        title={"Total Prepaid Sales"}
        value={transactions?.results.total_prepaid_sales}
        isLoading={false}
      />
      <DashboardCard
        title={"Total Postpaid Sales"}
        value={transactions?.results.total_postpaid_sales}
        isLoading={false}
      />
    </Grid>
  );
}
