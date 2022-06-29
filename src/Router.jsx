import React from "react";
import { useRoutes } from "react-router-dom";
import { RequireAuth } from "./context/RequireAuth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import NewReg from "./pages/NewReg";
import RregisteredVehicles from "./pages/RregisteredVehicles";
import SearchPage from "./pages/SearchPage";
import VehicleEdit from "./pages/VehicleEdit";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      children: [
        {
          path: "main",
          element: <Home />,
          children: [
            {
              path: "",
              element: <SearchPage />
            }
          ]
        },
        {
          path: "new-registration",
          element: <NewReg />
        },
        {
          path: "registered-vehicles",
          element: <RregisteredVehicles />,
          children: [
            {
              path: ":id",
              element: <RregisteredVehicles />
            }
          ]
        },

        {
          path: "vehicle-edit/:id",
          element: <VehicleEdit />
        },
        {
          path: "vehicle-edit",
          element: <VehicleEdit />
        }
      ]
    },
    {
      path: "login",
      element: <LogIn />
    }
  ]);
  return routes;
}
