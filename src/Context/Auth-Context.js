import { createContext, useState } from "react";
const AuthContext=createContext();

export const AuthContextData=(props)=>{
   const [isAdmin, setIsAdmin]= useState(false)
    const adminSatus=(data)=>{
        setIsAdmin(data);
    }
    return (
      <AuthContext.Provider value={adminSatus}>
        {props.children}
      </AuthContext.Provider>
    );
}
export default AuthContext;