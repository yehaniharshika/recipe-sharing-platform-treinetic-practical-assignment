import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import RecipeItem from "../RecipeItem/RecipeItem";
import SearchBar from "../SearchBar/SearchBar";

interface RecipesDisplayProps {
  recipes: any[];
}

const RecipesDisplay: React.FC<RecipesDisplayProps> = ({ recipes }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Add filter logic if needed
  };

  return (
    <Box
      className="recipes-display"
      id="recipes-display"
      sx={{ px: { xs: 2, md: 6 }, py: 4 }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        color="#7e3f12"
        gutterBottom
        sx={{
          fontFamily: "'Lilita One', sans-serif",
          color: "#bd5f1b",
          marginTop: "10px",
        }}
      >
        Top Recipes Just for You 🍽️
      </Typography>

      <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

      <Box
        className="recipes-display-list"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        gap={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ marginTop: "50px" }}
      >
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            recipeTitle={recipe.recipeTitle}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecipesDisplay;
