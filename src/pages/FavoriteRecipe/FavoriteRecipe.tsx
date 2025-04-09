import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

const FavoriteRecipe = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = Object.keys(localStorage).map((key) => {
      try {
        const recipe = JSON.parse(localStorage.getItem(key) || "{}");
        return recipe;
      } catch (e) {
        return null;
      }
    }).filter(Boolean); // Remove nulls
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (id: string) => {
    localStorage.removeItem(id);
    setFavorites((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Lilita One', sans-serif",
          color: "#bd5f1b",
          textAlign: "center",
        }}
      >
        Your Favorite Recipes
      </Typography>

      {favorites.length === 0 ? (
        <Typography variant="body1" align="center" sx={{fontFamily: "Montserrat, sans-serif",}}>
          No favorite recipes yet!
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
          {favorites.map((recipe) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`${recipe.id}-${recipe.recipeTitle}`}
            >
              <Card sx={{ width: "100%", boxShadow: 2 }}>
                <RecipeItem
                  id={recipe.id}
                  recipeTitle={recipe.recipeTitle}
                  image={recipe.image}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                  isFavoritePage={true}
                  onRemoveFavorite={() => handleRemoveFavorite(recipe.id)}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FavoriteRecipe;
