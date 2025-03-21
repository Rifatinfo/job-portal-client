import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
// import AnimatedNavMenu from "../Shared/Navbar/AnimatedNavMenu";

const MainLayout = () => {
    return (
        <div>
            {/* <AnimatedNavMenu/> */}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;