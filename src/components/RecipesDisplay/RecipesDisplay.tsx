import React from 'react';
import { Box, Typography } from '@mui/material';
import { recipe_list } from '../../assets/assets';
import RecipeItem from '../RecipeItem/RecipeItem';


const RecipesDisplay: React.FC = () => {
  return (
    <Box className="recipes-display" id="recipes-display" sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography
        variant="h3"
        textAlign="center"
        color="#7e3f12"
        gutterBottom
        sx={{fontFamily: "'Lilita One', sans-serif", color: "#bd5f1b" ,marginTop:"10px"}}
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
        sx={{marginTop:"50px"}}
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



