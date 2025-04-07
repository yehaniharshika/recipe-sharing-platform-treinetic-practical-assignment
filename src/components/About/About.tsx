import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";

import findIcon from "../../assets/icons/find.png";
import recipeIcon from "../../assets/icons/recipe.png";
import rateIcon from "../../assets/icons/rate.png";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: "'Lilita One', sans-serif", color: "#bd5f1b" }}
        align="center"
        gutterBottom
      >
        Who we are?
      </Typography>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
      >
        Welcome to Our Culinary Community! 👩‍🍳
      </Typography>

      <Typography
        variant="body1"
        paragraph
        align="center"
        sx={{
          maxWidth: "800px",
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "600",
        }}
      >
        Where food lovers from around the world come together to share their
        favorite recipes, cooking tips, and kitchen stories. Whether you're an
        experienced chef or just starting to experiment with new flavors, this
        is the place for you! Our mission is to inspire home cooks of all skill
        levels with easy-to-follow recipes that transform everyday ingredients
        into mouthwatering meals. From classic comfort foods to exciting new
        cuisines, we make cooking a joyful and accessible experience for
        everyone. Join us in celebrating the joy of food and the connections it
        fosters - one recipe at a time!
      </Typography>

      {/* Service Cards Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        marginTop="20px"
        alignItems="center"
        sx={{
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Card 1: Upload Recipes */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minWidth: 275,
              maxWidth: "275px",
              borderRadius: 3,
              boxShadow: 3,
              border: 3,
              borderColor: "#bd5f1b",
              backgroundColor:"#f6e1d2",
              cursor:"pointer"
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={2}
              >
                <img
                  src={recipeIcon}
                  alt="Find Recipes"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Upload Recipes
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
              >
                Got a recipe you love? Share it with the world! Upload your own
                step-by-step recipes with ingredients, instructions, and photos
                to inspire fellow foodies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2: Create Recipes */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minWidth: 275,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: "275px",
              border: 3,
              borderColor: "#bd5f1b",
              backgroundColor:"#f6e1d2",
              cursor:"pointer"
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={2}
              >
                <img
                  src={rateIcon}
                  alt="Find Recipes"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Rate Recipes
              </Typography>
              <Typography variant="body2" align="center" sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}>
                Help others discover great meals by rating and reviewing the
                recipes you've tried.Your feedback guides our community toward
                the most delicious dishes!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3: Find Recipes */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              minWidth: 275,
              maxWidth: "275px",
              borderRadius: 3,
              boxShadow: 3,
              border: 3,
              borderColor: "#bd5f1b",
              backgroundColor:"#f6e1d2",
              cursor:"pointer"
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={2}
              >
                <img
                  src={findIcon}
                  alt="Find Recipes"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700" }}
              >
                Find Recipes
              </Typography>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "400" }}
              >
                Discover the perfect dish with ease by browsing thousands of
                recipes using advanced filters such as ingredients, cuisine, and
                dietary preferences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
