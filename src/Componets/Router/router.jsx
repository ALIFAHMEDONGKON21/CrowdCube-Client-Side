import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../assets/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "../../Login";
import Register from "../../Register";

import AllCampaigns from "./pages/HaderPage/AllCampaigns";
import Home from "./pages/HaderPage/Home";
import AddCampaign from "../PrivtivComponets/AddCampaign";
import MyCampaigns from "../PrivtivComponets/MyCampaigns.JSX";
import UpdateCampaign from "../UpdatepagefrommyCampaine/UpdateCampaign";




const router = createBrowserRouter([
{
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
        path:'/',
        element:<Home></Home>
        },
        {
            path:'/all-campaign',
            element:<AllCampaigns></AllCampaigns>
        },
        {
            path:'/addcampaign',
            element:<AddCampaign></AddCampaign>  
        },
        {
        path:'/my-campaigns',
        element:<MyCampaigns></MyCampaigns>,
        },
                    
        {
            path:'/updatecampaign/:id',
            element:<UpdateCampaign></UpdateCampaign>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
    ]
       
    
},



])

export default router;