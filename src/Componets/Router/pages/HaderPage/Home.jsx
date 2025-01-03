import Banner from "../Banner";

import  RunningCampaigns from '../RunningCampaigns';
import Testimonials from "../Testimonials";
import TopContributors from "../TopContributors";
import FeaturedCampaigns from "./FeaturedCampaigns ";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns></RunningCampaigns>
            <TopContributors></TopContributors>
            <FeaturedCampaigns></FeaturedCampaigns>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;