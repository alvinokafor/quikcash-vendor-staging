import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import { TransactionInfo } from "@/components/transactions/modules";

const metaData = {
  title: "QuikCash :: Transaction Details",
  name: "QuikCash :: Transaction Details",
  content: "QuikCash :: Transaction Details",
};

export default function TransactionDetails() {
  return (
    <SEOWrapper metaData={metaData}>
      <AppLayout>
        <Box className="space-y-8">
          <TransactionInfo />
        </Box>
      </AppLayout>
    </SEOWrapper>
  );
}
