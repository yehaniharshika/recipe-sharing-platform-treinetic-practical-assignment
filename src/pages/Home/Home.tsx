import React from 'react'
import Header from '../../components/Header/Header'
import RecipesDisplay from '../../components/RecipesDisplay/RecipesDisplay'
import About from '../../components/About/About'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
    
        <RecipesDisplay/>

      
    </div>
  )
}

export default Home
