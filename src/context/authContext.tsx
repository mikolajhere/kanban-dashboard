import { createContext, PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";

interface CurrentUser {
  email: string;
  id: number;
  image: string;
  username: string;
  bio: string;
}

export interface AuthUserProps {
  currentUser?: CurrentUser;
  login: any;
  logout: any;
}

export const AuthContext = createContext<AuthUserProps>({
  login: {},
  logout: {},
});

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "false") || null
  );

  const login = async (inputs: object) => {
    const res = await axios.post("/api/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
