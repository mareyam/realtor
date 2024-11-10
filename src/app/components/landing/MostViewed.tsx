'use client';
import React, { useState } from 'react';
import { properties } from '@/app/data/mostViewed';

const MostViewedSection = () => {
  const [filter, setFilter] = useState<string>('All Properties');

  const filteredProperties =
    filter === 'All Properties'
      ? properties
      : properties.filter((property) => property.type === filter);

  return (
    <div className="bg-blue-100 p-12 relative">
      {/* Absolute SVG Icon in Top-Right */}
      <img
        src="/bot.svg"
        alt="Decorative Icon"
        className="z-10 absolute top-4 right-4 w-24 h-24"
      />

      <div className="relative rounded-xl bg-gray-100 p-4">
        <div className="text-center mb-8">
          <h2 className="font-montagu text-4xl font-regular">Most Viewed</h2>
          <p className="text-black font-regular mt-2">
            We offer a wide selection of the newest properties ready for you to
            explore
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center">
          <div className="w-full sm:w-4/5 flex flex-col md:flex-row justify-between items-center bg-white border p-4 rounded-lg shadow-md">
            {/* Left-Aligned Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {['New Developments', 'Used Properties', 'Rentals'].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-4 rounded-xl 
                    hover:bg-[#11224E] hover:text-white 
                    ${
                      filter === type
                        ? 'bg-[#11224E] text-white'
                        : 'bg-white text-gray-600'
                    }`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>

            {/* Right-Aligned "All Properties" Button */}
            <button
              onClick={() => setFilter('All Properties')}
              className={`px-4 py-2 rounded-lg 
                hover:bg-[#11224E] hover:text-white 
                ${
                  filter === 'All Properties'
                    ? 'bg-[#11224E] text-white'
                    : 'bg-white text-gray-600'
                }`}
            >
              All Properties
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="mt-12 flex justify-center">
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-8">
            {filteredProperties.map((property, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-xl w-full max-w-sm sm:max-w-full mx-auto"
              >
                {/* Property Image */}
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-68 rounded-t-xl object-cover mb-4"
                />

                {/* Property Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {property.description}
                </p>

                {/* Property Price and View More Button */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-800">
                    {property.price}
                  </span>
                  <button className="bg-[#11224E] text-white text-xs p-4 rounded-md shadow-md hover:bg-blue-700">
                    View More
                  </button>
                </div>

                {/* Property Info (Bedrooms, Bathrooms, Area) */}
                <div className="flex justify-between items-center text-gray-600 text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <img src="bed.svg" alt="bed icon" className="h-4 w-4" />
                    <span className="text-xs">
                      {property.bedrooms} Bedroom
                      {property.bedrooms > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src="bath.svg" alt="bath icon" className="h-4 w-4" />
                    <span className="text-xs">
                      {property.bathrooms} Bathroom
                      {property.bathrooms > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src="area.svg" alt="area icon" className="h-4 w-4" />
                    <span className="text-xs">{property.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostViewedSection;
