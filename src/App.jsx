import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import ChefsTales from './components/ChefsTables/ChefsTables';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import RecipesHading from './components/RecipesHeading/RecipesHading';

function App() {
    const [chefsTables, setChefsTables] = useState([]);
    const handleAddChefsTable = recipe => {
      const newChefsTables = [...chefsTables, recipe];
      setChefsTables(newChefsTables);
    }
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <RecipesHading></RecipesHading>
      <div className='max-w-[1320px] mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-10 mg:gap-0'>
          <Recipes  handleAddChefsTable={handleAddChefsTable}></Recipes>
          <ChefsTales chefsTables={chefsTables} ></ChefsTales>
      </div>
    </>
  )
}

export default App
