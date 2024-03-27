import { Link } from "react-router-dom";
import { TbBookUpload } from "react-icons/tb";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
import PropTypes from 'prop-types'
const ReadBook = ({ book }) => {
  const {
    id,
    book_name,
    author,
    image,
    category,
    rating,
    publisher,
    total_pages,
    tags,
    year_of_publishing,
  } = book || {};
  return (
    <div>
      <div className="bg-base-100 shadow-xl sm:flex rounded-xl border my-6 sm:w-full p-5 w-[calc(100vw-18px)]">
        <div className="p-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl sm:max-h-48 max-h-min"
          />
        </div>
        <div className="text-left h-full space-y-3">
          <h2 className="sm:text-2xl text-xl font-semibold">{book_name}</h2>
          <h2 className="sm:text-xl text-lg font-semibold">By: {author}</h2>
          <div className="flex">
            <div>
              <p className="sm:space-x-5 space-x-2">
                <span className="sm:text-lg text-xs font-bold">Tags: </span>
                {tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-black-400 sm:font-semibold bg-green-300 text-xs sm:px-4 px-1 py-1 rounded-md"
                  >
                    {`#${tag}`}
                  </span>
                ))}
              </p>
            </div>
            <div className="mx-10">
              <span className="flex items-center space-x-2 text-sm sm:text-lg">
                <TbBookUpload />
                <p>Year of publishing: {year_of_publishing}</p>
              </span>
            </div>
          </div>
          <div className="flex items-center sm:space-x-12">
            <span className="flex items-center space-x-2 text-sm sm:text-lg">
            <RiMapPinUserFill />
              <p>Publisher: {publisher}</p>
            </span>
            <span className="flex items-center space-x-2 text-sm sm:text-lg">
            <MdMenuBook />
              <p>Total Pages: {total_pages}</p>
            </span>
          </div>
          <hr />
          <div className="sm:space-x-4 space-x-2">
            <button className="bg-blue-400 lg:text-xl font-bold text-xs px-2 py-1  rounded-full">Category: {category}</button>
            <button className="bg-orange-400 lg:text-xl font-bold text-xs px-2 py-1 rounded-full">Ratings: {rating}</button>
            <Link to={`/book-details/${id}`} className="bg-green-400 lg:text-xl font-bold text-xs px-2 py-1 rounded-full">View details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
ReadBook.propTypes = {
  book: PropTypes.object,
}
export default ReadBook;
