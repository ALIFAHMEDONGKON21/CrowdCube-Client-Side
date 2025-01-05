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
import MyDonation from "./pages/MyDonation";
import CampaignDetails from "./pages/CampaignDetails";




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
            element:<UpdateCampaign></UpdateCampaign>,
            loader:({params})=>
                fetch(`http://localhost:5000/campaigns/${params.id}`)
            
        },
        {
        path:'/my-donations',
        element:<MyDonation></MyDonation>
        },

        {
            path: "/campaignDetails/:id",
            element: (
              
                <CampaignDetails></CampaignDetails>
              
            ),
            loader: async ({ params }) => {
                console.log("Loading campaign with ID:", params.id); // Debugging
                const response = await fetch(`http://localhost:5000/campaigns/${params.id}`);
              
                if (!response.ok) {
                  throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
              
                return response.json();
              },
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

