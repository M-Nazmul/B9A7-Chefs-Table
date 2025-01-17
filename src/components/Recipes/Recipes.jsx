import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

function Recipes({handleAddChefsTable}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
        // console.log(recipes);
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} 
                    recipe={recipe}
                    handleAddChefsTable={handleAddChefsTable}
                    ></Recipe>)
                }
            </div>
        </div>
    );
}


Recipes.propTypes = {
    handleAddChefsTable: PropTypes.func
};
export default Recipes;