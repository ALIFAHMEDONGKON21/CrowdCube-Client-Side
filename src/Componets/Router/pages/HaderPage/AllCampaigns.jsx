import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/campaigns')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Campaigns</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Minimum Donation</th>
            <th className="border border-gray-300 px-4 py-2">Deadline</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
              <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
              <td className="border border-gray-300 px-4 py-2">${campaign.minimumDonation}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(campaign.deadline).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/campaigns/${campaign._id}`)}
                >
                  See More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaigns;
