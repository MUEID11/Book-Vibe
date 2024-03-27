import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { saveBook, saveWishList } from "../../Utils/localStorage";
import Spinner from "../CustomSpinner/Spinner";


const BookDetails = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState([]);
  const { books, loading } = useBooksData();
 

  useEffect(() => {
    if (books) {
      const bookData = books.find((book) => book.id === +id);
      setBookData(bookData);
    }
  }, [books, id]);

  const {
    book_name,
    author,
    image,
    category,
    rating,
    total_pages,
    publisher,
    year_of_publishing,
    tags,
    review,
  } = bookData || {};

  const handleRead = (bookData) =>{
    saveBook(bookData);
  }
  const handleWishList = (bookData) =>{
    saveWishList(bookData);
  }
  if(loading){
    return <Spinner/>
  }
  return (
    
    <div className="hero min-h-[calc(100vh-68px)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{book_name}</h1>
          <h2 className="text-2xl font-semibold">By: {author}</h2>
          <hr />
          <p className="text-xl font-bold">{category}</p>
          <hr />
          <p>
            <span className="text-xl font-medium py-4">Review: </span> {review}
          </p>
          <div>
            <p className="space-x-5">
              <span className="text-xl font-bold">Tags: </span>
              {tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-black-400 font-semibold bg-green-300 px-4 py-2 rounded-md"
                >
                  # {tag}
                </span>
              ))}
            </p>
          </div>
          <hr />
          <div className="text-xl">
            <table>
              <tbody>
                <tr>
                  <td>Number of pages:</td>
                  <td className="font-bold">{total_pages}</td>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold">{publisher}</td>
                </tr>
                <tr>
                  <td>Year of Publish:</td>
                  <td className="font-bold">{year_of_publishing}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td className="font-bold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions ">
            <button onClick={()=>handleRead(bookData)} className="btn bg-green-400">
              Read
            </button>
            <button onClick={()=>handleWishList(bookData)}className="btn bg-blue-400">
              Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
