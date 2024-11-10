import React from 'react';
import { chooseUsData } from '@/app/data/chooseus';

const ChooseUs: React.FC = () => {
  return (
    <div className="bg-blue-100 py-12 px-6 flex justify-center ">
      <div className="w-full p-8 px-12 rounded-lg bg-blue-100">
        <h2 className="font-montagu text-3xl font-regular text-center mb-8">
          Why Choose Us
        </h2>

        {/* Set gap to 0 on sm screens, and gap-8 on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-8 text-left">
          {chooseUsData.map((card, index) => (
            <div
              key={index}
              className="p-4 flex flex-col items-left rounded-lg bg-blue-100"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="rounded-lg shadow-md w-full object-cover mb-4 2xl:h-2/3"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="w-4/5 text-black flex-grow">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
