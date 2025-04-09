// RecipesDisplay.tsx
import React, { useState } from "react";
import { Box, Typography, Modal, TextField, Button, Stack } from "@mui/material";
import RecipeItem from "../RecipeItem/RecipeItem";
import SearchBar from "../SearchBar/SearchBar";

interface Recipe {
  id: string;
  recipeTitle: string;
  image: string;
  ingredients: string[];
  instructions: string;
}

interface RecipesDisplayProps {
  recipes: Recipe[];
  onUpdateRecipe: (updatedRecipe: Recipe) => void;
  onDeleteRecipe: (recipeId: string) => void;
}

const RecipesDisplay: React.FC<RecipesDisplayProps> = ({
  recipes,
  onUpdateRecipe,
  onDeleteRecipe,
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  const handleOpenModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedRecipe(null);
  };

  const handleUpdate = () => {
    if (selectedRecipe) {
      onUpdateRecipe(selectedRecipe);
      handleCloseModal();
    }
  };

  const handleDelete = () => {
    if (selectedRecipe) {
      onDeleteRecipe(selectedRecipe.id);
      handleCloseModal();
    }
  };

  return (
    <Box className="recipes-display" id="recipes-display" sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
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
        sx={{ marginTop: "50px" ,cursor:"pointer"}}
      >
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            recipeTitle={recipe.recipeTitle}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            onClick={() => handleOpenModal(recipe)} // Pass the onClick handler
          />
        ))}
      </Box>

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: 4,
            boxShadow: 24,
            width: 400,
            borderRadius: 2,
          }}
        >
          {selectedRecipe && (
            <Stack spacing={2}>
              <Typography variant="h5" textAlign="center">
                Edit Recipe
              </Typography>
              <TextField
                label="Recipe Title"
                fullWidth
                value={selectedRecipe.recipeTitle}
                onChange={(e) =>
                  setSelectedRecipe({
                    ...selectedRecipe,
                    recipeTitle: e.target.value,
                  })
                }
              />
              <TextField
                label="Ingredients"
                fullWidth
                value={selectedRecipe.ingredients.join(", ")}
                onChange={(e) =>
                  setSelectedRecipe({
                    ...selectedRecipe,
                    ingredients: e.target.value.split(", "),
                  })
                }
              />
              <TextField
                label="Instructions"
                fullWidth
                value={selectedRecipe.instructions}
                onChange={(e) =>
                  setSelectedRecipe({
                    ...selectedRecipe,
                    instructions: e.target.value,
                  })
                }
              />
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={handleUpdate}>
                  Update
                </Button>
                <Button variant="outlined" color="error" onClick={handleDelete}>
                  Delete
                </Button>
              </Stack>
            </Stack>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default RecipesDisplay;
