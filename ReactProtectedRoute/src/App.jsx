import React, { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import AuthContext from "./context/AuthContext";
import {
  Container,
  Paper,
  Typography,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Button,
  Link,
} from "@mui/material";

function App() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  // Check if the user is on the Home or Cards page
  const showLoginForm =
    location.pathname !== "/home" &&
    location.pathname !== "/cards" &&
    location.pathname !== "/account";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Protected Route Tutorial
          </Typography>
          <Button color="inherit">
            <Link
              component={NavLink}
              to="/home"
              color="inherit"
              underline="none"
            >
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={NavLink}
              to="/account"
              color="inherit"
              underline="none"
            >
              Account
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              component={NavLink}
              to="/cards"
              color="inherit"
              underline="none"
            >
              Cards
            </Link>
          </Button>
          <Button color="inherit">
            <Link component={NavLink} to="/" color="inherit" underline="none">
              {auth ? <LogoutButton /> : "Login"}
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Only render the login form if not on the Home or Cards page */}
      {showLoginForm && (
        <Container component="div" sx={{ mt: 2 }}>
          {auth ? null : <LoginForm />}
        </Container>
      )}

      <Container component="main" maxWidth="md" sx={{ mt: 2 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
