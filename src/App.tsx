import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar.tsx";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AddRecipes from "./pages/AddRecipes/AddRecipes.tsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);

    function handleAddRecipe(newRecipe: any): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<AddRecipes onAddRecipe={handleAddRecipe} />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
