
import Book from "./Book";
import useBooksData from "../Hooks/useBooksData";
import Spinner from "../CustomSpinner/Spinner";

const Books = () => {
    const {books, loading} = useBooksData();
    if(loading){
      return <Spinner/>
    }
  return (
    <>
    <div className="container mx-auto sm:my-16 my-4">
      <h2 className="sm:text-4xl text-2xl font-bold text-center">Books</h2>
    </div>
    <div className="container mx-auto sm:grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        {
          books.map(book => <Book book={book} key={book.id}/>)
        }
    </div>
    </>
  );
};

export default Books;
