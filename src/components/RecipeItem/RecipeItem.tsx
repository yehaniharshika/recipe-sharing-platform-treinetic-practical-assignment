import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { assets } from "../../assets/assets";
import "./RecipeItem.css";

interface RecipeItemProps {
  id: string;
  recipeTitle: string;
  image: string;
  ingredients: string[];
  instructions: string;
  isFavoritePage?: boolean;
  onRemoveFavorite?: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  id,
  recipeTitle,
  image,
  ingredients,
  instructions,
  isFavoritePage = false,
  onRemoveFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleIconClick = () => {
    if (isFavoritePage && onRemoveFavorite) {
      onRemoveFavorite();
    } else {
      handleFavoriteClick();
    }
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
      }}
    >
      <div className="recipe-item-img-container">
        <img src={image} alt={recipeTitle} className="recipe-item-image" />
      </div>

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
              <li key={ingredient + index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available</li>
          )}
        </ul>

        <IconButton className="favorite-icon" onClick={handleIconClick}>
          <FavoriteIcon
            sx={{ color: isFavorite || isFavoritePage ? "red" : "gray" }}
          />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
