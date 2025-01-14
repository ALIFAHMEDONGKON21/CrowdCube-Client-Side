import { useEffect, useState } from "react";

const TopContributors = () => {
    const [contributors, setContributors] = useState([]);
  
    useEffect(() => {
      const fetchContributors = async () => {
        try {
          const response = await fetch("https://crowduble-server.vercel.app/contributors"); // Replace with your API endpoint
          const data = await response.json();
          setContributors(data.slice(0, 5)); // Show top 5 contributors
        } catch (error) {
          console.error("Error fetching contributors:", error);
        }
      };
  
      fetchContributors();
    }, []);
  
    return (
      <div className="bg-blue-50 py-10 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Top Contributors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={contributor.avatar}
                alt={contributor.name}
                className="w-20 h-20 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{contributor.name}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Donated:</strong> ${contributor.amount}
              </p>
              <p className="text-gray-500 mt-2">{contributor.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TopContributors;
  