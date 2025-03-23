import { useContext, useState } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
// import AuthContext from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const [open, setOpen] = useState(false); // Mobile menu state
    const [active, setActive] = useState("Home"); // Track active menu item

    const menuItems = [
        { name: "Home", link: "/" },
        { name: "My Application", link: "/MyApplications" },
        { name: "Add Jobs", link: "/add-jobs" },
        { name: "My Posted Jobs", link: "/my-posted-job" },
        { name: "View Applications", link: "/viewApplications" }
    ];
     
    const handleSignOut = () =>{
        signOutUser()
        .then( () => {
            console.log("Sign Out");
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleNavClick = (item) => {
        setActive(item); // Set active menu
        setOpen(false); // Close mobile menu
    };

    return (
        <div className="w-full relative z-20">
            <header className="sticky top-0 left-0 w-full flex justify-between items-center px-5 py-3 bg-white text-black shadow-md z-50">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img className="h-[40px] w-auto" src="" alt="Sorob Logo" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex items-center gap-4 font-semibold text-xl">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => handleNavClick(item.name)}
                            className={`text-xl px-4 py-2 rounded-md cursor-pointer transition-all 
                                ${active === item.name ? "text-black" : "hover:text-blue"}`}
                        >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Search Icon */}
                <div className="hidden md:flex items-center gap-3 font-semibold text-lg">
                    {
                        user ? <><Link to="/log Out"><button onClick={handleSignOut} className="btn px-8 rounded-md py-2 border-none bg-[#3c65f5] text-white">Log Out</button></Link></> : <>
                                <Link to="/signIn"><button className="btn px-8 rounded-md py-2 border-none bg-[#3c65f5] text-white">Sign In</button></Link>
                                <Link to="/register"><button className="btn px-8 rounded-md py-2 border-none bg-[#3c65f5] text-white">Register</button></Link>
                        </>
                    }
                   
                </div>

                {/* Mobile Menu Toggle Button */}
                <span
                    className="lg:hidden block text-2xl cursor-pointer mr-3"
                    onClick={() => setOpen(true)}
                >
                    <RiMenuUnfold2Fill />
                </span>
            </header>

            {/* Background Overlay with Slide-in Effect */}
            <div
                className={`fixed inset-0 h-screen bg-gradient-to-r  to-blue-600/70 z-50 
                transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Click Outside to Close */}
                <div className="absolute inset-0" onClick={() => setOpen(false)}></div>
            </div>

            {/* Mobile Menu Container with Roll-down Effect */}
            <div
                className={`fixed top-0 left-0 h-full bg-white w-2/3 max-w-[350px] shadow-lg z-50 
                transition-all duration-500 ease-in-out transform ${open ? "translate-x-0" : "-translate-x-full"}
                ${open ? "max-h-screen overflow-hidden" : "max-h-0"}`}
            >
                {/* Close Button */}
                <span
                    className="absolute top-3 right-3 text-3xl cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    <BiX />
                </span>

                {/* Mobile Menu Items */}
                <ul className="font-semibold flex flex-col pt-10">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => handleNavClick(item.name)}
                            className={`w-full list-none px-6 py-3 border-b cursor-pointer transition-all 
                                ${active === item.name ? "text-blue" : "hover:bg-gray-200"}`}
                        >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
