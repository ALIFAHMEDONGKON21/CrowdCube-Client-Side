// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "./Context"; // Import your AuthContext
// import { toast } from "react-hot-toast";
// import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa"; // Optional icon for logout
// import logo from "../../../assets/10assimentwebsite logo.png";
// import { useTheme } from "../../ThemeSwitcher/ThemeProvider";



// const Navbar = () => {
//   const { isDarkMode, toggleTheme } = useTheme();
//   const { user, logout } = useContext(AuthContext); // Access logout function from context
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

//   const handleLogoutClick = () => {
//     if (logout) {
//       logout()
//         .then(() => {
//           toast.success("Logged out successfully!", {
//             duration: 5000,
//             position: "top-center",
//           });
//           navigate("/login"); // Redirect to login page after successful logout
//         })
//         .catch((err) => {
//           toast.error(`Logout failed: ${err.message}`, {
//             duration: 4000,
//             position: "top-center",
//           });
//         });
//     } else {
//       console.error("logout function not found");
//     }
//   };

//   return (
//     <nav className="p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <Link to="/">
//             <img src={logo} alt="Website Logo" className="w-30 h-20" />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-blue-400">Home</Link>
//           <Link to="/all-campaign" className="hover:text-blue-400">All Campaign</Link>
//           {user && (
//             <>
            
//               <Link to="/addcampaign" className="hover:text-blue-400">Add New Campaign</Link>
//               <Link to="/my-campaigns" className="hover:text-blue-400">My Campaign</Link>
//               <Link to="/my-donations" className="hover:text-blue-400">My Donations</Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Menu (Mobile) */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
//             ☰
//           </button>
//         </div>

//         {isOpen && (
//           <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
//             <Link to="/" className="block p-2">Home</Link>
//             <Link to="/all-campaign" className="block p-2">All Campaign</Link>
//             {user && (
//               <>
//                 <Link to="/add-new-campaign" className="block p-2">Add New Campaign</Link>
//                 <Link to="/my-campaigns" className="block p-2">My Campaign</Link>
//                 <Link to="/my-donations" className="block p-2">My Donations</Link>
//               </>
//             )}
//           </div>
//         )}

        
//         <button
//           onClick={toggleTheme}
//           className="btn btn-circle btn-outline dark:bg-gray-800"
//         >
//           {isDarkMode ? (
//             <FaSun className="text-yellow-500 text-xl" />
//           ) : (
//             <FaMoon className="text-gray-800 text-xl" />
//           )}
//         </button>
        
//         <div className="flex items-center space-x-4">
//           {!user ? (
//             <>
//               <Link to="/login" className="hover:text-blue-400">Login</Link>
//               <Link to="/register" className="hover:text-blue-400">Register</Link>
//             </>
//           ) : (
//             <div className="flex items-center space-x-2">
//               <img
//                 src={user.photoURL}
//                 alt="User"
//                 className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
//                 title={user.displayName}
//               />
//               <button
//                 onClick={handleLogoutClick}
//                 className="flex items-center text-sm hover:text-red-500"
//               >
//                 <FaSignOutAlt className="mr-2" /> Log out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Context";
import { toast } from "react-hot-toast";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import logo from "../../../assets/10assimentwebsite logo.png";
import { useTheme } from "../../ThemeSwitcher/ThemeProvider";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutClick = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(`Logout failed: ${err.message}`);
      });
  };

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-30 h-20" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-800 dark:text-white"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-6 ${isDarkMode ? "dark:text-white" : ""}`}>
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/all-campaign" className="hover:text-blue-400">All Campaign</Link>
          {user && (
            <>
              <Link to="/addcampaign" className="hover:text-blue-400">Add New Campaign</Link>
              <Link to="/my-campaigns" className="hover:text-blue-400">My Campaign</Link>
              <Link to="/my-donations" className="hover:text-blue-400">My Donations</Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
            <Link to="/" className="block p-2">Home</Link>
            <Link to="/all-campaign" className="block p-2">All Campaign</Link>
            {user && (
              <>
                <Link to="/addcampaign" className="block p-2">Add New Campaign</Link>
                <Link to="/my-campaigns" className="block p-2">My Campaign</Link>
                <Link to="/my-donations" className="block p-2">My Donations</Link>
              </>
            )}
          </div>
        )}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 btn btn-circle btn-outline"
        >
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
        </button>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
              <Link to="/register" className="hover:text-blue-400">Register</Link>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                title={user.displayName}
              />
              <button
                onClick={handleLogoutClick}
                className="flex items-center text-sm hover:text-red-500"
              >
                <FaSignOutAlt className="mr-2" /> Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

