import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Router/pages/Context";

const MyDonation = () => {
  const [donations, setDonations] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (user?.email) {
      setLoading(true); // Start loading
      fetch(`https://crowduble-server.vercel.app/donation?email=${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch donations");
          }
          return res.json();
        })
        .then((data) => {
          setDonations(data);
        })
        .catch((err) => console.error("Error fetching donations:", err))
        .finally(() => {
          setLoading(false); // Stop loading
        });
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto px-4 lg:px-8 ">
      <h2 className="text-3xl font-bold text-center mb-6">
        My Donated <span className="text-indigo-800">Campaigns</span> List
      </h2>

      {loading ? (
        // Loader Section
        <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-black-500"></div>
          </div>
      ) : donations.length === 0 ? (
        <p className="text-center text-gray-500">No Donation Found Here.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="card bg-base-100 shadow-xl border border-gray-200"
            >
              <figure className="w-full h-48">
                <img
                  src={donation.image}
                  alt={donation.campaignTitle}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-xl font-semibold mb-2">
                  {donation.title}
                </h2>
                <p className="text-gray-600 text-xl">
                  <span className="font-bold">Type:</span> {donation.type}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Description:</span>{" "}
                  {donation.description.slice(0, 100)}...
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Minimum Donation:</span> ${" "}
                  {donation.minimumDonation}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Deadline:</span>{" "}
                  {new Date(donation.deadline).toDateString()}
                </p>

                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Donor Email:</span>{" "}
                  {donation.userEmail}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonation;
