import { useEffect, useState } from "react";
import { getBooks } from "../../Utils/localStorage";

import ReadBook from "./Readbook";


const Read = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    const storedBooks = getBooks();
    setBooks(storedBooks);
  },[])
  
  return (
    <div className="container mx-auto gap-10">
        {
          books.map(book => <ReadBook book={book} key={book.id}/>)
        }
    </div>
  );
};

export default Read;
