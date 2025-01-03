import { Outlet } from "react-router-dom";
import Footer from "../Componets/Footer";
import Navber from "../Componets/Router/pages/Navber";




const MainLayout = () => {
    return (
        <div >
            <Navber></Navber>
            <div className="min-h-[calc(100vh-420px)] container mx-auto ">
             <Outlet></Outlet>
             
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;