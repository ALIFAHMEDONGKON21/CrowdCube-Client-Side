import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const RecentCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
  
    useEffect(() => {
      const fetchCampaigns = async () => {
        try {
          const response = await fetch("https://crowduble-server.vercel.app/campaigns"); // Replace with your API endpoint
          const data = await response.json();
  
          // Sort by creation date (assuming campaigns have a 'createdAt' field)
          const recentCampaigns = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setCampaigns(recentCampaigns.slice(0, 4)); // Show top 4 recent campaigns
        } catch (error) {
          console.error("Error fetching recent campaigns:", error);
        }
      };
  
      fetchCampaigns();
    }, []);
  
    return (
      <div className="bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Recent Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white shadow-md rounded-lg p-6">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{campaign.title}</h3>
              <p className="text-gray-600 mt-2">{campaign.description.slice(0, 80)}...</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
                onClick={() => Navigate(`/campaign/${campaign.id}`)}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecentCampaigns;
  