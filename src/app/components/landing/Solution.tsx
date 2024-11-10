import React from 'react';

const Solution: React.FC = () => {
  return (
    <div
      className="
      border-4 bg-blue-100 py-12 px-6 flex flex-col items-center"
    >
      {/* Top Section: Title and Text with Button */}
      <div
        className="
    w-4/5 flex flex-col md:flex-row justify-between items-start mb-8 mx-auto p-6 bg-blue-100 rounded-lg"
      >
        {/* Title */}
        <div
          className=" 
          md:w-1/2 2xl:w-1/3
        3xl:w-1/5 text-left mb-4 md:mb-0"
        >
          <h2 className="font-montagu text-5xl sm:text-5xl font-medium text-gray-800 ">
            Complete Solution to <br /> Your Property <br /> Needs
          </h2>
        </div>

        {/* Text and Button */}
        <div
          className="
        md:w-1/2
        2xl:w-1/3
         3xl:w-1/5
        text-left p-4"
        >
          <p className="text-gray-700 mb-4">
            You can explore a wide selection of high-quality properties to suit
            your lifestyle and budget. Let us help you find your dream home!
          </p>
          <button className="bg-orange-500 text-black px-8 py-3 font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300">
            More Portfolio
          </button>
        </div>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {/* Left Image - Large */}
        <div className="col-span-1 sm:col-span-2">
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="/propertySolution.svg"
              alt="Property 1"
              className="rounded-lg shadow-md w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Right Image Stack - Smaller */}
        <div className="flex flex-col gap-4">
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="/propertySolution.svg"
              alt="Property 2"
              className="rounded-lg shadow-md w-full h-full object-cover "
            />
          </div>
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="/propertySolution.svg"
              alt="Property 3"
              className="rounded-lg shadow-md w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
