import Header from "../../components/Header/Header";
import RecipesDisplay from "../../components/RecipesDisplay/RecipesDisplay";
import About from "../../components/About/About";
import AppDownload from "../../components/AppDownload/AppDownload";
import Footer from "../../components/Footer/Footer";
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
      <RecipesDisplay recipes={recipes} />
      <AppDownload />
    </div>
  );
};

export default Home;
