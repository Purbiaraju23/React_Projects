import React from "react";
import App from "../App";
import HomeComponent from "../components/HomeComponent";
import AccountComponent from "../components/AccountComponent";
import CardsComponent from "../components/CardsComponent";
import ProtectedRoute from "./ProtectedRoute";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

function AppRoute() {
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
  return <RouterProvider router={router} />;
}

export default AppRoute;
