import { useState } from "react";

const FeaturedCampaigns = () => {
  const [featuredCampaigns] = useState([
    {
      id: 1,
      title: "Save the Ocean",
      description: "A campaign to clean up the oceans and protect marine life.",
      image: "https://i.ibb.co.com/ysg2qzK/beautiful-nature-landscape-ko-hin-sorn-small-island-with-surprisingly-overlap-rocks-andaman-sea-sky.jpg",
      deadline: "2025-12-31",
    },
    {
      id: 2,
      title: "Help Fight Cancer",
      description: "Support cancer research and give hope to millions of people.",
      image: "https://i.ibb.co.com/HYBk6DQ/diverse-people-refugee-camps-23-2151561513.jpg",
      deadline: "2025-10-15",
    },
    {
      id: 3,
      title: "Build Homes for Homeless",
      description: "A campaign to build homes for people who have lost everything.",
      image: "https://i.ibb.co.com/XSYp4Ws/world-cancer-day-with-people-hugging-23-2151064696.jpg",
      deadline: "2025-09-01",
    },
  ]);

  return (
    <div className="bg-gray-50 py-10 px-6  dark:bg-gray-800">
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-8">
        Featured Campaigns
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark:text-gray-100  ">
        {featuredCampaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white shadow-md rounded-lg p-6 dark:text-gray-100 dark:bg-gray-900">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{campaign.title}</h3>
            <p className="text-gray-600 dark:text-gray-100 mt-2">{campaign.description.slice(0, 100)}...</p>
            <p className="text-gray-500 dark:text-gray-100 mt-2">
              <strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCampaigns;
