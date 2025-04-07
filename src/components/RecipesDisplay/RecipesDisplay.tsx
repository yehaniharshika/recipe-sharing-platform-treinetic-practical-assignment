import React from 'react';
import { Box, Typography } from '@mui/material';
import { recipe_list } from '../../assets/assets';
import RecipeItem from '../RecipeItem/RecipeItem';


const RecipesDisplay: React.FC = () => {
  return (
    <Box className="recipes-display" id="recipes-display" sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        color="primary"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Top Recipes Just for You 🍽️
      </Typography>

      <Box
        className="recipes-display-list"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        gap={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {recipe_list.map((item) => (
          <RecipeItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            ingredients={item.ingredients}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecipesDisplay;



