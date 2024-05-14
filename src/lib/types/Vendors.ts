import { Transaction } from "./Transactions";

export interface Vendor {
  bio: string;
  create_date: string | null;
  creator: number;
  date_joined: string;
  email: string;
  email_verified: boolean;
  email_verified_date: string | null;
  first_name: string;
  //   groups: [];
  id: string;
  image: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string | null;
  last_name: string;
  name: string | null;
  otp: string;
  phone: string;
  phone_verified: boolean;
  phone_verified_date: string | null;
  role: "agent" | "sub-vendor" | "cashier";
  sex: string;
  status: string | null;
  user: number;
  //   user_permissions: [];
  username: string;
  verified: boolean;
}

export interface AllVendors {
  data: Vendor[];
  total_agent: number;
  total_cashier: number;
  total_vendor: number;
}

export interface VendorDetails {
  transactions: Transaction[];
  vendor: {
    date_added: string;
    email: string;
    id: number;
    role: string;
    username: string;
  };
}

export interface VendorWallet {
  vendor_wallet: {
    balance: string;
    created_at: string;
    key: string;
    status: boolean;
    updated_at: string;
    vendorId: number;
    vendorName: string;
    walletId: string;
    walletType: "debit" | "credit";
  }[];
}
