
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Router/pages/Context";
const UpdateCampaign = () => {
      const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const [formData, setFormData] = useState(data);
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const campaignTitle = form.campaignTitle.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const singleUpdateCampaigns = {
      imageURL,
      campaignTitle,
      campaignType,
      description,
      minDonation,
      deadline,
      userEmail,
      userName,
    };


    fetch(`http://localhost:5000/mycampaign/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleUpdateCampaigns),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Updated SucessFully",
            icon: "success",
            confirmButtonText: "Update",
          });
          setFormData(singleUpdateCampaigns);
        }
      });
  };
    return (
        <div>
            <div>
       <div className="container mx-auto mt-10 max-w-lg p-6 bg-white rounded-lg shadow-lg">
         <h2 className="text-2xl font-bold text-gray-800 mb-6">
           Update Campaign
         </h2>

         <form onSubmit={handleUpdateSubmit}>
           {/* Image URL  */}
           <div className="form-control mb-4">
             <label className="label font-semibold">
               <span className="label-text">Image URL</span>
             </label>
          <input
              type="url"
              name="imageURL"
              defaultValue={formData.imageURL}
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Campaign Title */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Campaign Title</span>
            </label>
            <input
              type="text"
              name="campaignTitle"
              defaultValue={formData.campaignTitle}
              placeholder="Enter campaign title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Campaign Type  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Campaign Type</span>
            </label>
            <select
              name="campaignType"
              className="select select-bordered w-full"
              defaultValue={formData.campaignType || ""}
              required
            >
              <option disabled selected>
                Select type
              </option>
              <option>Personal Issue</option>
              <option>Startup</option>
              <option>Business</option>
              <option>Creative Ideas</option>
            </select>
          </div>

          {/* Description  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Write a brief description..."
              className="textarea textarea-bordered w-full"
              defaultValue={formData.description}
              required
            ></textarea>
          </div>

          {/* Minimum Donation Amount */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter amount"
              className="input input-bordered w-full"
              defaultValue={formData.minDonation}
              required
            />
          </div>

          {/* Deadline  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full"
              defaultValue={formData.deadline}
              required
            />
          </div>

          {/* User Email (Read Only)  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              className="input input-bordered w-full  bg-gray-200 "
              defaultValue={user?.email || ""}
              readOnly
            />
          </div>

          {/* User Name (Read Only) */}
          <div className="form-control mb-6">
            <label className="label font-semibold">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              className="input input-bordered w-full bg-gray-200 "
              defaultValue={user?.displayName || ""}
              readOnly
            />
          </div>

          {/* Add Button  */}
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-orange-600 text-white w-full"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateCampaign;