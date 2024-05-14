import { useMutation, useQuery } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import ApiService from "./ApiService";
import {
  type AllTransactions,
  type Transaction,
} from "@/lib/types/Transactions";

// api service initiliazer
const transactionsService = new ApiService("/transactions/");

// mutation utility
function useTransactionMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (payload: T) => mutationCallback(payload, params),
  });
}

/* query utility
 **other options from tanstack query can be added to this utility function** */
function useTransactionQuery<B>(
  queryCallback: QueryCallBack<B>,
  queryKey: string[],
  slug: string
) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(slug),
  });
}

const TransactionAdapter = {
  getAllTransactions: async function (params: string) {
    const res = transactionsService.getAll<AllTransactions>(`${params}`);
    return res;
  },
  getTransaction: async function (params: string) {
    const res = transactionsService.getAll<Transaction>(`${params}/`);
    return res;
  },
};

export { TransactionAdapter, useTransactionQuery, useTransactionMutation };
