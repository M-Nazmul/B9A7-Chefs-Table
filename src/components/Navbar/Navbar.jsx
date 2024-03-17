// import PropTypes from 'prop-types';
import Profile from '../../assets/images/profile.png'

function Navbar() {
    return (
      <div>
        <div className="max-w-[1320px] mx-auto  navbar bg-base-100 md:my-7">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
                <div className="form-control w-full">
                  <input type="text" placeholder="Search" className="input w-full input-bordered  md:w-auto" />
                </div>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <div className="navbar-end ">
          <div className="form-control hidden lg:flex">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
            <a href='#' className='ml-3 md:ml-6'>
              <img src={Profile} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
}

Navbar.propTypes = {
    
};
export default Navbar;