import { Outlet } from "react-router-dom";
import Footer from "../Componets/Footer";
import Navber from "../Componets/Router/pages/Navber";
import { ThemeProvider } from "../Componets/ThemeSwitcher/ThemeProvider";





const MainLayout = () => {
    return (
        <div >
           <ThemeProvider>
            <Navber></Navber>
            <div className="min-h-[calc(100vh-420px)] container mx-auto ">
             <Outlet></Outlet>
             
            </div>
            <Footer></Footer>
            </ThemeProvider>
           
           
        </div>
    );
};

export default MainLayout;