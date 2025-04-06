import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "./f.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 2,
          padding: 4,
          maxWidth: 700,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to BlossomBay Recipes
        </Typography>
        <Typography variant="h6" mb={3}>
          Share your love for cooking and discover mouthwatering recipes from
          chefs and foodies around the world.
        </Typography>
        <Button variant="contained" color="warning" size="large">
          Explore Recipes
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
