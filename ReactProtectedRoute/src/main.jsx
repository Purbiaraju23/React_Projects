import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./Routes/AppRoute";
import AuthContextProvider from "./context/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <AppRoute />
  </AuthContextProvider>
);
