import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import {
  TransactionSummaryCards,
  TransactionFilters,
  TransactionsSummary,
  TransactionTable,
} from "@/components/transactions/modules";

const metaData = {
  title: "QuikCash :: Transactions",
  name: "QuikCash :: Transactions",
  content: "QuikCash :: Transactions",
};

export default function Transactions() {
  return (
    <SEOWrapper metaData={metaData}>
      <AppLayout>
        <Box className="space-y-8">
          <TransactionFilters />
          <TransactionSummaryCards />
          <TransactionsSummary />
          <TransactionTable />
        </Box>
      </AppLayout>
    </SEOWrapper>
  );
}
