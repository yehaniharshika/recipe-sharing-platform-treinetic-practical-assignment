import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { assets } from "../../assets/assets";
import './RecipeItem.css';

interface RecipeItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
}

const RecipeItem: React.FC<RecipeItemProps> = ({ id, name, image, description, ingredients }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="recipe-item" key={id}>
      <div className="recipe-item-img-container">
        <img src={image} alt={name} className="recipe-item-image" />
        {/* The Favorite icon is always visible on the top-right of the image */}
        <IconButton
          className="favorite-icon"
          onClick={handleFavoriteClick}
        >
          <FavoriteIcon sx={{ color: isFavorite ? "red" : "gray" }} />
        </IconButton>
      </div>

      <CardContent className="product-item-info">
        <div className="product-item-name-rating">
          <Typography variant="h6" sx={{}}>{name}</Typography>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <Typography className="product-item-desc">{description}</Typography>
        <Typography className="product-item-price">Ingredients:</Typography>
        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
