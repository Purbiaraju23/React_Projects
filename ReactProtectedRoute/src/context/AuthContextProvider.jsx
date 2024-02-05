import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }) {
  const [auth, isAuth] = useState(false);
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ auth, isAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
