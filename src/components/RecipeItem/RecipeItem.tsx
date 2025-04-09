import React, { useState } from "react";
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
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  id,
  recipeTitle,
  image,
  ingredients,
  instructions,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    console.log("click");
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
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available</li>
          )}
        </ul>

        <IconButton className="favorite-icon" onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: isFavorite ? "red" : "gray" }} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
