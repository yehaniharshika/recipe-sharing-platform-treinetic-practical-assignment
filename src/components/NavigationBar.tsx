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
import {
    Menu as MenuIcon,
    ShoppingCart,
    Search,
} from "@mui/icons-material";

const NavigationBar = () => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Product", href: "#explore-products" },
        { label: "Mobile-App", href: "#app-download" },
        { label: "Reviews", href: "#reviews" },
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
            <AppBar position="sticky" sx={{ backgroundColor: "#FF5722" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Typography
                        variant="h5"
                        component={Link}
                        to="/"
                        sx={{ textDecoration: "none", color: "white", fontWeight: 600 }}
                    >
                        BlossomBay
                    </Typography>

                    {/* Navigation Links */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    href={item.href}
                                    sx={{ color: "white", textTransform: "none", fontWeight: 500 }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Right Icons and Buttons */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <IconButton color="inherit">
                            <Search />
                        </IconButton>

                        <IconButton color="inherit" component={Link} to="/cart">
                            <ShoppingCart />
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
