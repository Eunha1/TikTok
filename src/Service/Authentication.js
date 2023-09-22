import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
function Authentication({ children }) {
   const [isLogin, setIsLogin] = useState(false);
   const login = () => {
      setIsLogin(true);
   };
   const logout = () => {
      setIsLogin(false);
   };
   return <AuthContext.Provider value={{ isLogin, login, logout }}>{children}</AuthContext.Provider>;
}
export default Authentication;
export function useAuth() {
   return useContext(AuthContext);
}
