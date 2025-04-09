import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Footer from './components/Footer/Footer.tsx';
import AddRecipes from './pages/AddRecipes/AddRecipes.tsx';
import FavoriteRecipe from './pages/FavoriteRecipe/FavoriteRecipe.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // Handling adding new recipes (dispatch action to Redux store)
  function handleAddRecipe(newRecipe: any): void {
    // You will dispatch the action here to add the recipe to the Redux store
    // Dispatch addRecipe action (addRecipe should be defined in your Redux slice)
  }

  return (
    <Provider store={store}>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<AddRecipes onAddRecipe={handleAddRecipe} />} />
          <Route path="/favorite-recipes" element={<FavoriteRecipe />} />
        </Routes>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
