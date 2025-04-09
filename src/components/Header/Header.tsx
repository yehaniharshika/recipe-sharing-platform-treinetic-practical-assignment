import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../../assets/f.jpg";
import '../../index.css';

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
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: "'Lilita One', sans-serif",
            color: "#542a0c",
            position: "relative", 
            display: "inline-block", 
             
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
              border: "2px solid white", 
              zIndex: -1, 
              width: "100%",
              height: "100%", 
              padding: "2px", 
            }}
          />
        </Typography>

        <Typography
          variant="h6"
          mb={3}
          sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 ,animation: "fadeIn 3s",}}
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
