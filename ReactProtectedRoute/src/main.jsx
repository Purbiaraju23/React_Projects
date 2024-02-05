import React from "react";
import ReactDOM from "react-dom/client";
import HomeComponent from "./components/HomeComponent";
import AccountComponent from "./components/AccountComponent";
import CardsComponent from "./components/CardsComponent";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";

const user = {
  username: "Admin",
  email: "admin@axelor.com",
  address: "123 Main Street, Surat, Gujarat",
  phone: "7048332450",
  balance: "100000",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomeComponent />,
      },
      {
        path: "/cards",
        element: <CardsComponent user={user} />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/account",
            element: <AccountComponent user={user} />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
