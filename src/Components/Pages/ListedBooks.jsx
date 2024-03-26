import { Link, Outlet } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { BiSolidBookmarkHeart } from "react-icons/bi";
import { useState } from "react";
const ListedBooks = () => {
    const[tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto bg-gray-50 p-6 rounded-lg my-6">
          <h1 className="text-4xl font-bold text-center">Books</h1>
        </div>
        <div className="my-6 items-center">
          <button className="bg-green-500 font-bold p-2 text-white">
            Short by
          </button>
        </div>
        {/* tabs*/}
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
          onClick={()=>setTabIndex(0)}
            to=''
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 ${tabIndex === 0 ? 'border border-b-0': "border-b"} space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <FaBookOpenReader />
            <span>Read Books</span>
          </Link>
          <Link
          to={`wish`}
          onClick={()=>setTabIndex(1)}
            rel="noopener noreferrer"
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 ${tabIndex === 1 ? 'border border-b-0': "border-b"} space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <BiSolidBookmarkHeart />
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet/>
      </div>
    </>
  );
};

export default ListedBooks;
