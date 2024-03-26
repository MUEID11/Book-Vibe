import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default Home;