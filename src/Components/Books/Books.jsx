
import Book from "./Book";
import useBooksData from "../Hooks/useBooksData";

const Books = () => {
    const {books, loading} = useBooksData();

  return (
    <>
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-bold text-center">Books</h2>
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
