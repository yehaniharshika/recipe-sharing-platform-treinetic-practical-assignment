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
import { Menu as MenuIcon, RestaurantMenu } from "@mui/icons-material";

interface NavigationBarProps {
  setShowLogin?: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

const NavigationBar = ({ setShowLogin }: NavigationBarProps) => {
  const isMobile = useMediaQuery("(max-width:780px)");

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "#explore-products" },
    { label: "About", href: "#app-download" },
    { label: "Profile", href: "#reviews" },
    { label: "Contact us", href: "#footer" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.label} component="a" href={item.href}>
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
              color: "rgb(68, 7, 9)",
              fontWeight: 600,
              fontFamily: "'Lilita One', sans-serif",
            }}
          >
            BlossomBay
          </Typography>

          {/* Navigation Links */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
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
              <RestaurantMenu />
            </IconButton>

            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Sign In
            </Button>

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={false} onClose={() => {}}>
        {drawer}
      </Drawer>
    </>
  );
};

export default NavigationBar;
