// import PropTypes from 'prop-types';
import TimeIcon from '../../assets/images/time.png';
import FireIcon from '../../assets/images/fire.png';
import { PropTypes } from 'prop-types';
function Recipe({recipe}) {
    console.log(recipe)
    const {recipe_image, recipe_name, short_description, preparing_time,calories} = recipe;
    return (
        <div>
            <div className="card max-w-96 bg-base-100 border shadow-xl mx-6 mb-6">
                <figure className="px-10 pt-10"><img src={recipe_image} className="rounded-xl"  alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className="border-y py-5">
                        <h2 className="text-[18px] font-medium">Ingredients: 6</h2>
                    </div>
                    <div className='flex items-center'>
                        <p className='flex items-center gap-2'><span><img src={TimeIcon} alt="" /></span>{preparing_time}</p>
                        <p className='flex items-center gap-2'><span><img src={FireIcon} alt="" /></span>{calories}</p>
                    </div>
                    <div className="card-actions justify-star">
                        <button className="btn bg-[#0be58a] hover:bg-transparent hover:border-[#0be58a] rounded-full px-6">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


Recipe.propTypes = {
    recipe: PropTypes.object
};
export default Recipe;