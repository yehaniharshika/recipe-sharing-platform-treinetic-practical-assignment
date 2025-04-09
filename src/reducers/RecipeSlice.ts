import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../model/Recipe";

export const initialState: Recipe[] = [];

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload);
    },

    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.findIndex(
        (recipe) => recipe.recipeTitle === action.payload.recipeTitle
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    deleteRecipe: (state, action: PayloadAction<string>) => {
        return state.filter((recipe) => recipe.recipeTitle !== action.payload);
    },
  },
});

export const { addRecipe,updateRecipe,deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
