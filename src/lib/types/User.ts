export interface User {
  bio: string;
  email: string;
  first_name: string;
  image: string;
  role: "admin" | "vendor" | "cashier" | "agent";
  user_id: number;
  username: string;
  verified: boolean;
  two_factor_enabled: boolean;
}

export interface IToken {
  refresh: string;
  access: string;
}
