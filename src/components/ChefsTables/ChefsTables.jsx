import PropTypes from 'prop-types';
import ChefsTable from '../ChefsTable/ChefsTable';

function ChefsTables({chefsTables}) {
    return (
        <div>
            <div className="overflow-x-auto md:pr-3">
                <h2 className="text-center text-2xl font-semibold pb-4">Want to cook: {chefsTables.length} </h2> <hr />
                <table className="table mt-4">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        chefsTables.map(chefsTable => <ChefsTable key={chefsTable.recipe_id} chefsTable={chefsTable} ></ChefsTable>)
                        }
                    </tbody>
                </table>
                <h2 className="text-center text-2xl font-semibold pb-4 mt-4">Currently cooking: 0</h2> <hr />
                <table className="table mt-4">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Spaghetti Bolognese</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        {/* row 2 */}
                            <tr className="bg-base-200">
                            <th>1</th>
                            <td>Spaghetti Bolognese</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        {/* row 2 */}
                            <tr className="">
                            <th></th>
                            <td></td>
                            <td>Total Time = 45 minutes</td>
                            <td>Total Calories = 1050 calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


ChefsTables.propTypes = {
    chefsTables: PropTypes.array
};
export default ChefsTables;