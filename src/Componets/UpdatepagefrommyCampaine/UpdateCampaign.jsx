import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Router/pages/Context";
import Swal from "sweetalert2";


const UpdateCampaign = () => {
  const {id}=useParams();
 
  const data=useLoaderData()
  
  const[minimumDonation,setminimumDonation]=useState(data?.minimumDonation)
  const [title ,settitle]=useState(data?.title)
  const[deadline,setdeadline]=useState(data?.deadline)
  const [description,setdescription]=useState(data?.description)
  const [type,settype]=useState(data?.type)
  const [image,setimage]=useState(data?.image)

  const { user } = useContext(AuthContext);

  const handleUpdateSubmit = () => {
    const data={
      title,
      deadline,
      type,
      minimumDonation,
      image,
      description
    }
    fetch(`https://crowduble-server.vercel.app/campaigns/${id}`, {
      method: "PATCH",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then(data=>console.log(data) )
    .then((all)=>{
      Swal.fire('data update')
     })
  };

  return (
    <div className="container mx-auto mt-10 max-w-lg p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Campaign</h2>

      <form onSubmit={handleUpdateSubmit}>
        {/* Image URL */}
        <div className="form-control mb-4">
          <label className="label font-semibold">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="url"
            name="image"
            value={image}
            onChange={(e)=>{setimage(e.target.value)}}
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
            name="title"
            value={title}
            onChange={(e)=>{settitle(e.target.value)}}
            placeholder="Enter campaign title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Campaign Type */}
        <div className="form-control mb-4">
          <label className="label font-semibold">
            <span className="label-text">Campaign Type</span>
          </label>
          <select
            name="type"
            value={type}
            onChange={(e)=>settype(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option disabled>Select type</option>
            <option>Personal Issue</option>
            <option>Startup</option>
            <option>Business</option>
            <option>Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-control mb-4">
          <label className="label font-semibold">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
            placeholder="Write a brief description..."
            className="textarea textarea-bordered w-full"
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
            name="minimumDonation"
            value={minimumDonation}
            onChange={(e)=>{setminimumDonation(e.target.value)}}
            placeholder="Enter amount"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Deadline */}
        <div className="form-control mb-4">
          <label className="label font-semibold">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            value={deadline}
            onChange={(e)=>{setdeadline(e.target.value)}}
            className="input input-bordered w-full"
            required
          />
        </div>

         User Email (Read Only)
        <div className="form-control mb-4">
          <label className="label font-semibold">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="email"
            name="userEmail"
            value={user?.email}
            className="input input-bordered w-full bg-gray-200"
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
            value={user?.name}
            className="input input-bordered w-full bg-gray-200"
            readOnly
          />
        </div> 

        {/* Update Button */}
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
  );
};

export default UpdateCampaign;
