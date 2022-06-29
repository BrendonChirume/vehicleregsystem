import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Outlet, useLocation } from "react-router-dom";
import { MainListItems } from "../components/listItems";
import { Avatar } from "@mui/material";
import { Navigation } from "../components/Navigation";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const mdTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(",")
  }
});

function DashboardContent() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navigation open={open} path={path} toggleDrawer={toggleDrawer} />
        <Drawer variant="permanent" open={open}>
          <Box
            sx={{
              px: 2,
              display: "flex",
              alignItems: "center",
              pt: 1.875
            }}
          >
            <Box>
              <Avatar />
            </Box>
            <Box
              sx={{
                ml: 1
              }}
            >
              <Typography>Admin Admin</Typography>
              <Typography variant="body2" color="textSecondary">
                Admin
              </Typography>
            </Box>
          </Box>
          <List component="nav">
            <MainListItems path={path} open={open} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
