import { SEOWrapper, AppLayout } from "@/layouts";
import { Box, Spinner } from "@chakra-ui/react";
import { TransactionInfo } from "@/components/transactions/modules";
import { ProtectedRoute } from "@/utils";
import {
  TransactionAdapter,
  useTransactionQuery,
} from "@/adapters/Transactions";
import { useParams } from "react-router-dom";
import { queryKeys } from "@/lib/constants";

const metaData = {
  title: "QuikCash :: Transaction Details",
  name: "QuikCash :: Transaction Details",
  content: "QuikCash :: Transaction Details",
};

export default function TransactionDetails() {
  const { id } = useParams();

  if (!id) return null;

  const { data, isLoading } = useTransactionQuery(
    TransactionAdapter.getTransaction,
    [queryKeys.TRANSACTION, id],
    id
  );

  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            {!isLoading ? (
              <TransactionInfo transaction={data} />
            ) : (
              <Box className="mx-auto mt-20 w-max">
                <Spinner
                  thickness="3px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
              </Box>
            )}
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
