import { Link } from "react-router-dom";
import banner from "./../../assets/Deception_Point-Dan_Brown-1d1da-33660.png";
const Banner = () => {
  return (
    <div className="container sm:mx-auto sm:my-10 sm:p-20 p-5 bg-stone-200 rounded-lg">
      <div className="flex items-center justify-around">
        <div className="space-y-8">
          <h2 className="sm:text-6xl text-2xl tracking-tighter font-extrabold">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="bg-green-400 text-white sm:font-bold px-4 py-2 rounded">
            <Link to="/listed-books">View the list</Link>
          </button>
        </div>
        <div>
          
          <img className="rounded sm:w-[300px] w-28" src={banner} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
