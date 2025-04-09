import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCardIcon from "@mui/icons-material/AddCard";
import LoginPopup from "../LoginPopup/LoginPopup";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width:780px)");
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Apply background color to body directly
    document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "recipes-display" },
    { label: "About", href: "about" },
    { label: "Contact us", href: "contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/#${href}`);
      }
    }
    setOpenDrawer(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem
            component={Link}
            to={item.href}
            key={item.label}
            onClick={() => handleNavClick(item.href)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#D2691E" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "rgb(248, 244, 244)",
              fontWeight: 600,
              fontFamily: "'Lilita One', sans-serif",
            }}
          >
            FlavorNest
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontWeight: 500,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={toggleDarkMode}
              sx={{ color: darkMode ? "#000" : "#fff" }}
            >
              <BedtimeIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/favorite-recipes">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/recipes">
              <AddCardIcon />
            </IconButton>

            {isLoggedIn ? (
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            ) : (
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
                onClick={() => setOpenLoginPopup(true)}
              >
                Sign In
              </Button>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {drawer}
      </Drawer>

      {openLoginPopup && <LoginPopup setShowLogin={setOpenLoginPopup} />}
    </>
  );
};

export default NavigationBar;
