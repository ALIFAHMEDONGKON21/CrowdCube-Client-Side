// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AllCampaigns = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc'); // Sorting order state
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('https://crowduble-server.vercel.app/campaigns')
//       .then((res) => res.json())
//       .then((data) => setCampaigns(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Sorting function
//   const sortCampaignsByDonation = () => {
//     const sortedCampaigns = [...campaigns].sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a.minimumDonation - b.minimumDonation;
//       } else {
//         return b.minimumDonation - a.minimumDonation;
//       }
//     });
//     setCampaigns(sortedCampaigns);
//     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 dark:bg-gray-800">
      
//       <div className="flex justify-between items-center mb-4">
//       <h1 className="text-2xl font-bold mb-4">All Campaigns</h1>
//         <button
//           onClick={sortCampaignsByDonation}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Sort by Minimum Donation ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
//         </button>
//       </div>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 ">
//             <th className="border border-gray-300  px-4 py-2">Image</th>
//             <th className="border border-gray-300 px-4 py-2">Title</th>
//             <th className="border border-gray-300 px-4 py-2">Type</th>
//             <th className="border border-gray-300 px-4 py-2">Minimum Donation</th>
//             <th className="border border-gray-300 px-4 py-2">Deadline</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaigns.map((campaign) => (
//             <tr key={campaign._id}>
//               <td className="border border-gray-300 dark:text-gray-100 px-4 py-2">
//                 <img
//                   src={campaign.image}
//                   alt={campaign.title}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               </td>
//               <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
//               <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
//               <td className="border border-gray-300 px-4 py-2">${campaign.minimumDonation}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {new Date(campaign.deadline).toLocaleDateString()}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   onClick={() => navigate(`/campaignDetails/${campaign._id}`)}
//                 >
//                   See More
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllCampaigns;



import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting order state
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://crowduble-server.vercel.app/campaigns')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error(err));
  }, []);

  // Sorting function
  const sortCampaignsByDonation = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.minimumDonation - b.minimumDonation;
      } else {
        return b.minimumDonation - a.minimumDonation;
      }
    });
    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
  };

  return (
    <div className="max-w-7xl mx-auto p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">All Campaigns</h1>
        <button
          onClick={sortCampaignsByDonation}
          className=" text-white px-4 py-2 rounded bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 "
        >
          Sort by Minimum Donation ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Image</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Title</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Type</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Minimum Donation
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Deadline</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id} className="dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                {campaign.title}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                {campaign.type}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                ${campaign.minimumDonation}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                {new Date(campaign.deadline).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <button
                  className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white p-2 rounded-lg"
                  onClick={() => navigate(`/campaignDetails/${campaign._id}`)}
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

