import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navber from "./Router/pages/Navber";
import { ThemeProvider } from "./ThemeSwitcher/ThemeProvider";





const MainLayout = () => {
    return (
        <div >
           <ThemeProvider>
            <Navber></Navber>
            <div className=" dark:bg-gray-800">
            <div className="min-h-[calc(100vh-420px)] container mx-auto ">
             <Outlet></Outlet>
             
            </div>
            </div>
            <Footer></Footer>
            </ThemeProvider>
            
           
           
        </div>
    );
};

export default MainLayout;