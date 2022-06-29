import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  alpha,
  Box,
  Button,
  styled,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MainSearch from "./MainSearch";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const titles = {
  "new-registration": "New Vehicle Registration",
  "registered-vehicles": "Registered Vehicles",
  "vehicle-edit": "Vehicle Edit"
};

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1)
  }
}));

export const Navigation = ({ open, toggleDrawer, path }) => {
  const [showSearch, setShowSearch] = React.useState(false);
  let auth = useAuth();
  const title = titles[path] || "Dashboard";
  const navigate = useNavigate();

  const handleSearchToggle = () => setShowSearch(!showSearch);

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px" // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: 2
          }}
        >
          {open ? <MoreVertIcon /> : <MenuIcon />}
        </IconButton>
        {showSearch ? (
          <>
            <MainSearch handleSearchToggle={handleSearchToggle} />
          </>
        ) : (
          <>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
            {!showSearch && (
              <Tooltip title="Search">
                <CustomButton size="large" onClick={handleSearchToggle}>
                  <SearchIcon />
                </CustomButton>
              </Tooltip>
            )}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* <NotificationMenu />  */}
              <Button
                sx={{ ml: 2, fontWeight: 500, textTransform: "capitalize" }}
                color="inherit"
                onClick={() => {
                  auth.logout(() => navigate("/"));
                }}
              >
                Logout
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
