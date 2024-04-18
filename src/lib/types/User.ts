export interface User {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface IToken {
  refresh: string;
  access: string;
}
