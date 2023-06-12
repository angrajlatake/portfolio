import React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DashAppbar from "../Components/StudioComponents/DashAppBar";
import DashDrawer from "../Components/StudioComponents/DashDrawer";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashAppbar />
      <DashDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Main Content here  */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminPanel;
