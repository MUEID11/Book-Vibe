import { NavLink,Link } from "react-router-dom";

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
              <NavLink to='/' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Home
              </NavLink>
              <NavLink to='/listed-books' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Listed Books
              </NavLink>
              <NavLink to="/pages" className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Pages to read
              </NavLink>
              <NavLink to="/contact" className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Contact
              </NavLink>
              <NavLink to="/about" className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                About
              </NavLink>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost sm:text-2xl font-extrabold">BookVibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 cursor-pointer">
          <NavLink to='/' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Home
              </NavLink>
              <NavLink to='/listed-books' className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Listed Books
              </NavLink>
              <NavLink to="/pages" className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Pages to read
              </NavLink>
              <NavLink to="/contact" className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                Contact
              </NavLink>
              <NavLink to="/about" className={({isActive})=> isActive ? 'text-green-400 font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-400 hover:font-bold  hover:text-white transition-colors' : 'font-bold px-4 py-2'}>
                About
              </NavLink>
              
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link className="bg-green-400 hover:bg-gray-400 transition sm:font-bold border text-white px-2 py-1 rounded-md">Sign in</Link>
          <Link className="bg-blue-400 hover:bg-gray-400 transition sm:font-bold border text-white px-2 py-1 rounded-md">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
