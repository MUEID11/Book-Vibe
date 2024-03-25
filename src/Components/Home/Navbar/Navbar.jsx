import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to='/' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400' : 'font-bold'}>
                Home
              </NavLink>
              <NavLink to='/listed' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400' : 'font-bold'}>
                Listed Books
              </NavLink>
              <NavLink to='/pages' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400' : 'font-bold'}>
                Pages to read
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-extrabold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 cursor-pointer">
          <NavLink to='/' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded' : 'font-bold px-4 py-2'}>
                Home
              </NavLink>
              <NavLink to='/listed' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded' : 'font-bold px-4 py-2'}>
                Listed Books
              </NavLink>
              <NavLink to='/pages' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded' : 'font-bold px-4 py-2'}>
                Pages to read
              </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <a className="btn bg-green-400 text-white">Sign in</a>
          <a className="btn bg-green-300 text-white">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
