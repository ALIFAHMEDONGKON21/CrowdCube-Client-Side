import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch campaigns data from backend
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("https://crowduble-server.vercel.app/homecampaign");

        if (!response.ok) {
          throw new Error("Failed to fetch campaigns");
        }

        const data = await response.json();
        setCampaigns(data); // Set all campaigns
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return  <div className="flex items-center justify-center h-64">
    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-black-500"></div>
  </div>;
  }

  return (
    <div className="bg-gray-50 py-10 px-6  dark:bg-gray-800">
      <h2 className="text-4xl font-extrabold dark:text-gray-100  text-center mb-10">
        All Campaigns
      </h2>

      {campaigns.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6  dark:bg-gray-900 dark:text-gray-100">
                <h3 className="text-2xl dark:text-gray-100 font-semibold text-gray-800 truncate">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-100 mt-2">
                  {campaign.description.slice(0, 80)}...
                </p>
                <p className="text-gray-500 dark:text-gray-100 mt-2">
                  <strong>Type:</strong> {campaign.type}
                </p>
                <p className="text-gray-500 dark:text-gray-100 mt-1">
                  <strong>Minimum Donation:</strong> ${campaign.minimumDonation}
                </p>
                <p className="text-gray-500 dark:text-gray-100 mt-1">
                  <strong>Total Donations:</strong> ${campaign.totalDonations || 0}
                </p>
                <p className="text-gray-500 dark:text-gray-100 mt-1">
                  <strong>Deadline:</strong>{" "}
                  {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <button
                  className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow mt-4  w-full font-medium hover:bg-blue-700 transition-all duration-200"
                  onClick={() => navigate(`/campaignDetails/${campaign._id}`)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No campaigns found.</p>
      )}
    </div>
  );
};

export default RunningCampaigns;
