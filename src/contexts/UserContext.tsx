import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { type User, type IToken } from "@/lib/types/User";

interface IUserProvider {
  children: React.ReactNode;
}

export interface IUserContext {
  user: User | null;
  token: IToken | null;
  isUserAuthenticated: () => boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
  setToken: Dispatch<SetStateAction<IToken | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<IToken | null>(null);

  const isUserAuthenticated = () => !!user;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isUserAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
