import { Link } from "react-router-dom";
import { TbBookUpload } from "react-icons/tb";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
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
      <div className="bg-base-100 shadow-xl flex rounded-xl border my-6 w-full">
        <div className="p-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl sm:min-h-48 h-28"
          />
        </div>
        <div className="text-left h-full space-y-3">
          <h2 className="text-2xl font-semibold">{book_name}</h2>
          <h2 className="text-xl font-semibold">By: {author}</h2>
          <div className="flex">
            <div>
              <p className="space-x-5">
                <span className="text-xl font-bold">Tags: </span>
                {tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-black-400 font-semibold bg-green-300 px-4 py-1 rounded-md"
                  >
                    # {tag}
                  </span>
                ))}
              </p>
            </div>
            <div className="mx-10">
              <span className="flex items-center space-x-2">
                <TbBookUpload />
                <p>Year of publishing: {year_of_publishing}</p>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-12">
            <span className="flex items-center space-x-2">
            <RiMapPinUserFill />
              <p>Publisher: {publisher}</p>
            </span>
            <span className="flex items-center space-x-2">
            <MdMenuBook />
              <p>Total Pages: {total_pages}</p>
            </span>
          </div>
          <hr />
          <div className="space-x-4">
            <button className="bg-blue-400 px-2 py-1 rounded-full">Category: {category}</button>
            <button className="bg-orange-400 px-2 py-1 rounded-full">Ratings: {rating}</button>
            <Link to={`/book-details/${id}`} className="bg-green-400 px-2 py-1 rounded-full">View details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
