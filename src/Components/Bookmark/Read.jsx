import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getBooks } from "../../Utils/localStorage";
import ReadBook from "./Readbook";

const Read = ({ sortId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    if (sortId) {
      console.log(sortId);
      const sorted = storedBooks?.sort((a, b) => b[sortId] - a[sortId]);
      setBooks(sorted);
    } else {
      setBooks(storedBooks);
    }
  }, [sortId]);

  return (
    <>
      <div className="container sm:mx-auto sm:gap-10">
        {books.map((book) => (
          <ReadBook book={book} key={book.id} />
        ))}
      </div>
    </>
  );
};

Read.propTypes = {
  sortId: PropTypes.string,
};
export default Read;
