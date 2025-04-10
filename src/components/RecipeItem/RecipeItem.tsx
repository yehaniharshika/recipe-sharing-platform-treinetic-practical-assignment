import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { assets } from "../../assets/assets";

import "./RecipeItem.css";

interface RecipeItemProps {
  id: string;
  recipeTitle: string;
  image: string;
  ingredients: string[];
  cookingTime: string;
  instructions: string;
  isFavoritePage?: boolean;
  onRemoveFavorite?: () => void;
  onClick?: () => void; // Add this line to accept onClick
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  id,
  recipeTitle,
  image,
  ingredients,
  cookingTime,
  instructions,
  isFavoritePage = false,
  onRemoveFavorite,
  onClick,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState<any>(null);

  useEffect(() => {
    const existing = localStorage.getItem(id);
    if (existing) setIsFavorite(true);
  }, [id]);

  const handleFavoriteClick = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    if (newFavoriteStatus) {
      localStorage.setItem(
        id,
        JSON.stringify({ id, recipeTitle, image, ingredients, instructions })
      );
    } else {
      localStorage.removeItem(id);
    }
  };

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 
    if (isFavoritePage && onRemoveFavorite) {
      onRemoveFavorite();
    } else {
      handleFavoriteClick();
    }
  };

  const fetchRecipeDetails = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 
    // Now you can add logic to fetch recipe details if needed
    console.log("Fetching details for the recipe...");
  };

  return (
    <Card
      className="recipe-item"
      key={id}
      sx={{
        width: "100%",
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#f6e1d2",
        position: "relative", // Add this to make the favorite icon position absolute
      }}
      onClick={onClick}
    >
      <div className="recipe-item-img-container">
        <img src={image} alt={recipeTitle} className="recipe-item-image" />
      </div>

      {/* Favorite Icon in Top Right Corner */}
      <IconButton
        onClick={handleIconClick}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: 1,
          backgroundColor: "white", // Corrected to "backgroundColor"
          borderRadius: "50%", // To make it a circle, use borderRadius: "50%"
          color: isFavorite || isFavoritePage ? "red" : "gray",
        }}
      >
        <FavoriteIcon />
      </IconButton>

      <CardContent className="product-item-info">
        <div className="product-item-name-rating">
          <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          >
            {recipeTitle}
          </Typography>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <div className="product-item-name-rating">
          <Typography
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          >
            Cooking Time: {cookingTime}
          </Typography>
        </div>

        <Typography
          className="product-item-desc"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {instructions}
        </Typography>

        <Typography
          className="recipe-item-ingredient"
          sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
        >
          Ingredients:
        </Typography>
        <ul className="ingredient-list">
          {Array.isArray(ingredients) ? (
            ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available</li>
          )}
        </ul>

        {/* About This Recipe Button */}
        <Button
          sx={{
            marginTop: 2,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            backgroundColor: "red",
            color: "white",
            width: "100%",
            fontSize: "12px",
            "&:hover": {
              border: "2px solid white",
            },
          }}
          onClick={fetchRecipeDetails} // Fetch recipe details on button click
        >
          About This Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
