import { Box, Button, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../../assets/f.jpg";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: 3,
        marginTop: "30px",
        borderRadius: "30px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "",
          borderRadius: 2,
          padding: 4,
          maxWidth: 800,
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: "'Lilita One', sans-serif",
            color: "#542a0c",
            position: "relative", // Allows positioning of the pseudo-element
            display: "inline-block", // Ensures the border is around the text
          }}
        >
          Welcome to FlavorNest Recipes
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "2px solid white", // Adds a white border around the text
              zIndex: -1, // Places the border behind the text
            }}
          />
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
