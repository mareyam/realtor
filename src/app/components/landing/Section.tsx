import React from 'react';

const ContactUsSection: React.FC = () => {
  return (
    <div className="bg-blue-100 py-12 px-6 flex flex-col items-center">
      <div className="w-4/5 bg-darkBlue text-white p-24 rounded-3xl mb-8 flex justify-center items-center">
        <h2 className="font-montagu text-3xl font-medium text-center">
          Your Dream Home Is In <br /> Front Of Your Eyes
        </h2>
      </div>

      {/* Contact Us Section */}
      <div className="text-center">
        <h3 className="font-montagu text-2xl font-bold text-gray-800 mb-4">
          Contact Us Now
        </h3>
        <p className="font-montagu text-gray-600 mb-8 max-w-2xl mx-auto">
          Don&apos;t hesitate to contact our team for more information or to set
          up an appointment.
          <br /> We are ready to help you find your dream home.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
