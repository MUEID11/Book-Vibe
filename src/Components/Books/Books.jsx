import { useLoaderData } from "react-router-dom";

const Books = () => {
    const books = useLoaderData();
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-4xl font-bold text-center">Books</h2>
    </div>
  );
};

export default Books;
