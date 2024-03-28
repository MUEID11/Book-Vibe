// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { FaBookOpenReader } from "react-icons/fa6";
// import { BiSolidBookmarkHeart } from "react-icons/bi";
import { useState } from "react";
import Read from "../Bookmark/Read";
import Wish from "../Bookmark/Wish";
const ListedBooks = () => {
  const [tab, setTab] = useState("read");
  const [sortId, setSortId] = useState("");

  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto bg-gray-50 p-6 rounded-lg my-6">
          <h1 className="text-4xl font-bold text-center">Books</h1>
        </div>
        <div className="flex justify-center">
          <div>
            <select
              onChange={(e) => setSortId(e.target.value)}
              className="rounded-lg text-lg px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
            >
              <option value="">Sort</option>
              <option value="rating">Rating</option>
              <option value="total_pages">Number of pages</option>
              <option value="year_of_publishing">Publish year</option>
            </select>
          </div>
        </div>
        {/* tabs*/}

        <div className="flex items-center justify-center overflow-x-auto overflow-y-hidden sm:justify-start sm:flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              checked={tab === "read"}
              onChange={() => setTab("read")}
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Read"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <Read sortId={sortId} />
            </div>

            <input
              checked={tab === "wishlist"}
              onChange={() => setTab("wishlist")}
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Wishlist"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <Wish sortId={sortId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
