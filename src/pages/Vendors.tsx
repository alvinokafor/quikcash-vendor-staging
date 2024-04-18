import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { VendorSummaryCards, VendorsTable } from "@/components/vendor/modules";

const metaData = {
  title: "QuikCash :: Vendor",
  name: "QuikCash :: Vendor",
  content: "QuikCash :: Vendor",
};

export default function Vendors() {
  return (
    <SEOWrapper metaData={metaData}>
      <AppLayout>
        <Box className="space-y-8">
          <VendorSummaryCards />
          <VendorsTable />
        </Box>
      </AppLayout>
    </SEOWrapper>
  );
}
