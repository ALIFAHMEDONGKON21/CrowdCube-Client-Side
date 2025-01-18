// import { useState, useEffect } from "react";
// import { Typewriter } from "react-simple-typewriter"; // Importing Typewriter

// const Banner = () => {
//   const images = [
//     "https://i.ibb.co/z5YkRJK/money-fantasy-scene-23-2151663075.jpg",
//     "https://i.ibb.co/z2K3Hz9/iconic-euro-sign-made-grid-business-people-icons-1009902-102994.jpg",
//     "https://i.ibb.co/Wxfq3m2/gentleman-praying-money-2022-mosaic-icon-1322560-23132.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered) return; // Pause on hover

//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);// Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length, isHovered]);

//   return (
//     <div className="text-black py-16 px-8 flex flex-wrap items-center justify-between">
//       {/* Left Section */}
//       <div className="max-w-lg">
//         <h1 className="text-4xl font-bold">
//           <Typewriter
//             words={["Welcome to Crowdcube", "Where Dreams Come Alive"]}
//             loop={0}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </h1>
//         <p className="mt-4 text-black-300">
//           We seek out world changers and difference makers around the globe and equip them to fulfill their unique purpose.
//         </p>
//         <div className="mt-6 flex space-x-4">
//           <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow">
//             Add Your Campaign
//           </button>
//           <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow">
//             Browse Campaigns
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div
//         className="w-full md:w-1/2"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={images[currentImageIndex]}
//           alt={`Banner Image ${currentImageIndex + 1}`}
//           className="rounded shadow-lg transition-opacity duration-500 object-cover w-full h-64"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import { useState, useEffect } from "react";
// import { Typewriter } from "react-simple-typewriter"; // Import Typewriter

// const Banner = () => {
//   const images = [
//     "https://i.ibb.co/z5YkRJK/money-fantasy-scene-23-2151663075.jpg",
//     "https://i.ibb.co/z2K3Hz9/iconic-euro-sign-made-grid-business-people-icons-1009902-102994.jpg",
//     "https://i.ibb.co/Wxfq3m2/gentleman-praying-money-2022-mosaic-icon-1322560-23132.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered) return; // Pause on hover
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000); // Change image every 2 seconds
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
//       {/* Left Section */}
//       <div className="text-center md:text-left max-w-lg">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//           <Typewriter
//             words={["Welcome to Crowdcube", "Where Dreams Come Alive"]}
//             loop={0}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </h1>
//         <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-lg">
//           We seek out world changers and difference makers around the globe and
//           equip them to fulfill their unique purpose.
//         </p>
//         <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
//           <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow text-sm md:text-base">
//             Add Your Campaign
//           </button>
//           <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow text-sm md:text-base">
//             Browse Campaigns
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div
//         className="w-full md:w-1/2"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           src={images[currentImageIndex]}
//           alt={`Banner ${currentImageIndex + 1}`}
//           className="w-full rounded-lg shadow-lg object-cover h-52 sm:h-72 md:h-80 lg:h-96"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;


import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const images = [
    "https://i.ibb.co/z5YkRJK/money-fantasy-scene-23-2151663075.jpg",
    "https://i.ibb.co/z2K3Hz9/iconic-euro-sign-made-grid-business-people-icons-1009902-102994.jpg",
    "https://i.ibb.co/Wxfq3m2/gentleman-praying-money-2022-mosaic-icon-1322560-23132.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-800 dark:text-gray-100">
            <Typewriter
              words={["Welcome to Crowdcube", "Where Dreams Come Alive"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We seek out world changers and difference makers around the globe and equip them to fulfill their unique purpose.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white  rounded shadow md:text-base transition">
              Add Your Campaign
            </button>
            <button className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white px-6 py-2 rounded shadow md:text-base transition">
              Browse Campaigns
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-[20rem] overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentImageIndex]}
              alt={`Banner Image ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

