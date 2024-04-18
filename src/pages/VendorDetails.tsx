import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { VendorInfo } from "@/components/vendor/modules";
import VendorTransactionsTable from "@/components/vendor/modules/VendorTransactionsTable";

const metaData = {
  title: "QuikCash :: Vendor Details",
  name: "QuikCash :: Vendor Details",
  content: "QuikCash :: Vendor Details",
};

export default function VendorDetails() {
  return (
    <SEOWrapper metaData={metaData}>
      <AppLayout>
        <Box className="space-y-8">
          <VendorInfo />
          <VendorTransactionsTable />
        </Box>
      </AppLayout>
    </SEOWrapper>
  );
}
