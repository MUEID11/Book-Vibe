import { useEffect, useState } from "react";
import { getBooks } from "../../Utils/localStorage";
import ReadBook from "./Readbook";

const Read = ({ sortId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    if (sortId) {
      const sorted = storedBooks?.sort((a, b) => a[sortId] - b[sortId]);
      setBooks(sorted);
    } else {
      setBooks(storedBooks);
    }
  }, [sortId]);

  return (
    <>
      <div className="container mx-auto gap-10">
        {books.map((book) => (
          <ReadBook book={book} key={book.id} />
        ))}
      </div>
    </>
  );
};

export default Read;
