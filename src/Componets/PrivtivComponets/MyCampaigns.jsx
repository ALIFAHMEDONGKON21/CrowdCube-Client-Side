import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Router/pages/Context";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [mycampaigns, setMycampaigns] = useState([]);

  // Fetch campaigns
  useEffect(() => {
    if (user?.email) {
      setLoading(true); // Start loading

      fetch(`https://crowduble-server.vercel.app/mycampaign?email=${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch campaigns.");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Fetched campaigns:", data); // Debugging log
          setMycampaigns(data);
        })
        .catch((error) => {
          console.error("Error fetching campaigns:", error);
          Swal.fire("Error", "Failed to load campaigns.", "error");
        });
    }
  }, [user?.email]);

  // Handle delete
  const handleDelete = (id) => {
    if (!user?.email) {
      Swal.fire("Error", "You must be logged in to delete a campaign.", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleting campaign ID:", id); // Debugging log
        fetch(`https://crowduble-server.vercel.app/mycampaign/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete the campaign.");
            }
            return res.json();
          })
          .then((data) => {
            console.log("Delete response:", data); // Debugging log
            if (data.message === "Campaign deleted successfully!") {
              Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
              setMycampaigns((prev) =>
                prev.filter((campaign) => campaign._id !== id)
              );
            } else {
              Swal.fire("Error", data.message, "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire("Error", "Something went wrong while deleting.", "error");
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-800">
        My Campaigns
        
        
      </h2>
      {
       mycampaigns.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full text-center border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Id</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Minimum Donation</th>
                <th className="border px-4 py-2">Deadline</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mycampaigns.map((campaign, idx) => (
                <tr key={campaign._id} className="text-center dark:text-white">
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2">{campaign.title}</td>
                  <td className="border px-4 py-2">{campaign.type}</td>
                  <td className="border px-4 py-2">${campaign.minimumDonation}</td>
                  <td className="border px-4 py-2">{campaign.deadline}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <Link to={`/updatecampaign/${campaign._id}`}>
                      <button className="btn btn-sm bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow hover:text-white">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : 
        (
          // Loader Section
          <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-black-500"></div>
            </div>
        )
      
      }
    </div>
  );
};

export default MyCampaign;
