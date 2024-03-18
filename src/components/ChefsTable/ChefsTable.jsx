import PropTypes from 'prop-types';

function ChefsTable({chefsTable}) {
    // console.log(chefsTable);
                        
    const {recipe_name, calories, preparing_time} = chefsTable;
    return (
        < >
            <tr>
                <th>1</th>
                <td>{recipe_name}</td>
                <td>{calories}</td>
                <td>{preparing_time}</td>
                <td><button className="btn bg-[#0be58a] hover:bg-transparent hover:border-[#0be58a] rounded-full px-6">Preparing</button></td>
            </tr>            
        </ >
    );
}


ChefsTable.propTypes = {
    chefsTable: PropTypes.object
};
export default ChefsTable;