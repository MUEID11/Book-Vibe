import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import { getWishes } from "../../Utils/localStorage";
import ReadBook from "./Readbook";
const Wish = ({ sortId }) => {
  const [wishes, setWishes] = useState([]);
  useEffect(() => {
    const storedBooks = getWishes();
    if (sortId) {
      const sorted = storedBooks?.sort((a, b) => b[sortId] - a[sortId]);
      setWishes(sorted);
    } else {
      setWishes(storedBooks);
    }
  }, [sortId]);

  return (
    <div className="container mx-auto gap-10">
      {wishes.map((book) => (
        <ReadBook book={book} key={book.id} />
      ))}
    </div>
  );
};
Wish.propTypes = {
  sortId: PropTypes.string.isRequired,
}
export default Wish;
