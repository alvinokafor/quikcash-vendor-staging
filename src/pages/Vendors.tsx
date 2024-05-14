import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { VendorSummaryCards, VendorsTable } from "@/components/vendor/modules";
import { ProtectedRoute } from "@/utils";
import { useVendorQuery, VendorAdapter } from "@/adapters/Vendors";
import { queryKeys } from "@/lib/constants";

const metaData = {
  title: "QuikCash :: Vendor",
  name: "QuikCash :: Vendor",
  content: "QuikCash :: Vendor",
};

export default function Vendors() {
  const { data, isLoading } = useVendorQuery(
    VendorAdapter.getAllVendors,
    [queryKeys.ALL_VENDORS],
    ""
  );

  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            <VendorSummaryCards
              isLoading={isLoading}
              total_cashier={data?.total_cashier}
              total_vendor={data?.total_vendor}
              total_agent={data?.total_agent}
            />
            <VendorsTable isLoading={isLoading} allVendors={data?.data} />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
