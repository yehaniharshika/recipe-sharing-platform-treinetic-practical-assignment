import Header from "../../components/Header/Header";
import RecipesDisplay from "../../components/RecipesDisplay/RecipesDisplay";
import About from "../../components/About/About";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
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
