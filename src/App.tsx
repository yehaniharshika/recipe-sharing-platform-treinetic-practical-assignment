import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AddRecipes from "./pages/AddRecipes/AddRecipes.tsx";
import FavoriteRecipe from "./pages/FavoriteRecipe/FavoriteRecipe.tsx";
import { useDispatch } from "react-redux";
import { addRecipe } from "./reducers/RecipeSlice.ts";

function App() {
  const dispatch = useDispatch();

  const handleAddRecipe = (newRecipe: any): void => {
    dispatch(addRecipe(newRecipe));
  };

  return (
    <>
      <div className="app">
        <NavigationBar />
  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/recipes"
              element={<AddRecipes onAddRecipe={handleAddRecipe} />}
            />
            <Route path="/favorite-recipes" element={<FavoriteRecipe />} />
          </Routes>
        </main>
      </div>
  
      <Footer />
    </>
  );
  
}

export default App;
