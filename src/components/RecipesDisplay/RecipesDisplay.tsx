import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import RecipeItem from "../RecipeItem/RecipeItem";
import SearchBar from "../SearchBar/SearchBar";
import { Recipe } from "../../model/Recipe";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, updateRecipe } from "../../reducers/RecipeSlice";
import { RootState } from "../../store/store";
import Swal from "sweetalert2";

const RecipesDisplay: React.FC = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes);

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
    if (!selectedRecipe) return;

    if (!selectedRecipe.recipeTitle.trim()) {
      alert("Recipe title is required");
      return;
    }

    if (!Array.isArray(selectedRecipe.ingredients)) {
      alert("Ingredients must be an array");
      return;
    }

    const updatedRecipe: Recipe = {
      ...selectedRecipe,
      ingredients: selectedRecipe.ingredients.map((i) => i.trim()),
      instructions: selectedRecipe.instructions.trim(),
    };

    dispatch(updateRecipe(updatedRecipe));
    console.log(updatedRecipe);
    Swal.fire({
      title: "✅ Recipe updated successfully!",
      icon: "success",
      confirmButtonText: "OK",
      background: "white",
      color: "black",
      confirmButtonColor: "#D2691E",
      width: "450px",
      customClass: {
        title: "swal-title",
        popup: "swal-popup",
        confirmButton: "swal-button",
      },
    });
    handleCloseModal();
  };
  
  const handleDelete = () => {
    if (!selectedRecipe) return;

    // Show confirmation modal
    Swal.fire({
      title: "⚠️ Are you sure?",
      html: '<p class="swal-text">Do you really want to delete this Recipe?</p>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "No, Cancel",
      background: "white",
      color: "black",
      confirmButtonColor: "#D2691E",
      cancelButtonColor: "gray",
      width: "450px",
      customClass: {
        title: "swal-title",
        popup: "swal-popup",
        confirmButton: "swal-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch delete action if confirmed
        dispatch(deleteRecipe(selectedRecipe.id));

        // Show success message
        Swal.fire({
          title: "✅ Recipe deleted successfully!",
          icon: "success",
          confirmButtonText: "OK",
          background: "white",
          color: "black",
          confirmButtonColor: "#D2691E",
          width: "450px",
          customClass: {
            title: "swal-title",
            popup: "swal-popup",
            confirmButton: "swal-button",
          },
        });

        handleCloseModal();
      }
    });
  };

  // Filter the recipes based on the query
  const filteredRecipes = recipes.filter((recipe) => {
    const lowerQuery = query.toLowerCase();
    const titleMatch = recipe.recipeTitle.toLowerCase().includes(lowerQuery);
    const ingredientsMatch = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(lowerQuery)
    );
    return titleMatch || ingredientsMatch;
  });
  

  return (
    <Box
      className="recipes-display"
      id="recipes-display"
      sx={{ px: { xs: 2, md: 6 }, py: 4 }}
    >
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

      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />

      <Box
        className="recipes-display-list"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        gap={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ marginTop: "50px", cursor: "pointer" }}
      >
         {filteredRecipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            id={recipe.id}
            recipeTitle={recipe.recipeTitle}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            onClick={() => handleOpenModal(recipe)}
          />
        ))}
      </Box>

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
          noValidate
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#f6e1d2",
            padding: 4,
            boxShadow: 24,
            width: 400,
            borderRadius: 2,
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {selectedRecipe && (
            <Stack spacing={2}>
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
              >
                Edit Recipe
              </Typography>

              <TextField
                name="recipeTitle"
                placeholder="Recipe Title"
                fullWidth
                value={selectedRecipe.recipeTitle}
                onChange={(e) =>
                  setSelectedRecipe({
                    ...selectedRecipe,
                    recipeTitle: e.target.value,
                  })
                }
                sx={{
                  marginBottom: 2,
                  fontSize: "13px",
                  fontFamily: "Montserrat, sans-serif",
                  "& .MuiOutlinedInput-root": {
                    fontFamily: "Montserrat, sans-serif",
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FF5722",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FF5722",
                      borderWidth: "3px",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontFamily: "Montserrat, sans-serif",
                  },
                }}
              />

              <TextField
                name="ingredients"
                placeholder="Ingredients (comma separated)"
                fullWidth
                value={
                  Array.isArray(selectedRecipe.ingredients)
                    ? selectedRecipe.ingredients.join(", ")
                    : ""
                }
                onChange={(e) =>
                  setSelectedRecipe({
                    ...selectedRecipe,
                    ingredients: e.target.value
                      .split(",")
                      .map((item) => item.trim()),
                  })
                }
                sx={{
                  marginBottom: 2,
                  fontSize: "13px",
                  fontFamily: "Montserrat, sans-serif",
                  "& .MuiOutlinedInput-root": {
                    fontFamily: "Montserrat, sans-serif",
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FF5722",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FF5722",
                      borderWidth: "3px",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontFamily: "Montserrat, sans-serif",
                  },
                }}
              />

              <TextField
                name="instructions"
                placeholder="Instructions"
                fullWidth
                multiline
                minRows={3}
                value={selectedRecipe.instructions}
                onChange={(e) =>
                  setSelectedRecipe({
                    ...selectedRecipe,
                    instructions: e.target.value,
                  })
                }
                sx={{
                  marginBottom: 2,
                  fontSize: "13px",
                  fontFamily: "Montserrat, sans-serif",
                  "& .MuiOutlinedInput-root": {
                    fontFamily: "Montserrat, sans-serif",
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FF5722",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FF5722",
                      borderWidth: "3px",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontFamily: "Montserrat, sans-serif",
                  },
                }}
              />

              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    backgroundColor: "#7e3f12",
                    "&:hover": { backgroundColor: "#5d2d0a" },
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDelete}
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
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
