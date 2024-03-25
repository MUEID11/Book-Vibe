import Header from "../Components/Header/Header";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;