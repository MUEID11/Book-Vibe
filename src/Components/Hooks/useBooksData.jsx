import { useEffect, useState } from "react";

const useBooksData = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const fetchData = async() =>{
        setLoading(true);
        const res = await fetch('/books.json');
        const books = await res.json();
        setBooks(books);
        setLoading(false)
    };
    fetchData();
  },[])
  return {books, loading};
};

export default useBooksData;
