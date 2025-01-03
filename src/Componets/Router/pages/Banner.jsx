import { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "https://i.ibb.co/z5YkRJK/money-fantasy-scene-23-2151663075.jpg",
    "https://i.ibb.co/z2K3Hz9/iconic-euro-sign-made-grid-business-people-icons-1009902-102994.jpg",
    "https://i.ibb.co/Wxfq3m2/gentleman-praying-money-2022-mosaic-icon-1322560-23132.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className=" text-black py-16 px-8 flex items-center justify-between">
      {/* Left Section */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold">Welcome to Crowdcube<br />— Where Dream</h1>
        <p className="mt-4 text-black-300">
          We seek out world changers and difference makers around the globe and equip them to fulfill their unique purpose.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900
  text-white px-6 py-2 rounded shadow">
            Add Your Campaign
          </button>
          <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900
  text-white px-6 py-2 rounded shadow">
            Browse Campaigns
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img 
          src={images[currentImageIndex]}
          alt="Banner"
          className="rounded shadow-lg transition-opacity duration-500 object-cover w-full h-64"
        />
      </div>
    </div>
  );
};

export default Banner;
