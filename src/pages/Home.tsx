import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import {
  DasboardSummaryCards,
  // TransactionsSummary,
  VendorRevenueSummary,
} from "@/components/dashboard/modules";
import { DistrictSalesSummaryTable } from "@/components/dashboard/ui";
import { ProtectedRoute } from "@/utils";
import { useVendorQuery, VendorAdapter } from "@/adapters/Vendors";
import { queryKeys } from "@/lib/constants";
import {
  useTransactionQuery,
  TransactionAdapter,
} from "@/adapters/Transactions";
import { useState } from "react";

const metaData = {
  title: "QuikCash :: Dashboard",
  name: "QuikCash :: Dashboard",
  content: "QuikCash :: Dashboard",
};

export default function Home() {
  const [vendorRevenueFilter, setVendorRevenueFilter] = useState("");

  const { data, isLoading } = useVendorQuery(
    VendorAdapter.getCurrentVendorDetails,
    [queryKeys.CURRENT_VENDOR_DETAILS, vendorRevenueFilter],
    vendorRevenueFilter
  );

  const allTransactions = useTransactionQuery(
    TransactionAdapter.getAllTransactions,
    [queryKeys.ALL_TRANSACTIONS],
    ``
  );

  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            <DasboardSummaryCards transactions={allTransactions.data} />
            {/* <TransactionsSummary /> */}
            <VendorRevenueSummary
              isLoading={isLoading}
              data={data}
              setVendorRevenueFilter={setVendorRevenueFilter}
            />
            <DistrictSalesSummaryTable />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
