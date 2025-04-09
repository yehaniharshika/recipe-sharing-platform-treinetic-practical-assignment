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
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCardIcon from "@mui/icons-material/AddCard";
import LoginPopup from "../LoginPopup/LoginPopup";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Swal from "sweetalert2";
import "../AlertCard/Alert.css";

const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width:820px)");
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleAddRecipeClick = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "⚠️ Please Register!",
        html: '<p class="swal-text">You need to sign in and login to share your recipe.</p>',
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "Cancel",
        background: "white",
        color: "black",
        confirmButtonColor: "#D2691E",
        cancelButtonColor: "gray",
        width: "450px",
        customClass: {
          title: "swal-title",
          popup: "swal-popup",
          confirmButton: "swal-button",
          cancelButton: "swal-cancel-button",
        },
      });
    } else {
      navigate("/recipes");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAnchorEl(null);
    Swal.fire({
      title: "✅ Logged out!",
      html: '<p class="swal-text">LogOut successfully</p>', // Added class for styling
      icon: "success",
      confirmButtonText: "OK",
      background: "white",
      color: "black",
      confirmButtonColor: "#D2691E",
      timer: 3000, // Auto-close after 10 seconds
      width: "450px", // Small window size
      customClass: {
        title: "swal-title",
        popup: "swal-popup",
        confirmButton: "swal-button",
      },
    });
  };

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
            <Box sx={{ display: "flex", gap: 0 }}>
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

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton
              onClick={toggleDarkMode}
              sx={{ color: darkMode ? "#000" : "#fff" }}
            >
              <BedtimeIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/favorite-recipes">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleAddRecipeClick}>
              <AddCardIcon />
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/my-recipes");
                      setAnchorEl(null);
                    }}
                    sx={{fontWeight: 500,fontFamily: "Montserrat, sans-serif",}}
                  >
                    My Recipes
                  </MenuItem>
                  <MenuItem sx={{fontWeight: 500,fontFamily: "Montserrat, sans-serif",}} onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
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

      {openLoginPopup && (
        <LoginPopup
          setShowLogin={setOpenLoginPopup}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default NavigationBar;
