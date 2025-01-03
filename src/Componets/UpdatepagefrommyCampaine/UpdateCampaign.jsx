import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Router/pages/Context";

const UpdateCampaign = () => {
    const {user}=useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    title: "",
    type: "",
    description: "",
    minDonation: "",
    deadline: "",
    imageURL: "",
  });

  // Fetch campaign details to populate the form
  useEffect(() => {
    fetch(`http://localhost:5000/mycampaign?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCampaign(data))
      .catch((error) =>
        Swal.fire("Error", "Failed to load campaign details.", "error")
      );
  }, [id]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Updating campaign with ID:", id);
    console.log("Updated campaign data:", updatedCampaign);
  
    fetch(`http://localhost:5000/mycampaign/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Campaign updated successfully!") {
          Swal.fire("Success", data.message, "success");
          navigate("/mycampaigns");
        } else {
          Swal.fire("Error", data.message, "error");
        }
      })
      .catch((error) => {
        console.error("Error updating campaign:", error);
        Swal.fire("Error", "Failed to update campaign.", "error");
      });
  };
  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
        Update Campaign
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={campaign.title}
            onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            value={campaign.type}
            onChange={(e) => setCampaign({ ...campaign, type: e.target.value })}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={campaign.description}
            onChange={(e) =>
              setCampaign({ ...campaign, description: e.target.value })
            }
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Donation</label>
          <input
            type="number"
            value={campaign.minDonation}
            onChange={(e) =>
              setCampaign({ ...campaign, minDonation: e.target.value })
            }
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deadline</label>
          <input
            type="date"
            value={campaign.deadline}
            onChange={(e) =>
              setCampaign({ ...campaign, deadline: e.target.value })
            }
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={campaign.imageURL}
            onChange={(e) =>
              setCampaign({ ...campaign, imageURL: e.target.value })
            }
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Update Campaign
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
