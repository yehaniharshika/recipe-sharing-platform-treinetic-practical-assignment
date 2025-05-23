import Header from "../../components/Header/Header";
import RecipesDisplay from "../../components/RecipesDisplay/RecipesDisplay";
import About from "../../components/About/About";
import AppDownload from "../../components/AppDownload/AppDownload";
import { useEffect, useState } from "react";


const Home = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    setRecipes(storedRecipes);
  }, []);
  
  return (
    <div>
      <Header />
      <About />
      <RecipesDisplay />
      <AppDownload />
    </div>
  );
};

export default Home;
