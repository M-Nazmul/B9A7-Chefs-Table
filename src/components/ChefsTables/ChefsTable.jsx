// import PropTypes from 'prop-types';

function ChefsTable() {
    return (
        <div>
            {/* <div className="card max-w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
            <div className="overflow-x-auto md:pr-3">
                <h2 className="text-center text-2xl font-semibold pb-4">Want to cook: 01</h2> <hr />
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
                            <td>Chicken Caesar Salad</td>
                            <td>30 minutes</td>
                            <td>400 calories</td>
                            <td><button className="btn bg-[#0be58a] hover:bg-transparent hover:border-[#0be58a] rounded-full px-6">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text-center text-2xl font-semibold pb-4 mt-4">Currently cooking: 02</h2> <hr />
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


ChefsTable.propTypes = {
    
};
export default ChefsTable;