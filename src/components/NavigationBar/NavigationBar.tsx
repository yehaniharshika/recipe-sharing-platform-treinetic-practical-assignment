import { useState } from "react";
import { Link } from "react-router-dom";
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCardIcon from '@mui/icons-material/AddCard';
import LoginPopup from "../LoginPopup/LoginPopup";

// interface NavigationBarProps {
//   setShowLogin?: (value: ((prevState: boolean) => boolean) | boolean) => void;
// }

const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width:780px)");
  const [openLoginPopup, setOpenLoginPopup] = useState(false); // State to control LoginPopup visibility
  const [openDrawer, setOpenDrawer] = useState(false); // State to control Drawer visibility
  const [isLoggedIn] = useState(false); 
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "#recipes-display" },
    { label: "About", href: "#about" },
    { label: "Profile", href: "#reviews" },
    { label: "Contact us", href: "#contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} component={Link} to={item.href}>
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

          {/* Navigation Links */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.href}
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

          {/* Right Icons and Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit" component={Link} to="/recipes">
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

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {drawer}
      </Drawer>

      {/* Login Popup */}
      {openLoginPopup && <LoginPopup setShowLogin={setOpenLoginPopup} />}
    </>
  );
};

export default NavigationBar;
