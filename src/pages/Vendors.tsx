import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { VendorSummaryCards, VendorsTable } from "@/components/vendor/modules";
import { ProtectedRoute } from "@/utils";
import { useVendorQuery, VendorAdapter } from "@/adapters/Vendors";
import { queryKeys } from "@/lib/constants";
import { useState } from "react";

const metaData = {
  title: "QuikCash :: Vendor",
  name: "QuikCash :: Vendor",
  content: "QuikCash :: Vendor",
};

export default function Vendors() {
  const [filter, setFilter] = useState("");

  const { data, isLoading } = useVendorQuery(
    VendorAdapter.getAllVendors,
    [queryKeys.ALL_VENDORS, filter],
    `?role=${filter}`
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
            <VendorsTable
              setFilter={setFilter}
              isLoading={isLoading}
              allVendors={data?.data}
            />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
