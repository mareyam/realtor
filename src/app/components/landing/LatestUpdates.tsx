import React from 'react';
import { updates } from '@/app/data/updates';

const LatestUpdates: React.FC = () => {
  return (
    <div className="bg-primaryBlue py-12 px-6 flex justify-center items-center">
      <div className="w-4/5">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-montagu text-3xl font-regular text-darkBlue">
            Latest Updates
          </h2>
          <button className="bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* map card ui */}
          {updates.map((update, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={update.imageUrl}
                alt={update.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-4">
                <h3 className="font-montserrat text-3xl font-bold text-gray-800 mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {update.description}
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
