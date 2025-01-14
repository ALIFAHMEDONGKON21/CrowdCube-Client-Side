import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Router/pages/Context";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minimumDonation: "",
    deadline: "",
    userEmail: user?.email || "",
    userName: user?.name || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Campaign added successfully!");
        setFormData({
          image: "",
          title: "",
          type: "personal issue",
          description: "",
          minimumDonation: "",
          deadline: "",
          userEmail: user?.email || "",
          userName: user?.name || "",
        });
      } else {
        toast.error("Failed to add the campaign.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className=" dark:bg-gray-800 dark:text-gray-100">
      <div className="max-w-lg mx-auto  p-6 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-6">Add New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Image/Thumbnail (URL)</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded dark:border-gray-600 dark:bg-gray-700"
          placeholder="Enter image URL"
          required
        />

        <label className="block mb-2 font-medium">Campaign Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded dark:border-gray-600 dark:bg-gray-700"
          placeholder="Enter campaign title"
          required
        />

        <label className="block mb-2 font-medium">Campaign Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded dark:border-gray-600 dark:bg-gray-700"
        >
          <option value="personal issue">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative ideas">Creative Ideas</option>
        </select>

        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded dark:border-gray-600 dark:bg-gray-700"
          placeholder="Enter campaign description"
          rows="4"
          required
        ></textarea>

        <label className="block mb-2 font-medium">Minimum Donation Amount</label>
        <input
          type="number"
          name="minimumDonation"
          value={formData.minimumDonation}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded dark:border-gray-600 dark:bg-gray-700"
          placeholder="Enter minimum donation amount"
          required
        />

        <label className="block mb-2 font-medium">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded dark:border-gray-600 dark:bg-gray-700"
          required
        />

        <label className="block mb-2 font-medium">User Email</label>
        <input
          type="email"
          name="userEmail"
          value={user.email}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
        />

        <label className="block mb-2 font-medium">User Name</label>
        <input
          type="text"
          name="userName"
          value={user.displayName}
          readOnly
          className="w-full mb-4 p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </div>

    </div>
  );
};

export default AddCampaign;
