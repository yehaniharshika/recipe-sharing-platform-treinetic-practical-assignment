import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../../assets/f.jpg";
import "../../index.css";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
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
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay with 40% opacity
          borderRadius: "30px",
        },
      }}
    >
      <Box
        sx={{
          position: "relative", // This ensures the text and background behind it is on top of the overlay
          backgroundColor: "", // Light background behind text for better contrast
          borderRadius: 2,
          padding: 4,
          maxWidth: 800,
          zIndex: 2, // Ensures text is above the dark overlay
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
            position: "relative",
            display: "inline-block",
            fontSize: {
              xs: "3rem", 
              sm: "3rem", 
              md: "4rem", 
              lg: "5rem", 
              xl: "6rem", 
            },
            textShadow: "2px 2px 3px white",
            
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
              border: "",
              zIndex: 1,
              width: "100%",
              height: "100%",
              padding: "2px",
            }}
          />
        </Typography>

        <Typography
          variant="h6"
          mb={3}
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            animation: "fadeIn 3s",
            color: "white", // Ensuring the text is visible on a lighter background
          }}
        >
          Share your love for cooking and discover mouthwatering recipes from
          chefs and foodies around the world.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Explore Recipes
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
