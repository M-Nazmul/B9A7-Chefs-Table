import './App.css'
import ChefsTable from './components/ChefsTables/ChefsTable'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'
import RecipesHading from './components/RecipesHeading/RecipesHading'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <RecipesHading></RecipesHading>
      <div className='max-w-[1320px] mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-10 mg:gap-0'>
          <Recipes></Recipes>
          <ChefsTable></ChefsTable>
      </div>
    </>
  )
}

export default App
