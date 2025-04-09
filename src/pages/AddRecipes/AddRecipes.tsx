import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../../reducers/RecipeSlice";

// Define the type for the AddRecipes props
interface AddRecipesProps {
  onAddRecipe: (newRecipe: any) => void;
}

const AddRecipes: React.FC<AddRecipesProps> = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    recipeTitle: "",
    cookingTime: "",
    ingredients: "",
    instructions: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  const handleAddRecipe = (e: React.FormEvent) => {
    e.preventDefault(); // prevent refresh

    const newRecipe = dispatch(addRecipe({
      id: Math.random().toString(36).substr(2, 9), 
      image: preview || "",
      recipeTitle: formData.recipeTitle,
      cookingTime: formData.cookingTime,
      ingredients: formData.ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions: formData.instructions,
    }));
    // const newRecipe = {
    //   id: Math.random().toString(36).substr(2, 9), 
    //   image: preview || "",
    //   recipeTitle: formData.recipeTitle,
    //   cookingTime: formData.cookingTime,
    //   ingredients: formData.ingredients
    //     .split(",")
    //     .map((item) => item.trim())
    //     .filter(Boolean),
    //   instructions: formData.instructions,
    // };

    setFormData({
      image: "",
      recipeTitle: "",
      cookingTime: "",
      ingredients: "",
      instructions: "",
    });
    setImage(null);
    setPreview(null);

    console.log("Recipe saved successfully:", newRecipe);
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat, sans-serif",
        padding: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f6e1d2",
          padding: 3,
          borderRadius: 2,
          width: "100%",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 3,
          borderColor: "#b28c71",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            color: "#bd5f1b",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Add New Recipe
        </Typography>

        <form noValidate>
          <Box
            sx={{
              width: "100%",
              height: 200,
              backgroundColor: "#fff",
              border: "2px dashed #ccc",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              fontFamily: "Montserrat, sans-serif",
              mb: 2,
            }}
            onClick={triggerFileSelect}
          >
            {preview ? (
              <img
                src={preview}
                alt="Uploaded"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Typography fontFamily="Montserrat, sans-serif" color="gray">
                Upload Image
              </Typography>
            )}
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Box>

          <TextField
            name="name"
            placeholder="Recipe Name"
            fullWidth
            sx={textFieldStyles}
            value={formData.recipeTitle}
            onChange={(e) =>
              setFormData({ ...formData, recipeTitle: e.target.value })
            }
          />

          <TextField
            name="time"
            placeholder="Cooking Time"
            type="text"
            fullWidth
            sx={textFieldStyles}
            value={formData.cookingTime}
            onChange={(e) =>
              setFormData({ ...formData, cookingTime: e.target.value })
            }
          />

          <TextField
            name="ingredients"
            placeholder="Ingredients"
            multiline
            rows={3}
            fullWidth
            sx={textFieldStyles}
            value={formData.ingredients}
            onChange={(e) =>
              setFormData({ ...formData, ingredients: e.target.value })
            }
          />

          <TextField
            name="instructions"
            placeholder="Instructions"
            multiline
            rows={4}
            fullWidth
            sx={textFieldStyles}
            value={formData.instructions}
            onChange={(e) =>
              setFormData({ ...formData, instructions: e.target.value })
            }
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleAddRecipe}
            sx={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#7e3f12",
              fontWeight: 600,

              marginTop: 1,
              "&:hover": {
                backgroundColor: "#5d2d0a",
                border: 2,
                borderColor: "white",
              },
            }}
          >
            Add Recipe
          </Button>
        </form>
      </Box>
    </Box>
  );
};

const textFieldStyles = {
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
};

export default AddRecipes;
