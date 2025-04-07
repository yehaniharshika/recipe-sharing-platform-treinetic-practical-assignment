import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { assets } from "../../assets/assets_demo"; // adjust relative path
import './RecipeItem.css';

interface RecipeItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
}

const RecipeItem: React.FC<RecipeItemProps> = ({ id, name, image, description, ingredients }) => {
  return (
    <Card className="product-item" key={id}>
      <div className="product-item-img-container">
        <img src={image} alt={name} className="product-item-image" />
      </div>
      <CardContent className="product-item-info">
        <div className="product-item-name-rating">
          <Typography variant="h6">{name}</Typography>
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
