'use client';
import { useState } from 'react';
import { filters } from '@/app/data/property';
import { DropdownProps } from '@/app/interfaces/HeroInterfaces';

const Hero = () => {
  const [dropdown1, setDropdown1] = useState<string>('Small House');
  const [dropdown2, setDropdown2] = useState<string>('Los Angeles');
  const [dropdown3, setDropdown3] = useState<string>('$50k');
  const [dropdown4, setDropdown4] = useState<string>('Any');

  const handleSearch = () => {
    console.log(
      'Search initiated with selections:',
      dropdown1,
      dropdown2,
      dropdown3,
      dropdown4
    );
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center overflow-x-hidden px-4"
      style={{ backgroundImage: "url('/Hero.svg')" }}
    >
      <div className="text-center mb-8 px-4 relative">
        <h1 className="font-montagu text-4xl md:text-5xl lg:text-88 font-regular">
          The <span className="text-primaryOrange">Solution</span> to Finding
          Your <br className="hidden md:block" />
          Dream Home is{' '}
          <span className="relative inline-block text-primaryOrange">
            Here
            <img
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              src="/HeroVector.svg"
            />
          </span>
        </h1>
        <p className="font-montagu mt-4 text-base md:text-md text-black font-regular">
          We help you find your dream home
        </p>
      </div>

      <div className="max-w-7xl w-full bg-white p-6 rounded-md shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
          {/* Dropdowns */}
          <Dropdown
            label="Property Type"
            options={filters.propertyTypes.map((option) => option.name)}
            selectedValue={dropdown1}
            onSelect={(value) => setDropdown1(value)}
          />
          <Dropdown
            label="Location"
            options={filters.locations.map((option) => option.name)}
            selectedValue={dropdown2}
            onSelect={(value) => setDropdown2(value)}
          />
          <Dropdown
            label="Price Range"
            options={filters.priceRanges.map((option) => option.price)}
            selectedValue={dropdown3}
            onSelect={(value) => setDropdown3(value)}
          />
          <Dropdown
            label="Filter"
            options={filters.additionalFilters.map((option) => option.name)}
            selectedValue={dropdown4}
            onSelect={(value) => setDropdown4(value)}
          />

          {/* Button Section on Large Screens */}
          <div className="hidden lg:flex justify-end">
            <button
              onClick={handleSearch}
              className="bg-primaryOrange text-white py-2 px-8 rounded-md w-full lg:w-auto"
            >
              Search Property
            </button>
          </div>
        </div>

        {/* Centered Button Section on Smaller Screens */}
        <div className="flex lg:hidden justify-center mt-4">
          <button
            onClick={handleSearch}
            className="bg-primaryOrange text-white py-2 px-6 rounded-md w-full md:w-auto"
          >
            Search Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Dropdown component remains the same but with the imported interface
const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2 relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs font-regular text-[#919191] text-left w-full flex items-center justify-between"
      >
        {label}
        <span className="text-gray-500 ml-2">⌄</span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="text-semibold text-sm block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <p className="font-medium text-md  mt-2">{selectedValue}</p>
    </div>
  );
};
