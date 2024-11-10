import React from 'react';

const FooterLinkSection: React.FC<{ title: string; links: string[] }> = ({
  title,
  links,
}) => {
  return (
    <div className="text-center md:text-left">
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="text-[#919191] space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-sm hover:text-orange-500">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8 text-center md:text-left">
        {/* Address */}
        <div className="text-lg text-black mb-4 md:mb-0">
          <p>123 Anywhere St.,</p>
          <p>Any City, ST 12345</p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center md:items-start gap-8 text-gray-700 w-full md:w-auto">
          <FooterLinkSection
            title="About Us"
            links={['How It Works', 'Contact Us', 'Blog & News']}
          />
          <FooterLinkSection
            title="Terms"
            links={[
              'Privacy Policy',
              'Terms & Condition',
              'Copyrights',
              'Payment',
            ]}
          />
          <FooterLinkSection
            title="Social Media"
            links={['Facebook', 'Instagram', 'Twitter', 'YouTube']}
          />
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-gray-800">We Are</h4>
          <h4 className="text-xl font-semibold text-gray-800">Ready To</h4>
          <h4 className="text-xl font-semibold text-orange-500">Help You</h4>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        ©2027 Havenova. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
