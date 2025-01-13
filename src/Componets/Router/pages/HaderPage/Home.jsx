import Banner from "../Banner";
import CallToAction from "../CallToAction.JSX";
import  RunningCampaigns from '../RunningCampaigns';

import FeaturedCampaigns from "./FeaturedCampaigns ";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns></RunningCampaigns>
          
            <FeaturedCampaigns></FeaturedCampaigns>
            <CallToAction></CallToAction>
            
        </div>
    );
};

export default Home;