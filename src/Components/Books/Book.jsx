import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Book = ({ book }) => {
  const {id, book_name, author, image, category, rating,tags } = book || {};
  return (
    <Link to={`/book-details/${id}`}>
      <div className="sm:max-w-sm max-w-full sm:m-0 m-4 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />

        <div className="mt-6 mb-2">
          <div className="space-x-2"> 
              {
                tags?.slice(0,2).map((tag,idx) => <span key={idx} className="text-green-400 bg-green-100 p-1 rounded-md">{tag}</span>)
              }
          </div>
          <span className="block font-bold tracking-widest uppercase mt-2 dark:text-violet-600">
            {book_name}
          </span>
          <h2 className="font-semibold tracking-wide">By: {author}</h2>
        </div>
        <hr className="my-4"/>
        <div className="text-xs font-medium tracking-tighter flex justify-between">
          <p>
            <span>{category}</span>
          </p>
          <p>
            <span className="flex items-center">
              {rating} <CiStar className="text-xl ml-2" />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Book;
