import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "../../Login";
import Register from "../../Register";

import AllCampaigns from "./pages/HaderPage/AllCampaigns";
import Home from "./pages/HaderPage/Home";
import AddCampaign from "../PrivtivComponets/AddCampaign";
import MyCampaigns from "../PrivtivComponets/MyCampaigns.JSX";
import UpdateCampaign from "../UpdatepagefrommyCampaine/UpdateCampaign";
import MyDonation from "../PrivtivComponets/MyDonation";
import CampaignDetails from "./pages/CampaignDetails";
import PrivateRoute from "../Privite Router/PrivateRouter";




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
            element:<AllCampaigns></AllCampaigns>,
           
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
                fetch(`https://crowduble-server.vercel.app/campaigns/${params.id}`)
            
        },
        {
        path:'/my-donations',
        element:<MyDonation></MyDonation>,
        

        },

        {
            path: "/campaignDetails/:id",
            element: 
                <PrivateRoute>
                <CampaignDetails></CampaignDetails>
                </PrivateRoute>,
                // loader:({params})=>
                //     fetch(`https://crowduble-server.vercel.app/campaigns/${params.id}`)

                loader: async ({ params }) => {
                    try {
                      const response = await fetch(`https://crowduble-server.vercel.app/campaigns/${params.id}`);
                  
                      if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.statusText}`);
                      }
                  
                      return response.json();
                    } catch (error) {
                      console.error("Error in loader:", error);
                      throw new Error("Unable to fetch campaign details.");
                    }
                  }
                  
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

