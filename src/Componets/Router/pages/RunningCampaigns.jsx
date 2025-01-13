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
        const response = await fetch("http://localhost:5000/homecampaign");

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
    return <p className="text-center text-gray-500">Loading campaigns...</p>;
  }

  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
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
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 truncate">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {campaign.description.slice(0, 80)}...
                </p>
                <p className="text-gray-500 mt-2">
                  <strong>Type:</strong> {campaign.type}
                </p>
                <p className="text-gray-500 mt-1">
                  <strong>Minimum Donation:</strong> ${campaign.minimumDonation}
                </p>
                <p className="text-gray-500 mt-1">
                  <strong>Total Donations:</strong> ${campaign.totalDonations || 0}
                </p>
                <p className="text-gray-500 mt-1">
                  <strong>Deadline:</strong>{" "}
                  {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <button
                  className="bg-blue-600 text-white mt-4 px-4 py-2 w-full rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
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
