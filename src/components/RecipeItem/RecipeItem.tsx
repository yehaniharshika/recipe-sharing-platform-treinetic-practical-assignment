import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { assets } from "../../assets/assets";
import "./RecipeItem.css";

interface RecipeItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  id,
  name,
  image,
  description,
  ingredients,
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
      sx={{ width: "100%", borderRadius: 2, boxShadow: 2 }}
    >
      <div className="recipe-item-img-container">
        <img src={image} alt={name} className="recipe-item-image" />
      </div>

      <CardContent className="product-item-info">
        <div className="product-item-name-rating">
          <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <Typography
          className="product-item-desc"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {description}
        </Typography>
        <Typography
          className="recipe-item-ingredient"
          sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
        >
          Ingredients:
        </Typography>
        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <IconButton className="favorite-icon" onClick={handleFavoriteClick}>
          <FavoriteIcon sx={{ color: isFavorite ? "red" : "gray" }} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
