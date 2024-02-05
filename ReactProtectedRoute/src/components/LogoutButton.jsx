import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { isAuth, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    isAuth(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
