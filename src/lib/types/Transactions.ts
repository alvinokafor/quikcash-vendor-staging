export interface Transaction {
  account: string;
  amount: string;
  amount_tendered: string;
  channel: string;
  customer_category: "non-md" | "md";
  customer_type: "prepaid" | "postpaid";
  debt_paid: string;
  //   feeder: null;
  id: number;
  krn: number | null;
  meter: string;
  payment_mode: "cash" | "card";
  postpaid_arrears: string;
  refund: string;
  sgc: string | null;
  status: "successful" | "failed" | "pending" | undefined;
  tariff_rate: string;
  ti: string | null;
  token: string | null;
  transaction_date: string;
  transaction_ref: string;
  transactionid: string;
  transformer: string;
  units: string;
  updated_at: string;
  vat: string;
  vendor_id: number;
  vendor_name: number;
  wallet_balance: string | null;
  wallet_id: string;
  wallet_type: "debit" | "credit";
}

export interface AllTransactions {
  data: Transaction[];
  daily_total_commission: number | null;
  daily_total_sales: number;
  month_transactions: Transaction[];
  total_commision: number;
  total_sales: number;
  total_transactions: number;
}

export interface CurrentVendorDetails {
  alluser_revenue_summary: {
    email: string;
    id: number;
    total_amount: number;
    total_commission: number;
    total_net_amount: number;
    total_transactions: number;
    total_vat: number;
    username: string;
    vendor_name: string;
  }[];
  district_sale_sum: [];
  transactions: [];
}
