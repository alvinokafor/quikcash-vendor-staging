import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import {
  DasboardSummaryCards,
  TransactionsSummary,
  VendorRevenueSummary,
} from "@/components/dashboard/modules";
import { DistrictSalesSummaryTable } from "@/components/dashboard/ui";

import { ProtectedRoute } from "@/utils";

const metaData = {
  title: "QuikCash :: Dashboard",
  name: "QuikCash :: Dashboard",
  content: "QuikCash :: Dashboard",
};

export default function Home() {
  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            <DasboardSummaryCards />
            <TransactionsSummary />
            <VendorRevenueSummary />
            <DistrictSalesSummaryTable />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
