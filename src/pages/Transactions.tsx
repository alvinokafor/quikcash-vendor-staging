import { SEOWrapper, AppLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import {
  TransactionSummaryCards,
  TransactionFilters,
  TransactionsSummary,
  TransactionTable,
} from "@/components/transactions/modules";
import { ProtectedRoute } from "@/utils";
import {
  useTransactionQuery,
  TransactionAdapter,
} from "@/adapters/Transactions";
import { queryKeys } from "@/lib/constants";
import { useState } from "react";

const metaData = {
  title: "QuikCash :: Transactions",
  name: "QuikCash :: Transactions",
  content: "QuikCash :: Transactions",
};

export default function Transactions() {
  const [prepaidFilter, setPrepaidFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const getParams = () => {
    if (startDateFilter) {
      return `?start_date=${startDateFilter}`;
    } else if (endDateFilter) {
      return `?end_date=${endDateFilter}`;
    } else if (startDateFilter && endDateFilter) {
      return `?end_date=${endDateFilter}&start_date=${startDateFilter}`;
    } else if (prepaidFilter) {
      return `?customer_type=${prepaidFilter}`;
    } else if (prepaidFilter && startDateFilter) {
      return `?customer_type=${prepaidFilter}&start_date=${startDateFilter}`;
    } else if (prepaidFilter && endDateFilter) {
      return `?customer_type=${prepaidFilter}&end_date=${endDateFilter}`;
    } else if (prepaidFilter && endDateFilter && startDateFilter) {
      return `?customer_type=${prepaidFilter}&end_date=${endDateFilter}&start_date=${startDateFilter}`;
    } else {
      return "";
    }
  };

  const { data, isLoading } = useTransactionQuery(
    TransactionAdapter.getAllTransactions,
    [queryKeys.ALL_TRANSACTIONS, prepaidFilter, startDateFilter, endDateFilter],
    `${getParams()}`
  );

  return (
    <ProtectedRoute>
      <SEOWrapper metaData={metaData}>
        <AppLayout>
          <Box className="space-y-8">
            <TransactionFilters
              setPrepaidFilter={setPrepaidFilter}
              setEndDateFilter={setEndDateFilter}
              setStartDateFilter={setStartDateFilter}
            />
            <TransactionSummaryCards
              totalSales={data?.results?.daily_total_sales}
              totalCredit={0}
              totalComission={data?.results?.total_commision}
              isLoading={isLoading}
            />
            <TransactionsSummary
              dailyComission={data?.results?.daily_total_commission}
              dailySales={data?.results?.daily_total_sales}
              dailyCredit={0}
              isLoading={isLoading}
              chartData={data?.results?.month_transactions}
            />
            <TransactionTable
              isLoading={isLoading}
              allTransactions={data?.results?.data}
            />
          </Box>
        </AppLayout>
      </SEOWrapper>
    </ProtectedRoute>
  );
}
