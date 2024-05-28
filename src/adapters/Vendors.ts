import { useMutation, useQuery } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import ApiService from "./ApiService";
import {
  type CreateVendorSchema,
  type CreateVendorWalletSchema,
  type FundVendorWalletSchema,
  type WithdrawFromWalletSchema,
} from "@/lib/validations/vendorValidator";
import {
  type AllVendors,
  type VendorDetails,
  type VendorWallet,
} from "@/lib/types/Vendors";
import { CurrentVendorDetails } from "@/lib/types/Transactions";

// api service initiliazer
const vendorService = new ApiService("");

// mutation utility
function useVendorMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (payload: T) => mutationCallback(payload, params),
  });
}

/* query utility
 **other options from tanstack query can be added to this utility function** */
function useVendorQuery<B>(
  queryCallback: QueryCallBack<B>,
  queryKey: string[],
  slug: string
) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(slug),
  });
}

const VendorAdapter = {
  createVendor: async function (payload: CreateVendorSchema, _params: string) {
    const res = vendorService.mutate("create_vendor/", payload, "JSON", "POST");
    return res;
  },
  createVendorWallet: async function (
    payload: CreateVendorWalletSchema,
    _params: string
  ) {
    const res = vendorService.mutate("create-wallet/", payload, "JSON", "POST");
    return res;
  },
  getAllVendors: async function (_params: string) {
    const res = vendorService.getAll<AllVendors>("/vendors/");
    return res;
  },
  getVendorDetails: async function (params: string) {
    const res = vendorService.getAll<VendorDetails>(
      `/vendors-details/${params}/`
    );
    return res;
  },
  fundVendorWallet: async function (
    payload: FundVendorWalletSchema & { receiver: string | number | undefined },
    _params: string
  ) {
    const res = vendorService.mutate("fund_wallet/", payload, "JSON", "POST");
    return res;
  },
  withdrawFromWallet: async function (
    payload: WithdrawFromWalletSchema,
    _params: string
  ) {
    const res = vendorService.mutate(
      "withdraw_wallet/",
      payload,
      "JSON",
      "POST"
    );
    return res;
  },
  getVendorWalletRecords: async function (vendorUsername: string) {
    const res = vendorService.getAll<VendorWallet>(
      `/wallet_records/${vendorUsername}/`
    );
    return res;
  },
  getCurrentVendorDetails: async function (params: string) {
    const res = vendorService.getAll<CurrentVendorDetails>(
      `/current_vendor_details/?filter=${params}`
    );
    return res;
  },
};

export { VendorAdapter, useVendorMutation, useVendorQuery };
