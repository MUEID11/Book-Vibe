import { useEffect, useState } from "react";
import { getWishes } from "../../Utils/localStorage";
import ReadBook from "./Readbook";
const Wish = () => {
  const [wishes, setWishes] = useState([]);
  useEffect(()=>{
    const storedBooks = getWishes();
    setWishes(storedBooks);
  },[])
  
  return (
    <div className="container mx-auto gap-10">
        {
          wishes.map(book => <ReadBook book={book} key={book.id}/>)
        }
    </div>
  );
};

export default Wish;
