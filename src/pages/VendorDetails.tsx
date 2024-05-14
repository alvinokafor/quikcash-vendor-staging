import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { VendorInfo } from "@/components/vendor/modules";
import VendorTransactionsTable from "@/components/vendor/modules/VendorTransactionsTable";
import { ProtectedRoute } from "@/utils";
import { useParams } from "react-router-dom";
import { VendorAdapter, useVendorQuery } from "@/adapters/Vendors";
import { queryKeys } from "@/lib/constants";

const metaData = {
  title: "QuikCash :: Vendor Details",
  name: "QuikCash :: Vendor Details",
  content: "QuikCash :: Vendor Details",
};

export default function VendorDetails() {
  const { id } = useParams();

  if (!id) return null;

  const { data, isLoading } = useVendorQuery(
    VendorAdapter.getVendorDetails,
    [queryKeys.VENDOR, id],
    id
  );

  const walletRecords = useVendorQuery(
    VendorAdapter.getVendorWalletRecords,
    [queryKeys.VENDOR_WALLET_RECORDS, id],
    id
  );

  console.log(walletRecords.data);

  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            <VendorInfo
              vendor={data}
              vendorWallet={walletRecords.data}
              walletLoading={walletRecords.isLoading}
            />
            <VendorTransactionsTable
              allTransactions={data?.transactions}
              isLoading={isLoading}
            />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
